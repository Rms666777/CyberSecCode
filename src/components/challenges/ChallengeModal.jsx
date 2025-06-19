import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Play, 
  CheckCircle, 
  Copy, 
  RotateCcw,
  Lightbulb,
  Target,
  Code,
  Eye,
  EyeOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const ChallengeModal = ({ challenge, isOpen, onClose, onComplete, isCompleted }) => {
  const [userCode, setUserCode] = useState(challenge.starter || '');
  const [showSolution, setShowSolution] = useState(false);
  const [testResults, setTestResults] = useState(null);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Código copiado!",
      description: "O código foi copiado para a área de transferência",
    });
  };

  const resetCode = () => {
    setUserCode(challenge.starter || '');
    setShowSolution(false);
    setTestResults(null);
  };

  const runTests = () => {
    // Simulate test execution
    const passed = Math.random() > 0.3; // 70% chance of passing
    setTestResults({
      passed,
      message: passed 
        ? "🎉 Todos os testes passaram! Excelente trabalho!" 
        : "❌ Alguns testes falharam. Revise seu código e tente novamente."
    });
    
    if (passed && !isCompleted) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">{challenge.title}</h2>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{challenge.difficulty}</span>
                  <span>•</span>
                  <span>{challenge.language}</span>
                  <span>•</span>
                  <span>{challenge.xp} XP</span>
                </div>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(90vh-120px)]">
            {/* Left Panel - Instructions */}
            <div className="p-6 border-r border-border overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Descrição do Desafio</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Requisitos</h3>
                  <ul className="space-y-2">
                    {challenge.requirements.map((req, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {testResults && (
                  <div className={`p-4 rounded-lg border ${
                    testResults.passed 
                      ? 'bg-green-500/10 border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border-red-500/20 text-red-400'
                  }`}>
                    <p>{testResults.message}</p>
                  </div>
                )}

                {showSolution && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Lightbulb className="w-4 h-4 text-yellow-400" />
                      <h4 className="font-semibold text-yellow-400">Solução</h4>
                    </div>
                    <div className="bg-card border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted px-3 py-2 flex items-center justify-between">
                        <span className="text-sm font-medium">Código da Solução</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyCode(challenge.solution)}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="p-3 max-h-60 overflow-y-auto">
                        <pre className="text-sm">
                          <code>{challenge.solution}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel - Code Editor */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Editor de Código</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={toggleSolution}
                  >
                    {showSolution ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    {showSolution ? 'Ocultar' : 'Ver'} Solução
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={resetCode}
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyCode(userCode)}
                  >
                    <Copy className="w-3 h-3" />
                    Copiar
                  </Button>
                </div>
              </div>

              <div className="flex-1 p-4">
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  className="w-full h-full bg-muted border border-border rounded-lg p-3 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite seu código aqui..."
                />
              </div>

              <div className="p-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Tempo estimado: {challenge.timeEstimate}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      onClick={runTests}
                      disabled={!userCode.trim()}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Testar Código
                    </Button>
                    {isCompleted ? (
                      <Button disabled>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Concluído
                      </Button>
                    ) : (
                      <Button
                        onClick={onComplete}
                        disabled={!testResults?.passed}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Finalizar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ChallengeModal;