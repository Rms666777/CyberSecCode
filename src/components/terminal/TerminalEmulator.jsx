import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, RotateCcw, Copy, Download, Cpu, HardDrive, Network, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { VirtualFileSystem } from '../VirtualFileSystem';
import { BashInterpreter, PythonInterpreter, JavaScriptInterpreter } from '../VirtualInterpreters';

const TerminalEmulator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [vfs] = useState(() => new VirtualFileSystem());
  const [bashInterpreter] = useState(() => new BashInterpreter(vfs));
  const [pythonInterpreter] = useState(() => new PythonInterpreter());
  const [jsInterpreter] = useState(() => new JavaScriptInterpreter());
  const [currentMode, setCurrentMode] = useState('bash'); // bash, python, javascript
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Welcome message
    setOutput([
      { type: 'system', content: '🐧 Welcome to CodeMaster Terminal - Alpine Linux v3.18' },
      { type: 'system', content: '📦 Mini rootfs with Python 3.11.6, Node.js 18.18.0, and BASH 5.1.16' },
      { type: 'system', content: '🔒 Cybersecurity tools: nmap, netcat, curl, wget, ssh, hashcat, john, sqlmap, nikto' },
      { type: 'system', content: '💡 Type "help" for available commands or "ls" to explore the filesystem' },
      { type: 'system', content: '🚀 Switch interpreters: "python3" for Python, "node" for JavaScript' },
      { type: 'system', content: '' }
    ]);
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const getPrompt = () => {
    switch (currentMode) {
      case 'python':
        return '>>> ';
      case 'javascript':
        return '> ';
      default:
        return `user@alpine:${vfs.currentPath.replace('/home/user', '~')}$ `;
    }
  };

  const getModeColor = () => {
    switch (currentMode) {
      case 'python':
        return 'text-blue-400';
      case 'javascript':
        return 'text-yellow-400';
      default:
        return 'text-green-400';
    }
  };

  const executeCommand = (command) => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    // Add to history
    setHistory(prev => [...prev, trimmedCommand]);
    setHistoryIndex(-1);

    // Add command to output
    setOutput(prev => [...prev, { 
      type: 'command', 
      content: `${getPrompt()}${trimmedCommand}`,
      mode: currentMode
    }]);

    let result = '';

    // Handle mode switching and command execution
    if (currentMode === 'bash') {
      if (trimmedCommand === 'python3' || trimmedCommand === 'python') {
        setCurrentMode('python');
        result = 'Python 3.11.6 (main, Oct  8 2023, 05:06:43) [GCC 13.2.0] on linux\nType "help", "copyright", "credits" or "license" for more information.\nType "exit()" to return to bash.';
      } else if (trimmedCommand === 'node') {
        setCurrentMode('javascript');
        result = 'Welcome to Node.js v18.18.0.\nType ".help" for more information.\nType ".exit" to return to bash.';
      } else if (trimmedCommand === 'help') {
        result = `🔧 Available Commands:
        
📁 File System:
  ls [path]     - List directory contents
  cd [path]     - Change directory
  pwd           - Print working directory
  cat [file]    - Display file contents
  mkdir [dir]   - Create directory
  touch [file]  - Create empty file
  find [path]   - Find files and directories
  
🔍 Text Processing:
  grep [pattern] [file] - Search text patterns
  echo [text]   - Display text
  
👤 System Info:
  whoami        - Current user
  uname [-a]    - System information
  ps            - Running processes
  history       - Command history
  
🐍 Interpreters:
  python3       - Start Python interpreter
  node          - Start JavaScript interpreter
  bash [script] - Execute bash script
  
🔒 Security Tools:
  nmap [args]   - Network scanner
  netcat [args] - Network utility
  curl [url]    - HTTP client
  wget [url]    - Download files
  ssh [host]    - Secure shell
  hashcat       - Password cracker
  john          - John the Ripper
  sqlmap        - SQL injection tool
  nikto         - Web scanner
  
🛠️ Utilities:
  clear         - Clear screen
  which [cmd]   - Locate command
  
Type "ls" to explore the filesystem or try "cd scripts" to see example files!`;
      } else {
        result = bashInterpreter.execute(trimmedCommand);
        if (result === 'CLEAR_SCREEN') {
          setOutput([]);
          return;
        }
      }
    } else if (currentMode === 'python') {
      if (trimmedCommand === 'exit()' || trimmedCommand === 'quit()') {
        setCurrentMode('bash');
        result = 'Returning to bash shell...';
      } else if (trimmedCommand === 'help') {
        result = `🐍 Python Interactive Shell:
        
Available features:
  print(value)     - Print output
  variables        - Basic variable assignment (x = 5)
  math operations  - +, -, *, / 
  strings          - "text" or 'text'
  f-strings        - f"Hello {variable}"
  imports          - import module
  functions        - def function_name():
  
Examples:
  >>> name = "CodeMaster"
  >>> print(f"Hello {name}!")
  >>> x = 10 + 5
  >>> print(x)
  
Type exit() to return to bash shell.`;
      } else {
        result = pythonInterpreter.execute(trimmedCommand);
      }
    } else if (currentMode === 'javascript') {
      if (trimmedCommand === '.exit') {
        setCurrentMode('bash');
        result = 'Returning to bash shell...';
      } else if (trimmedCommand === '.help') {
        result = `⚡ Node.js Interactive Shell:
        
Available features:
  console.log(value) - Print output
  variables          - let, const, var
  functions          - function name() {}
  template literals  - \`Hello \${variable}\`
  
Examples:
  > let name = "CodeMaster"
  > console.log(\`Hello \${name}!\`)
  > const x = 10 + 5
  > console.log(x)
  
Type .exit to return to bash shell.`;
      } else {
        result = jsInterpreter.execute(trimmedCommand);
      }
    }

    if (result) {
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: result,
        mode: currentMode
      }]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple tab completion for common commands
      const commands = ['ls', 'cd', 'cat', 'pwd', 'help', 'clear', 'python3', 'node', 'nmap', 'curl'];
      const matches = commands.filter(cmd => cmd.startsWith(input));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const clearTerminal = () => {
    setOutput([]);
  };

  const copyOutput = () => {
    const text = output.map(line => line.content).join('\n');
    navigator.clipboard.writeText(text);
  };

  const downloadLog = () => {
    const text = output.map(line => line.content).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'terminal-log.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-green-400" />
              <h1 className="text-2xl font-bold">Alpine Linux Terminal</h1>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center space-x-1">
                <Cpu className="w-4 h-4" />
                <span>x86_64</span>
              </div>
              <div className="flex items-center space-x-1">
                <HardDrive className="w-4 h-4" />
                <span>Mini rootfs</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Security Tools</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
              currentMode === 'bash' ? 'bg-green-900 text-green-300' :
              currentMode === 'python' ? 'bg-blue-900 text-blue-300' :
              'bg-yellow-900 text-yellow-300'
            }`}>
              {currentMode.toUpperCase()}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={clearTerminal}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Clear
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={copyOutput}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={downloadLog}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-black rounded-lg border border-gray-700 shadow-2xl overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-sm text-gray-400">
              user@alpine - {vfs.currentPath}
            </div>
            <div className="text-sm text-gray-400">
              {new Date().toLocaleTimeString()}
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 h-96 overflow-y-auto scrollbar-thin" ref={outputRef}>
            {output.map((line, index) => (
              <div key={index} className="mb-1">
                {line.type === 'system' && (
                  <div className="text-cyan-400">{line.content}</div>
                )}
                {line.type === 'command' && (
                  <div className={`${getModeColor()} font-semibold`}>{line.content}</div>
                )}
                {line.type === 'output' && (
                  <div className="text-gray-300 whitespace-pre-wrap">{line.content}</div>
                )}
              </div>
            ))}
            
            {/* Input Line */}
            <div className="flex items-center">
              <span className={`${getModeColor()} mr-2`}>{getPrompt()}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none"
                placeholder="Type a command..."
                autoFocus
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Commands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <Button
            variant="outline"
            onClick={() => executeCommand('ls')}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            📁 List Files
          </Button>
          <Button
            variant="outline"
            onClick={() => executeCommand('cd scripts')}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            📝 View Scripts
          </Button>
          <Button
            variant="outline"
            onClick={() => executeCommand('python3')}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            🐍 Python
          </Button>
          <Button
            variant="outline"
            onClick={() => executeCommand('node')}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            ⚡ Node.js
          </Button>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-green-400 mb-2">🐧 System Info</h3>
            <p className="text-gray-300 text-sm">Alpine Linux v3.18</p>
            <p className="text-gray-300 text-sm">Kernel: 5.15.0</p>
            <p className="text-gray-300 text-sm">Architecture: x86_64</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">🛠️ Interpreters</h3>
            <p className="text-gray-300 text-sm">Python 3.11.6</p>
            <p className="text-gray-300 text-sm">Node.js 18.18.0</p>
            <p className="text-gray-300 text-sm">GNU Bash 5.1.16</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-red-400 mb-2">🔒 Security Tools</h3>
            <p className="text-gray-300 text-sm">nmap, netcat, curl</p>
            <p className="text-gray-300 text-sm">hashcat, john, sqlmap</p>
            <p className="text-gray-300 text-sm">nikto, dirb, gobuster</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TerminalEmulator;
