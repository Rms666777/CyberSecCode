import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Circle, 
  Code, 
  Copy, 
  Terminal, 
  BookOpen,
  Play,
  Lightbulb,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const LessonContent = ({ lesson, lessons, currentIndex, completedLessons, onMarkCompleted, onNavigate }) => {
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Código copiado!",
      description: "O código foi copiado para a área de transferência",
    });
  };

  const runInTerminal = () => {
    toast({
      title: "Terminal",
      description: "🚧 Integração com terminal em desenvolvimento! Use a aba Terminal para testar o código.",
    });
  };

  return (
    <div className="lg:col-span-3 space-y-6">
      {/* Lesson Header */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{lesson.title}</h1>
            <div className="flex items-center space-x-4 mt-2">
              <p className="text-muted-foreground">Lição {lesson.id} de {lessons.length}</p>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                lesson.difficulty === 'Básico' ? 'text-green-400 bg-green-400/10' :
                lesson.difficulty === 'Intermediário' ? 'text-yellow-400 bg-yellow-400/10' :
                lesson.difficulty === 'Avançado' ? 'text-red-400 bg-red-400/10' :
                'text-blue-400 bg-blue-400/10'
              }`}>
                {lesson.difficulty}
              </span>
              {lesson.featured && (
                <span className="px-2 py-1 rounded-full text-xs font-medium text-yellow-400 bg-yellow-400/10">
                  ⭐ Destaque
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('prev')}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('next')}
              disabled={currentIndex === lessons.length - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / lessons.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Lesson Content */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-line text-foreground leading-relaxed">
            {lesson.content}
          </div>
        </div>
      </div>

      {/* Code Example */}
      {lesson.code && (
        <div className="code-block">
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-white" />
              <span className="text-white font-medium">Exemplo de Código</span>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyCode(lesson.code)}
                className="text-white hover:bg-white/10"
              >
                <Copy className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={runInTerminal}
                className="text-white hover:bg-white/10"
              >
                <Terminal className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="code-content">
            <pre className="text-sm overflow-x-auto">
              <code>{lesson.code}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Explanation */}
      {lesson.explanation && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Explicação</h3>
              <p className="text-foreground leading-relaxed">{lesson.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tips */}
      {lesson.tips && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Lightbulb className="w-5 h-5 text-yellow-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Dicas</h3>
              <ul className="text-foreground leading-relaxed space-y-1">
                {lesson.tips.map((tip, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Exercise */}
      {lesson.exercise && (
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <Target className="w-5 h-5 text-purple-400 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Exercício Prático</h3>
              <p className="text-foreground leading-relaxed mb-4">{lesson.exercise.description}</p>
              
              {lesson.exercise.starter && (
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="bg-muted px-3 py-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Código Inicial</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyCode(lesson.exercise.starter)}
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="p-3">
                    <pre className="text-sm overflow-x-auto">
                      <code>{lesson.exercise.starter}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lesson Actions */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => onNavigate('prev')}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Lição Anterior
        </Button>

        <Button
          onClick={() => onMarkCompleted(lesson.id)}
          disabled={completedLessons.has(lesson.id)}
          className="bg-green-600 hover:bg-green-700"
        >
          {completedLessons.has(lesson.id) ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Concluída
            </>
          ) : (
            <>
              <Circle className="w-4 h-4 mr-2" />
              Marcar como Concluída
            </>
          )}
        </Button>

        <Button
          onClick={() => onNavigate('next')}
          disabled={currentIndex === lessons.length - 1}
        >
          Próxima Lição
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default LessonContent;