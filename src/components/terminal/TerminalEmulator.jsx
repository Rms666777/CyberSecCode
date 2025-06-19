import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, Trash2, Copy, Download, Save, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import PythonInterpreter from './PythonInterpreter';
import JavaScriptInterpreter from './JavaScriptInterpreter';

const TerminalEmulator = () => {
  const [output, setOutput] = useState([
    { type: 'system', content: 'CodeMaster Terminal v2.0.0 - Agora com suporte completo!' },
    { type: 'system', content: 'Digite "help" para ver os comandos disponíveis' },
    { type: 'system', content: 'Suporte avançado para Python e JavaScript' }
  ]);
  const [input, setInput] = useState('');
  const [language, setLanguage] = useState('python');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [savedScripts, setSavedScripts] = useState([]);
  const [currentScript, setCurrentScript] = useState('');
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const pythonInterpreter = new PythonInterpreter();
  const jsInterpreter = new JavaScriptInterpreter();

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
save <nome> - Salva o script atual
load <nome> - Carrega um script salvo
list - Lista scripts salvos
exit - Sai do terminal

Recursos Python:
• Variáveis e operações matemáticas
• Estruturas de controle (if, for, while)
• Funções e classes
• Listas, dicionários e tuplas
• Módulos básicos (math, random, datetime)

Recursos JavaScript:
• Variáveis (let, const, var)
• Funções e arrow functions
• Objetos e arrays
• Promises e async/await
• DOM manipulation (simulado)
• Módulos ES6

Exemplos:
Python: print("Hello"); x = [1,2,3]; for i in x: print(i)
JavaScript: console.log("Hello"); let arr = [1,2,3]; arr.forEach(i => console.log(i));`
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
        content: 'Modo Python ativado - Interpretador completo carregado!' 
      }]);
      return;
    }

    if (trimmedCommand === 'javascript' || trimmedCommand === 'js') {
      setLanguage('javascript');
      setOutput(prev => [...prev, { 
        type: 'system', 
        content: 'Modo JavaScript ativado - Engine V8 simulado carregado!' 
      }]);
      return;
    }

    if (trimmedCommand.startsWith('save ')) {
      const scriptName = trimmedCommand.substring(5);
      if (scriptName && currentScript) {
        setSavedScripts(prev => [...prev.filter(s => s.name !== scriptName), { name: scriptName, code: currentScript, language }]);
        setOutput(prev => [...prev, { 
          type: 'system', 
          content: `Script "${scriptName}" salvo com sucesso!` 
        }]);
      } else {
        setOutput(prev => [...prev, { 
          type: 'error', 
          content: 'Uso: save <nome> (execute algum código primeiro)' 
        }]);
      }
      return;
    }

    if (trimmedCommand.startsWith('load ')) {
      const scriptName = trimmedCommand.substring(5);
      const script = savedScripts.find(s => s.name === scriptName);
      if (script) {
        setCurrentScript(script.code);
        setLanguage(script.language);
        setOutput(prev => [...prev, { 
          type: 'system', 
          content: `Script "${scriptName}" carregado! Linguagem: ${script.language}` 
        }]);
        executeCode(script.code);
      } else {
        setOutput(prev => [...prev, { 
          type: 'error', 
          content: `Script "${scriptName}" não encontrado` 
        }]);
      }
      return;
    }

    if (trimmedCommand === 'list') {
      if (savedScripts.length === 0) {
        setOutput(prev => [...prev, { 
          type: 'system', 
          content: 'Nenhum script salvo' 
        }]);
      } else {
        const scriptList = savedScripts.map(s => `${s.name} (${s.language})`).join('\n');
        setOutput(prev => [...prev, { 
          type: 'system', 
          content: `Scripts salvos:\n${scriptList}` 
        }]);
      }
      return;
    }

    if (trimmedCommand === 'exit') {
      setOutput(prev => [...prev, { 
        type: 'system', 
        content: 'Até logo! Obrigado por usar o CodeMaster Terminal! 👋' 
      }]);
      return;
    }

    // Execute code
    setCurrentScript(prev => prev + '\n' + trimmedCommand);
    executeCode(trimmedCommand);
  };

  const executeCode = (code) => {
    try {
      if (language === 'python') {
        const result = pythonInterpreter.execute(code);
        if (result.output.length > 0) {
          result.output.forEach(line => {
            setOutput(prev => [...prev, { 
              type: 'output', 
              content: line 
            }]);
          });
        }
        if (result.error) {
          setOutput(prev => [...prev, { 
            type: 'error', 
            content: result.error 
          }]);
        }
      } else {
        const result = jsInterpreter.execute(code);
        if (result.output.length > 0) {
          result.output.forEach(line => {
            setOutput(prev => [...prev, { 
              type: 'output', 
              content: line 
            }]);
          });
        }
        if (result.error) {
          setOutput(prev => [...prev, { 
            type: 'error', 
            content: result.error 
          }]);
        }
      }
    } catch (error) {
      setOutput(prev => [...prev, { 
        type: 'error', 
        content: `Erro: ${error.message}` 
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
      // Auto-complete functionality could be added here
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
    a.download = `terminal-output-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const saveCurrentSession = () => {
    const sessionData = {
      output,
      language,
      currentScript,
      timestamp: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(sessionData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `codemaster-session-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Sessão Salva!",
      description: "Sua sessão foi salva com sucesso",
    });
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
          Terminal Interativo Avançado
        </h1>
        <p className="text-xl text-muted-foreground">
          Execute códigos Python e JavaScript com interpretador completo
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
                CodeMaster Terminal - Modo: {language === 'python' ? 'Python 3.9+' : 'JavaScript ES2022'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setLanguage(language === 'python' ? 'javascript' : 'python')}
              className="text-xs"
              title="Alternar linguagem"
            >
              {language === 'python' ? 'JS' : 'PY'}
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={copyOutput}
              className="text-xs"
              title="Copiar saída"
            >
              <Copy className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={downloadOutput}
              className="text-xs"
              title="Download saída"
            >
              <Download className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={saveCurrentSession}
              className="text-xs"
              title="Salvar sessão"
            >
              <Save className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={clearTerminal}
              className="text-xs"
              title="Limpar terminal"
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
              placeholder="Digite seu código aqui... (Tab para autocompletar)"
              autoFocus
            />
          </div>
        </div>
      </div>

      {/* Enhanced Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="code-block">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 flex items-center justify-between">
            <h3 className="text-white font-semibold">Exemplos Python Avançados</h3>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setLanguage('python');
                executeCommand('def fibonacci(n): return n if n <= 1 else fibonacci(n-1) + fibonacci(n-2)');
                setTimeout(() => executeCommand('print([fibonacci(i) for i in range(10)])'), 100);
              }}
              className="text-white hover:bg-white/10 text-xs"
            >
              <Play className="w-3 h-3 mr-1" />
              Executar
            </Button>
          </div>
          <div className="code-content space-y-2">
            <div className="text-gray-400"># Fibonacci recursivo</div>
            <div>def fibonacci(n):</div>
            <div>    return n if n &lt;= 1 else fibonacci(n-1) + fibonacci(n-2)</div>
            <div>print([fibonacci(i) for i in range(10)])</div>
            <div className="text-gray-400"># Classes e herança</div>
            <div>class Animal:</div>
            <div>    def __init__(self, nome): self.nome = nome</div>
            <div>    def falar(self): pass</div>
          </div>
        </div>

        <div className="code-block">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 px-4 py-2 flex items-center justify-between">
            <h3 className="text-white font-semibold">Exemplos JavaScript Avançados</h3>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setLanguage('javascript');
                executeCommand('const fetchData = async () => { return new Promise(resolve => setTimeout(() => resolve("Dados carregados!"), 1000)); };');
                setTimeout(() => executeCommand('fetchData().then(console.log);'), 100);
              }}
              className="text-white hover:bg-white/10 text-xs"
            >
              <Play className="w-3 h-3 mr-1" />
              Executar
            </Button>
          </div>
          <div className="code-content space-y-2">
            <div className="text-gray-400">// Async/await</div>
            <div>const fetchData = async () =&gt; &#123;</div>
            <div>  return new Promise(resolve =&gt;</div>
            <div>    setTimeout(() =&gt; resolve("Dados!"), 1000));</div>
            <div>&#125;;</div>
            <div className="text-gray-400">// Destructuring</div>
            <div>const &#123;nome, idade&#125; = &#123;nome: "João", idade: 25&#125;;</div>
          </div>
        </div>
      </div>

      {/* Saved Scripts */}
      {savedScripts.length > 0 && (
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Folder className="w-5 h-5 mr-2" />
            Scripts Salvos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {savedScripts.map((script, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => executeCommand(`load ${script.name}`)}
                className="justify-start"
              >
                <Play className="w-3 h-3 mr-2" />
                {script.name} ({script.language})
              </Button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TerminalEmulator;