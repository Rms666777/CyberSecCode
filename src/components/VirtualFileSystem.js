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
              'bash': { type: 'executable', content: 'GNU bash, version 5.1.16' },
              'python3': { type: 'executable', content: 'Python 3.11.6' },
              'node': { type: 'executable', content: 'Node.js v18.18.0' },
              'ls': { type: 'executable', content: 'list directory contents' },
              'cat': { type: 'executable', content: 'concatenate files' },
              'grep': { type: 'executable', content: 'search text patterns' },
              'sed': { type: 'executable', content: 'stream editor' },
              'awk': { type: 'executable', content: 'pattern scanning and processing' },
              'nmap': { type: 'executable', content: 'Network Mapper' },
              'netcat': { type: 'executable', content: 'networking utility' },
              'curl': { type: 'executable', content: 'transfer data from servers' },
              'wget': { type: 'executable', content: 'retrieve files from web' },
              'ssh': { type: 'executable', content: 'secure shell client' },
              'scp': { type: 'executable', content: 'secure copy' },
              'rsync': { type: 'executable', content: 'remote sync' },
              'tcpdump': { type: 'executable', content: 'packet analyzer' },
              'wireshark': { type: 'executable', content: 'network protocol analyzer' },
              'hashcat': { type: 'executable', content: 'password recovery tool' },
              'john': { type: 'executable', content: 'John the Ripper password cracker' },
              'metasploit': { type: 'executable', content: 'penetration testing framework' },
              'burpsuite': { type: 'executable', content: 'web security testing' },
              'sqlmap': { type: 'executable', content: 'SQL injection tool' },
              'nikto': { type: 'executable', content: 'web server scanner' },
              'dirb': { type: 'executable', content: 'web content scanner' },
              'gobuster': { type: 'executable', content: 'directory/file brute-forcer' }
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
                  '.bashrc': { type: 'file', content: 'export PS1="\u@alpine:\w$ "\nalias ll="ls -la"\nalias la="ls -A"' }
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
