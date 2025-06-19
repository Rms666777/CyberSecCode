
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, Trash2, Copy, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const TerminalEmulator = () => {
  const [output, setOutput] = useState([
    { type: 'system', content: 'CodeMaster Terminal v1.0.0' },
    { type: 'system', content: 'Digite "help" para ver os comandos disponíveis' },
    { type: 'system', content: 'Suporte para Python e JavaScript' }
  ]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('python');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const executeCommand = (command) => {
    const trimmedCommand = command.trim();
    
    if (!trimmedCommand) return;

    // Add to history
    setHistory(prev => [...prev, trimmedCommand]);
    setHistoryIndex(-1);

    // Add command to output
    setOutput(prev => [...prev, { 
      type: 'command', 
      content: `${language}> ${trimmedCommand}`,
      language 
    }]);

    // Handle special commands
    if (trimmedCommand === 'help') {
      setOutput(prev => [...prev, { 
        type: 'help', 
        content: `Comandos disponíveis:
help - Mostra esta ajuda
clear - Limpa o terminal
python - Muda para modo Python
javascript ou js - Muda para modo JavaScript
exit - Sai do terminal

Exemplos Python:
print("Olá, mundo!")
x = 10; print(x * 2)
for i in range(5): print(i)

Exemplos JavaScript:
console.log("Olá, mundo!");
let x = 10; console.log(x * 2);
for(let i = 0; i < 5; i++) console.log(i);`
      }]);
      return;
    }

    if (trimmedCommand === 'clear') {
      setOutput([
        { type: 'system', content: 'Terminal limpo' }
      ]);
      return;
    }

    if (trimmedCommand === 'python') {
      setLanguage('python');
      setOutput(prev => [...prev, { 
        type: 'system', 
        content: 'Modo Python ativado' 
      }]);
      return;
    }

    if (trimmedCommand === 'javascript' || trimmedCommand === 'js') {
      setLanguage('javascript');
      setOutput(prev => [...prev, { 
        type: 'system', 
        content: 'Modo JavaScript ativado' 
      }]);
      return;
    }

    if (trimmedCommand === 'exit') {
      setOutput(prev => [...prev, { 
        type: 'system', 
        content: 'Até logo! 👋' 
      }]);
      return;
    }

    // Execute code
    executeCode(trimmedCommand);
  };

  const executeCode = (code) => {
    try {
      if (language === 'python') {
        executePythonCode(code);
      } else {
        executeJavaScriptCode(code);
      }
    } catch (error) {
      setOutput(prev => [...prev, { 
        type: 'error', 
        content: `Erro: ${error.message}` 
      }]);
    }
  };

  const executePythonCode = (code) => {
    // Simulação básica de Python
    try {
      // Handle print statements
      if (code.includes('print(')) {
        const printRegex = /print\((.*?)\)/g;
        let match;
        const results = [];
        
        while ((match = printRegex.exec(code)) !== null) {
          let content = match[1];
          // Remove quotes for string literals
          if ((content.startsWith('"') && content.endsWith('"')) || 
              (content.startsWith("'") && content.endsWith("'"))) {
            content = content.slice(1, -1);
          } else {
            // Try to evaluate as expression
            try {
              content = eval(content.replace(/\*\*/g, '**'));
            } catch {
              // Keep original if evaluation fails
            }
          }
          results.push(content);
        }
        
        if (results.length > 0) {
          results.forEach(result => {
            setOutput(prev => [...prev, { 
              type: 'output', 
              content: String(result) 
            }]);
          });
          return;
        }
      }

      // Handle simple expressions
      if (code.includes('=') && !code.includes('==')) {
        setOutput(prev => [...prev, { 
          type: 'output', 
          content: 'Variável definida' 
        }]);
        return;
      }

      // Handle for loops (basic simulation)
      if (code.includes('for') && code.includes('range')) {
        const rangeMatch = code.match(/range\((\d+)\)/);
        if (rangeMatch) {
          const count = parseInt(rangeMatch[1]);
          for (let i = 0; i < count; i++) {
            setOutput(prev => [...prev, { 
              type: 'output', 
              content: String(i) 
            }]);
          }
          return;
        }
      }

      // Default response for unhandled Python code
      setOutput(prev => [...prev, { 
        type: 'output', 
        content: '🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀' 
      }]);

    } catch (error) {
      setOutput(prev => [...prev, { 
        type: 'error', 
        content: `Erro Python: ${error.message}` 
      }]);
    }
  };

  const executeJavaScriptCode = (code) => {
    try {
      // Capture console.log output
      const originalLog = console.log;
      const logs = [];
      
      console.log = (...args) => {
        logs.push(args.map(arg => String(arg)).join(' '));
      };

      // Execute the code
      const result = eval(code);
      
      // Restore console.log
      console.log = originalLog;

      // Display console.log outputs
      logs.forEach(log => {
        setOutput(prev => [...prev, { 
          type: 'output', 
          content: log 
        }]);
      });

      // Display result if it's not undefined and no console.log was called
      if (result !== undefined && logs.length === 0) {
        setOutput(prev => [...prev, { 
          type: 'output', 
          content: String(result) 
        }]);
      }

    } catch (error) {
      setOutput(prev => [...prev, { 
        type: 'error', 
        content: `Erro JavaScript: ${error.message}` 
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
    }
  };

  const clearTerminal = () => {
    setOutput([
      { type: 'system', content: 'Terminal limpo' }
    ]);
  };

  const copyOutput = () => {
    const text = output.map(line => line.content).join('\n');
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Saída do terminal copiada para a área de transferência",
    });
  };

  const downloadOutput = () => {
    const text = output.map(line => line.content).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'terminal-output.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Terminal Interativo
        </h1>
        <p className="text-xl text-muted-foreground">
          Execute códigos Python e JavaScript em tempo real
        </p>
      </div>

      <div className="terminal-container rounded-xl overflow-hidden">
        {/* Terminal Header */}
        <div className="terminal-header px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                CodeMaster Terminal - Modo: {language === 'python' ? 'Python' : 'JavaScript'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setLanguage(language === 'python' ? 'javascript' : 'python')}
              className="text-xs"
            >
              {language === 'python' ? 'JS' : 'PY'}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={copyOutput}
              className="text-xs"
            >
              <Copy className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={downloadOutput}
              className="text-xs"
            >
              <Download className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={clearTerminal}
              className="text-xs"
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* Terminal Output */}
        <div 
          ref={outputRef}
          className="terminal-output p-4 scrollbar-thin"
        >
          {output.map((line, index) => (
            <div key={index} className={`mb-1 ${
              line.type === 'command' ? 'text-green-400' :
              line.type === 'output' ? 'text-blue-300' :
              line.type === 'error' ? 'text-red-400' :
              line.type === 'help' ? 'text-yellow-300 whitespace-pre-line' :
              'text-gray-400'
            }`}>
              {line.content}
            </div>
          ))}
          
          {/* Input Line */}
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-green-400">{language}{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              placeholder="Digite seu código aqui..."
              autoFocus
            />
          </div>
        </div>
      </div>

      {/* Quick Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="code-block">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2">
            <h3 className="text-white font-semibold">Exemplos Python</h3>
          </div>
          <div className="code-content space-y-2">
            <div className="text-gray-400"># Básico</div>
            <div>print("Olá, mundo!")</div>
            <div>x = 10; print(x * 2)</div>
            <div className="text-gray-400"># Loop</div>
            <div>for i in range(5): print(i)</div>
          </div>
        </div>

        <div className="code-block">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 px-4 py-2">
            <h3 className="text-white font-semibold">Exemplos JavaScript</h3>
          </div>
          <div className="code-content space-y-2">
            <div className="text-gray-400">// Básico</div>
            <div>console.log("Olá, mundo!");</div>
            <div>let x = 10; console.log(x * 2);</div>
            <div className="text-gray-400">// Loop</div>
            <div>for(let i = 0; i &lt; 5; i++) console.log(i);</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalEmulator;
