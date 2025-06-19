// Virtual Interpreters for Python, JavaScript, and BASH
export class PythonInterpreter {
  constructor() {
    this.variables = {};
    this.functions = {};
    this.imports = new Set();
  }

  execute(code) {
    try {
      // Simple Python interpreter simulation
      const lines = code.split('\n').filter(line => line.trim());
      let output = [];
      
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        
        const result = this.executeLine(trimmed);
        if (result !== null && result !== undefined) {
          output.push(result);
        }
      }
      
      return output.join('\n');
    } catch (error) {
      return `Python Error: ${error.message}`;
    }
  }

  executeLine(line) {
    // Handle print statements
    if (line.startsWith('print(')) {
      const content = line.slice(6, -1);
      return this.evaluateExpression(content);
    }
    
    // Handle variable assignments
    if (line.includes('=') && !line.includes('==')) {
      const [varName, value] = line.split('=').map(s => s.trim());
      this.variables[varName] = this.evaluateExpression(value);
      return null;
    }
    
    // Handle imports
    if (line.startsWith('import ') || line.startsWith('from ')) {
      this.imports.add(line);
      return `Imported: ${line}`;
    }
    
    // Handle function definitions
    if (line.startsWith('def ')) {
      const funcName = line.split('(')[0].replace('def ', '');
      this.functions[funcName] = line;
      return `Function ${funcName} defined`;
    }
    
    // Handle simple expressions
    return this.evaluateExpression(line);
  }

  evaluateExpression(expr) {
    // Remove quotes for strings
    if ((expr.startsWith('"') && expr.endsWith('"')) || 
        (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1);
    }
    
    // Handle f-strings
    if (expr.startsWith('f"') || expr.startsWith("f'")) {
      let result = expr.slice(2, -1);
      // Simple f-string variable substitution
      Object.keys(this.variables).forEach(varName => {
        result = result.replace(`{${varName}}`, this.variables[varName]);
      });
      return result;
    }
    
    // Handle variables
    if (this.variables[expr]) {
      return this.variables[expr];
    }
    
    // Handle numbers
    if (!isNaN(expr)) {
      return parseFloat(expr);
    }
    
    // Handle simple math
    if (expr.includes('+') || expr.includes('-') || expr.includes('*') || expr.includes('/')) {
      try {
        return eval(expr.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (match) => {
          return this.variables[match] || match;
        }));
      } catch {
        return expr;
      }
    }
    
    return expr;
  }
}

export class JavaScriptInterpreter {
  constructor() {
    this.variables = {};
    this.functions = {};
  }

  execute(code) {
    try {
      const lines = code.split('\n').filter(line => line.trim());
      let output = [];
      
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('//')) continue;
        
        const result = this.executeLine(trimmed);
        if (result !== null && result !== undefined) {
          output.push(result);
        }
      }
      
      return output.join('\n');
    } catch (error) {
      return `JavaScript Error: ${error.message}`;
    }
  }

  executeLine(line) {
    // Handle console.log
    if (line.startsWith('console.log(')) {
      const content = line.slice(12, -1);
      return this.evaluateExpression(content);
    }
    
    // Handle variable declarations
    if (line.startsWith('let ') || line.startsWith('const ') || line.startsWith('var ')) {
      const parts = line.split('=');
      if (parts.length === 2) {
        const varName = parts[0].replace(/^(let|const|var)\s+/, '').trim();
        this.variables[varName] = this.evaluateExpression(parts[1].trim());
      }
      return null;
    }
    
    // Handle function declarations
    if (line.startsWith('function ')) {
      const funcName = line.split('(')[0].replace('function ', '');
      this.functions[funcName] = line;
      return `Function ${funcName} defined`;
    }
    
    return this.evaluateExpression(line);
  }

  evaluateExpression(expr) {
    // Remove quotes for strings
    if ((expr.startsWith('"') && expr.endsWith('"')) || 
        (expr.startsWith("'") && expr.endsWith("'"))) {
      return expr.slice(1, -1);
    }
    
    // Handle template literals
    if (expr.startsWith('`') && expr.endsWith('`')) {
      let result = expr.slice(1, -1);
      Object.keys(this.variables).forEach(varName => {
        result = result.replace(`\${${varName}}`, this.variables[varName]);
      });
      return result;
    }
    
    // Handle variables
    if (this.variables[expr]) {
      return this.variables[expr];
    }
    
    // Handle numbers
    if (!isNaN(expr)) {
      return parseFloat(expr);
    }
    
    return expr;
  }
}

export class BashInterpreter {
  constructor(vfs) {
    this.vfs = vfs;
    this.variables = {
      'USER': 'user',
      'HOME': '/home/user',
      'PATH': '/bin:/usr/bin',
      'PWD': '/home/user'
    };
    this.aliases = {
      'll': 'ls -la',
      'la': 'ls -A'
    };
  }

  execute(command) {
    try {
      const trimmed = command.trim();
      if (!trimmed || trimmed.startsWith('#')) return '';
      
      // Handle variable assignments
      if (trimmed.includes('=') && !trimmed.includes(' ')) {
        const [varName, value] = trimmed.split('=');
        this.variables[varName] = value.replace(/['"]/g, '');
        return '';
      }
      
      // Handle aliases
      if (this.aliases[trimmed]) {
        return this.execute(this.aliases[trimmed]);
      }
      
      const parts = trimmed.split(' ');
      const cmd = parts[0];
      const args = parts.slice(1);
      
      return this.executeCommand(cmd, args);
    } catch (error) {
      return `bash: ${error.message}`;
    }
  }

  executeCommand(cmd, args) {
    switch (cmd) {
      case 'ls':
        return this.vfs.ls(args[0] || '.');
      case 'cd':
        const result = this.vfs.cd(args[0] || '~');
        this.variables['PWD'] = this.vfs.currentPath;
        return result;
      case 'pwd':
        return this.vfs.pwd();
      case 'cat':
        return args.length > 0 ? this.vfs.cat(args[0]) : 'cat: missing file operand';
      case 'echo':
        return this.vfs.echo(args);
      case 'whoami':
        return this.vfs.whoami();
      case 'uname':
        return this.vfs.uname(args.join(' '));
      case 'ps':
        return this.vfs.ps(args.join(' '));
      case 'mkdir':
        return args.length > 0 ? this.vfs.mkdir(args[0]) : 'mkdir: missing operand';
      case 'touch':
        return args.length > 0 ? this.vfs.touch(args[0]) : 'touch: missing file operand';
      case 'grep':
        return args.length >= 2 ? this.vfs.grep(args[0], args[1]) : 'grep: missing arguments';
      case 'find':
        return this.vfs.find(args[0] || '.', args.slice(1));
      case 'which':
        return args.length > 0 ? this.vfs.which(args[0]) : 'which: missing argument';
      case 'history':
        return this.vfs.history();
      case 'clear':
        return 'CLEAR_SCREEN';
      case 'python3':
      case 'python':
        if (args.length > 0) {
          const file = this.vfs.getNode(args[0]);
          if (file && file.type === 'file') {
            const interpreter = new PythonInterpreter();
            return interpreter.execute(file.content);
          }
          return `python3: can't open file '${args[0]}': No such file or directory`;
        }
        return 'Python 3.11.6 (Interactive mode - type Python code)';
      case 'node':
        if (args.length > 0) {
          const file = this.vfs.getNode(args[0]);
          if (file && file.type === 'file') {
            const interpreter = new JavaScriptInterpreter();
            return interpreter.execute(file.content);
          }
          return `node: can't open file '${args[0]}': No such file or directory`;
        }
        return 'Node.js v18.18.0 (Interactive mode - type JavaScript code)';
      case 'bash':
        if (args.length > 0) {
          const file = this.vfs.getNode(args[0]);
          if (file && file.type === 'file') {
            return this.execute(file.content);
          }
          return `bash: ${args[0]}: No such file or directory`;
        }
        return 'GNU bash, version 5.1.16';
      case 'nmap':
        return this.simulateNmap(args);
      case 'netcat':
      case 'nc':
        return this.simulateNetcat(args);
      case 'curl':
        return this.simulateCurl(args);
      case 'wget':
        return this.simulateWget(args);
      case 'ssh':
        return this.simulateSSH(args);
      case 'hashcat':
        return 'hashcat (v6.2.6) starting...\nSimulated password cracking tool';
      case 'john':
        return 'John the Ripper 1.9.0\nSimulated password cracker';
      case 'sqlmap':
        return 'sqlmap/1.7.2\nSimulated SQL injection tool';
      case 'nikto':
        return 'Nikto v2.5.0\nSimulated web vulnerability scanner';
      case 'dirb':
        return 'DIRB v2.22\nSimulated web content scanner';
      case 'gobuster':
        return 'Gobuster v3.5\nSimulated directory/file brute-forcer';
      default:
        // Check if command exists in /bin
        const binNode = this.vfs.getNode('/bin');
        if (binNode && binNode.children && binNode.children[cmd]) {
          return `${cmd}: ${binNode.children[cmd].content}`;
        }
        return `bash: ${cmd}: command not found`;
    }
  }

  simulatePing(args) {
    if (args.length === 0) return 'ping: missing host';
    const host = args[0];
    return `PING ${host} (192.168.1.1): 56 data bytes\n64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.234 ms\n64 bytes from 192.168.1.1: icmp_seq=2 ttl=64 time=1.456 ms\n--- ${host} ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss`;
  }

  simulateNmap(args) {
    if (args.includes('-sn')) {
      return `Starting Nmap scan...
Nmap scan report for 192.168.1.1
Host is up (0.001s latency).
Nmap scan report for 192.168.1.100
Host is up (0.002s latency).
Nmap done: 254 IP addresses (2 hosts up) scanned in 2.5 seconds`;
    }
    return 'Nmap 7.93 - Network exploration tool and security scanner';
  }

  simulateNetcat(args) {
    if (args.includes('-l')) {
      return 'Listening on port ' + (args[args.indexOf('-l') + 1] || '1234');
    }
    return 'Netcat 1.10 - TCP/IP swiss army knife';
  }

  simulateCurl(args) {
    if (args.length > 0) {
      return `Connecting to ${args[0]}...
HTTP/1.1 200 OK
Content-Type: text/html
<html><body>Simulated response</body></html>`;
    }
    return 'curl: try \'curl --help\' for more information';
  }

  simulateWget(args) {
    if (args.length > 0) {
      return `--2024-01-01 12:00:00--  ${args[0]}
Resolving host... 192.168.1.1
Connecting to host... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1024 [text/html]
Saving to: 'index.html'
100%[===================>] 1,024  --.-KB/s    in 0s
2024-01-01 12:00:00 (10.2 MB/s) - 'index.html' saved [1024/1024]`;
    }
    return 'wget: missing URL';
  }

  simulateSSH(args) {
    if (args.length > 0) {
      return `ssh: connect to host ${args[0]} port 22: Connection refused`;
    }
    return 'usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] destination [command]';
  }
}
