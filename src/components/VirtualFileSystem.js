// Virtual File System for Alpine Linux simulation
export class VirtualFileSystem {
  constructor() {
    this.currentPath = '/home/user';
    this.fileSystem = {
      '/': {
        type: 'directory',
        children: {
          'bin': {
            type: 'directory',
            children: {
              // Core system
              'bash': { type: 'executable', content: 'GNU bash, version 5.1.16' },
              'sh': { type: 'executable', content: 'POSIX shell' },
              'busybox': { type: 'executable', content: 'BusyBox v1.36.1 multi-call binary' },
              
              // Interpreters
              'python3': { type: 'executable', content: 'Python 3.11.6' },
              'python': { type: 'executable', content: 'Python 3.11.6' },
              'node': { type: 'executable', content: 'Node.js v18.18.0' },
              'npm': { type: 'executable', content: 'Node Package Manager' },
              
              // File operations
              'ls': { type: 'executable', content: 'list directory contents' },
              'cat': { type: 'executable', content: 'concatenate files' },
              'cp': { type: 'executable', content: 'copy files' },
              'mv': { type: 'executable', content: 'move/rename files' },
              'rm': { type: 'executable', content: 'remove files' },
              'mkdir': { type: 'executable', content: 'create directories' },
              'rmdir': { type: 'executable', content: 'remove directories' },
              'touch': { type: 'executable', content: 'create empty files' },
              'chmod': { type: 'executable', content: 'change file permissions' },
              'chown': { type: 'executable', content: 'change file ownership' },
              'find': { type: 'executable', content: 'search files and directories' },
              'locate': { type: 'executable', content: 'find files by name' },
              'which': { type: 'executable', content: 'locate command' },
              'whereis': { type: 'executable', content: 'locate binary, source, manual' },
              'file': { type: 'executable', content: 'determine file type' },
              'stat': { type: 'executable', content: 'display file status' },
              'du': { type: 'executable', content: 'disk usage' },
              'df': { type: 'executable', content: 'filesystem disk space' },
              'ln': { type: 'executable', content: 'create links' },
              
              // Text processing
              'grep': { type: 'executable', content: 'search text patterns' },
              'egrep': { type: 'executable', content: 'extended grep' },
              'fgrep': { type: 'executable', content: 'fixed string grep' },
              'sed': { type: 'executable', content: 'stream editor' },
              'awk': { type: 'executable', content: 'pattern scanning and processing' },
              'sort': { type: 'executable', content: 'sort lines of text' },
              'uniq': { type: 'executable', content: 'report unique lines' },
              'cut': { type: 'executable', content: 'extract columns' },
              'tr': { type: 'executable', content: 'translate characters' },
              'wc': { type: 'executable', content: 'word, line, character count' },
              'head': { type: 'executable', content: 'output first lines' },
              'tail': { type: 'executable', content: 'output last lines' },
              'less': { type: 'executable', content: 'view file contents' },
              'more': { type: 'executable', content: 'view file contents' },
              'diff': { type: 'executable', content: 'compare files' },
              'patch': { type: 'executable', content: 'apply patches' },
              
              // System info
              'ps': { type: 'executable', content: 'show running processes' },
              'top': { type: 'executable', content: 'display running processes' },
              'htop': { type: 'executable', content: 'interactive process viewer' },
              'kill': { type: 'executable', content: 'terminate processes' },
              'killall': { type: 'executable', content: 'kill processes by name' },
              'jobs': { type: 'executable', content: 'show active jobs' },
              'bg': { type: 'executable', content: 'put jobs in background' },
              'fg': { type: 'executable', content: 'bring jobs to foreground' },
              'nohup': { type: 'executable', content: 'run commands immune to hangups' },
              'uname': { type: 'executable', content: 'system information' },
              'whoami': { type: 'executable', content: 'current username' },
              'id': { type: 'executable', content: 'user and group IDs' },
              'who': { type: 'executable', content: 'show logged in users' },
              'w': { type: 'executable', content: 'show logged in users and activity' },
              'uptime': { type: 'executable', content: 'system uptime' },
              'date': { type: 'executable', content: 'display or set date' },
              'cal': { type: 'executable', content: 'display calendar' },
              'env': { type: 'executable', content: 'display environment' },
              'printenv': { type: 'executable', content: 'print environment variables' },
              'export': { type: 'executable', content: 'set environment variables' },
              'alias': { type: 'executable', content: 'create command aliases' },
              'unalias': { type: 'executable', content: 'remove aliases' },
              'history': { type: 'executable', content: 'command history' },
              
              // Archive and compression
              'tar': { type: 'executable', content: 'archive files' },
              'gzip': { type: 'executable', content: 'compress files' },
              'gunzip': { type: 'executable', content: 'decompress files' },
              'zip': { type: 'executable', content: 'create zip archives' },
              'unzip': { type: 'executable', content: 'extract zip archives' },
              
              // Network tools
              'ping': { type: 'executable', content: 'send ICMP echo requests' },
              'ping6': { type: 'executable', content: 'ping for IPv6' },
              'traceroute': { type: 'executable', content: 'trace network route' },
              'netstat': { type: 'executable', content: 'network connections' },
              'ss': { type: 'executable', content: 'socket statistics' },
              'ifconfig': { type: 'executable', content: 'configure network interface' },
              'ip': { type: 'executable', content: 'show/manipulate routing' },
              'route': { type: 'executable', content: 'show/manipulate routing table' },
              'arp': { type: 'executable', content: 'manipulate ARP cache' },
              'dig': { type: 'executable', content: 'DNS lookup' },
              'nslookup': { type: 'executable', content: 'DNS lookup' },
              'host': { type: 'executable', content: 'DNS lookup' },
              'wget': { type: 'executable', content: 'retrieve files from web' },
              'curl': { type: 'executable', content: 'transfer data from servers' },
              'ftp': { type: 'executable', content: 'file transfer protocol' },
              'sftp': { type: 'executable', content: 'secure file transfer' },
              'scp': { type: 'executable', content: 'secure copy' },
              'rsync': { type: 'executable', content: 'remote sync' },
              'ssh': { type: 'executable', content: 'secure shell client' },
              'telnet': { type: 'executable', content: 'telnet client' },
              
              // Security and penetration testing
              'nmap': { type: 'executable', content: 'Network Mapper' },
              'masscan': { type: 'executable', content: 'fast port scanner' },
              'zmap': { type: 'executable', content: 'internet-wide scanner' },
              'netcat': { type: 'executable', content: 'networking utility' },
              'nc': { type: 'executable', content: 'netcat alias' },
              'socat': { type: 'executable', content: 'multipurpose relay' },
              'tcpdump': { type: 'executable', content: 'packet analyzer' },
              'wireshark': { type: 'executable', content: 'network protocol analyzer' },
              'tshark': { type: 'executable', content: 'terminal wireshark' },
              'aircrack-ng': { type: 'executable', content: 'WiFi security auditing' },
              'hashcat': { type: 'executable', content: 'password recovery tool' },
              'john': { type: 'executable', content: 'John the Ripper password cracker' },
              'hydra': { type: 'executable', content: 'login cracker' },
              'medusa': { type: 'executable', content: 'brute force tool' },
              'metasploit': { type: 'executable', content: 'penetration testing framework' },
              'msfconsole': { type: 'executable', content: 'metasploit console' },
              'burpsuite': { type: 'executable', content: 'web security testing' },
              'sqlmap': { type: 'executable', content: 'SQL injection tool' },
              'nikto': { type: 'executable', content: 'web server scanner' },
              'dirb': { type: 'executable', content: 'web content scanner' },
              'dirbuster': { type: 'executable', content: 'directory brute forcer' },
              'gobuster': { type: 'executable', content: 'directory/file brute-forcer' },
              'wfuzz': { type: 'executable', content: 'web fuzzer' },
              'ffuf': { type: 'executable', content: 'fast web fuzzer' },
              'enum4linux': { type: 'executable', content: 'SMB enumeration' },
              'smbclient': { type: 'executable', content: 'SMB client' },
              'rpcclient': { type: 'executable', content: 'RPC client' },
              'showmount': { type: 'executable', content: 'show NFS exports' },
              
              // System utilities
              'clear': { type: 'executable', content: 'clear terminal screen' },
              'reset': { type: 'executable', content: 'reset terminal' },
              'echo': { type: 'executable', content: 'display text' },
              'printf': { type: 'executable', content: 'formatted output' },
              'read': { type: 'executable', content: 'read user input' },
              'sleep': { type: 'executable', content: 'delay execution' },
              'timeout': { type: 'executable', content: 'run command with timeout' },
              'watch': { type: 'executable', content: 'execute command repeatedly' },
              'yes': { type: 'executable', content: 'output string repeatedly' },
              'true': { type: 'executable', content: 'return true' },
              'false': { type: 'executable', content: 'return false' },
              'test': { type: 'executable', content: 'evaluate expressions' },
              'expr': { type: 'executable', content: 'evaluate expressions' },
              'bc': { type: 'executable', content: 'calculator' },
              'dc': { type: 'executable', content: 'desk calculator' },
              'seq': { type: 'executable', content: 'generate sequences' },
              'shuf': { type: 'executable', content: 'shuffle lines' },
              'factor': { type: 'executable', content: 'factor numbers' },
              
              // Text editors
              'vi': { type: 'executable', content: 'vi text editor' },
              'vim': { type: 'executable', content: 'vim text editor' },
              'nano': { type: 'executable', content: 'nano text editor' },
              'emacs': { type: 'executable', content: 'emacs text editor' },
              
              // Package management
              'apk': { type: 'executable', content: 'Alpine package manager' },
              'apt': { type: 'executable', content: 'Debian package manager' },
              'yum': { type: 'executable', content: 'RedHat package manager' },
              'dnf': { type: 'executable', content: 'Fedora package manager' },
              'pacman': { type: 'executable', content: 'Arch package manager' },
              'pip': { type: 'executable', content: 'Python package manager' },
              'pip3': { type: 'executable', content: 'Python3 package manager' },
              
              // Development tools
              'git': { type: 'executable', content: 'version control system' },
              'gcc': { type: 'executable', content: 'GNU C compiler' },
              'g++': { type: 'executable', content: 'GNU C++ compiler' },
              'make': { type: 'executable', content: 'build automation' },
              'cmake': { type: 'executable', content: 'cross-platform build system' },
              'gdb': { type: 'executable', content: 'GNU debugger' },
              'strace': { type: 'executable', content: 'trace system calls' },
              'ltrace': { type: 'executable', content: 'trace library calls' },
              'objdump': { type: 'executable', content: 'display object file info' },
              'nm': { type: 'executable', content: 'list symbols' },
              'strings': { type: 'executable', content: 'extract strings' },
              'hexdump': { type: 'executable', content: 'hex dump' },
              'xxd': { type: 'executable', content: 'hex dump' },
              'od': { type: 'executable', content: 'octal dump' }
            }
          },
          'etc': {
            type: 'directory',
            children: {
              'passwd': { type: 'file', content: 'root:x:0:0:root:/root:/bin/bash\nuser:x:1000:1000:user:/home/user:/bin/bash' },
              'hosts': { type: 'file', content: '127.0.0.1 localhost\n::1 localhost' },
              'resolv.conf': { type: 'file', content: 'nameserver 8.8.8.8\nnameserver 8.8.4.4' }
            }
          },
          'home': {
            type: 'directory',
            children: {
              'user': {
                type: 'directory',
                children: {
                  'Documents': { type: 'directory', children: {} },
                  'Downloads': { type: 'directory', children: {} },
                  'scripts': {
                    type: 'directory',
                    children: {
                      'hello.py': { type: 'file', content: 'print("Hello from Python!")' },
                      'hello.js': { type: 'file', content: 'console.log("Hello from Node.js!");' },
                       'hello.sh': { type: 'file', content: '#!/bin/bash\necho "Hello from BASH!"' },
                       'scan.sh': { type: 'file', content: '#!/bin/bash\n# Network scanning script\nnmap -sn 192.168.1.0/24' },
                       'backup.sh': { type: 'file', content: '#!/bin/bash\n# Backup script\ntar -czf backup_$(date +%Y%m%d).tar.gz /home/user/Documents' }
                    }
                  },
                  'tools': {
                    type: 'directory',
                    children: {
                      'wordlists': {
                        type: 'directory',
                        children: {
                           'common.txt': { type: 'file', content: 'admin\npassword\n123456\nroot\nuser' },
                           'directories.txt': { type: 'file', content: 'admin\napi\nbackup\nconfig\ntest' }
                        }
                      }
                    }
                  },
                  '.bashrc': { type: 'file', content: 'export PS1="\\u@alpine:\\w$ "\\nalias ll="ls -la"\\nalias la="ls -A"' }
                }
              }
            }
          },
          'tmp': { type: 'directory', children: {} },
          'var': {
            type: 'directory',
            children: {
              'log': {
                type: 'directory',
                children: {
                  'messages': { type: 'file', content: 'System log messages...' },
                  'auth.log': { type: 'file', content: 'Authentication log...' }
                }
              }
            }
          }
        }
      }
    };
  }

  resolvePath(path) {
    if (path.startsWith('/')) {
      return path;
    }
    if (path === '~') {
      return '/home/user';
    }
    if (path.startsWith('~/')) {
      return '/home/user' + path.slice(1);
    }
    if (path === '..') {
      const parts = this.currentPath.split('/').filter(p => p);
      parts.pop();
      return '/' + parts.join('/');
    }
    if (path.startsWith('../')) {
      const parts = this.currentPath.split('/').filter(p => p);
      parts.pop();
      return '/' + parts.join('/') + '/' + path.slice(3);
    }
    return this.currentPath + (this.currentPath.endsWith('/') ? '' : '/') + path;
  }

  getNode(path) {
    const resolvedPath = this.resolvePath(path);
    const parts = resolvedPath.split('/').filter(p => p);
    let current = this.fileSystem['/'];
    
    for (const part of parts) {
      if (current.type !== 'directory' || !current.children || !current.children[part]) {
        return null;
      }
      current = current.children[part];
    }
    return current;
  }

  ls(path = '.') {
    const targetPath = path === '.' ? this.currentPath : this.resolvePath(path);
    const node = this.getNode(targetPath);
    
    if (!node) {
      return `ls: cannot access '${path}': No such file or directory`;
    }
    
    if (node.type !== 'directory') {
      return path;
    }
    
    const items = Object.keys(node.children || {});
    return items.length > 0 ? items.join('  ') : '';
  }

  cd(path) {
    if (!path || path === '~') {
      this.currentPath = '/home/user';
      return '';
    }
    
    const targetPath = this.resolvePath(path);
    const node = this.getNode(targetPath);
    
    if (!node) {
      return `cd: ${path}: No such file or directory`;
    }
    
    if (node.type !== 'directory') {
      return `cd: ${path}: Not a directory`;
    }
    
    this.currentPath = targetPath;
    return '';
  }

  cat(path) {
    const node = this.getNode(path);
    
    if (!node) {
      return `cat: ${path}: No such file or directory`;
    }
    
    if (node.type === 'directory') {
      return `cat: ${path}: Is a directory`;
    }
    
    return node.content || '';
  }

  pwd() {
    return this.currentPath;
  }

  whoami() {
    return 'user';
  }

  uname(args = '') {
    if (args.includes('-a')) {
      return 'Linux alpine 5.15.0 #1 SMP x86_64 GNU/Linux';
    }
    return 'Linux';
  }

  ps(args = '') {
    return `  PID TTY          TIME CMD
 1234 pts/0    00:00:01 bash
 5678 pts/0    00:00:00 ps`;
  }

  mkdir(path) {
    const parentPath = path.includes('/') ? path.substring(0, path.lastIndexOf('/')) : this.currentPath;
    const dirName = path.includes('/') ? path.substring(path.lastIndexOf('/') + 1) : path;
    
    const parentNode = this.getNode(parentPath);
    if (!parentNode || parentNode.type !== 'directory') {
      return `mkdir: cannot create directory '${path}': No such file or directory`;
    }
    
    if (parentNode.children[dirName]) {
      return `mkdir: cannot create directory '${path}': File exists`;
    }
    
    parentNode.children[dirName] = { type: 'directory', children: {} };
    return '';
  }

  touch(path) {
    const parentPath = path.includes('/') ? path.substring(0, path.lastIndexOf('/')) : this.currentPath;
    const fileName = path.includes('/') ? path.substring(path.lastIndexOf('/') + 1) : path;
    
    const parentNode = this.getNode(parentPath);
    if (!parentNode || parentNode.type !== 'directory') {
      return `touch: cannot touch '${path}': No such file or directory`;
    }
    
    if (!parentNode.children[fileName]) {
      parentNode.children[fileName] = { type: 'file', content: '' };
    }
    return '';
  }

  echo(args) {
    return args.join(' ');
  }

  grep(pattern, file) {
    const node = this.getNode(file);
    if (!node || node.type === 'directory') {
      return `grep: ${file}: No such file or directory`;
    }
    
    const lines = node.content.split('\n');
    const matches = lines.filter(line => line.includes(pattern));
    return matches.join('\n');
  }

  find(path = '.', args = []) {
    const startPath = this.resolvePath(path);
    const results = [];
    
    const search = (currentPath, node) => {
      if (args.includes('-type') && args.includes('f') && node.type === 'file') {
        results.push(currentPath);
      } else if (args.includes('-type') && args.includes('d') && node.type === 'directory') {
        results.push(currentPath);
      } else if (!args.includes('-type')) {
        results.push(currentPath);
      }
      
      if (node.type === 'directory' && node.children) {
        Object.keys(node.children).forEach(child => {
          search(currentPath + '/' + child, node.children[child]);
        });
      }
    };
    
    const startNode = this.getNode(startPath);
    if (startNode) {
      search(startPath, startNode);
    }
    
    return results.join('\n');
  }

  which(command) {
    const binNode = this.getNode('/bin');
    if (binNode && binNode.children && binNode.children[command]) {
      return `/bin/${command}`;
    }
    return `${command}: not found`;
  }

  history() {
    return `1  ls
2  cd scripts
3  cat hello.py
4  python3 hello.py
5  ls -la
6  pwd
7  whoami
8  history`;
  }
}
