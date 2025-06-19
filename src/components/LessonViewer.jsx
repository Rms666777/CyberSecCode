
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Code, 
  CheckCircle, 
  Circle,
  ChevronLeft,
  ChevronRight,
  Copy,
  Terminal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const LessonViewer = ({ module, selectedLesson, setSelectedLesson }) => {
  const [completedLessons, setCompletedLessons] = useState(new Set());

  // Generate lesson content based on module
  const generateLessons = (module) => {
    const lessons = [];
    
    if (module.id === 'python-basics') {
      lessons.push(
        {
          id: 1,
          title: 'Introdução ao Python',
          content: `# Bem-vindo ao Python!

Python é uma linguagem de programação poderosa e fácil de aprender. Vamos começar com o básico.

## O que é Python?
Python é uma linguagem interpretada, orientada a objetos e de alto nível com semântica dinâmica.

## Primeiro Programa
Vamos criar nosso primeiro programa Python:`,
          code: `# Meu primeiro programa Python
print("Olá, mundo!")
print("Bem-vindo ao CodeMaster!")

# Você pode usar aspas simples ou duplas
print('Python é incrível!')`,
          explanation: 'A função print() é usada para exibir texto na tela. É uma das funções mais básicas e úteis do Python.'
        },
        {
          id: 2,
          title: 'Variáveis e Tipos de Dados',
          content: `# Variáveis em Python

Em Python, você não precisa declarar o tipo da variável. O Python determina automaticamente.

## Tipos Básicos:
- **int**: números inteiros
- **float**: números decimais  
- **str**: texto (strings)
- **bool**: verdadeiro ou falso`,
          code: `# Variáveis numéricas
idade = 25
altura = 1.75
pi = 3.14159

# Strings (texto)
nome = "João"
sobrenome = 'Silva'

# Boolean (verdadeiro/falso)
ativo = True
inativo = False

# Exibindo as variáveis
print(f"Nome: {nome} {sobrenome}")
print(f"Idade: {idade} anos")
print(f"Altura: {altura}m")`,
          explanation: 'Python usa tipagem dinâmica, o que significa que você não precisa especificar o tipo da variável ao criá-la.'
        }
      );
    } else if (module.id === 'js-basics') {
      lessons.push(
        {
          id: 1,
          title: 'Introdução ao JavaScript',
          content: `# Bem-vindo ao JavaScript!

JavaScript é a linguagem da web! É usada tanto no frontend quanto no backend.

## O que é JavaScript?
JavaScript é uma linguagem de programação interpretada, dinâmica e orientada a objetos.

## Primeiro Programa
Vamos criar nosso primeiro programa JavaScript:`,
          code: `// Meu primeiro programa JavaScript
console.log("Olá, mundo!");
console.log("Bem-vindo ao CodeMaster!");

// Você pode usar aspas simples, duplas ou template literals
console.log('JavaScript é incrível!');
console.log(\`Template literals são úteis!\`);`,
          explanation: 'console.log() é usado para exibir informações no console do navegador ou terminal.'
        },
        {
          id: 2,
          title: 'Variáveis e Tipos de Dados',
          content: `# Variáveis em JavaScript

JavaScript tem três formas de declarar variáveis: var, let e const.

## Tipos Básicos:
- **number**: números (inteiros e decimais)
- **string**: texto
- **boolean**: verdadeiro ou falso
- **undefined**: valor não definido
- **null**: valor nulo`,
          code: `// Declaração de variáveis
let idade = 25;
const nome = "João";
var altura = 1.75;

// JavaScript é dinamicamente tipado
let valor = 42;        // number
valor = "texto";       // agora é string
valor = true;          // agora é boolean

// Exibindo as variáveis
console.log(\`Nome: \${nome}\`);
console.log(\`Idade: \${idade} anos\`);
console.log(\`Altura: \${altura}m\`);`,
          explanation: 'Use "let" para variáveis que podem mudar, "const" para constantes e evite "var" em código moderno.'
        }
      );
    } else if (module.id === 'cyber-basics') {
      lessons.push(
        {
          id: 1,
          title: 'Fundamentos de Cybersegurança',
          content: `# Introdução à Cybersegurança

A cybersegurança é a prática de proteger sistemas, redes e dados de ataques digitais.

## Conceitos Fundamentais:
- **Confidencialidade**: Manter informações privadas
- **Integridade**: Garantir que dados não sejam alterados
- **Disponibilidade**: Manter sistemas acessíveis

## Tipos Comuns de Ataques:
- Phishing
- Malware
- SQL Injection
- Cross-Site Scripting (XSS)`,
          code: `# Exemplo: Verificação básica de senha
import hashlib

def verificar_senha_segura(senha):
    """Verifica se uma senha atende critérios básicos de segurança"""
    
    if len(senha) < 8:
        return False, "Senha deve ter pelo menos 8 caracteres"
    
    tem_maiuscula = any(c.isupper() for c in senha)
    tem_minuscula = any(c.islower() for c in senha)
    tem_numero = any(c.isdigit() for c in senha)
    tem_especial = any(c in "!@#$%^&*" for c in senha)
    
    if not all([tem_maiuscula, tem_minuscula, tem_numero, tem_especial]):
        return False, "Senha deve conter maiúscula, minúscula, número e caractere especial"
    
    return True, "Senha segura!"

# Teste
senha = "MinhaSenh@123"
segura, mensagem = verificar_senha_segura(senha)
print(f"Senha: {senha}")
print(f"Resultado: {mensagem}")`,
          explanation: 'Senhas fortes são a primeira linha de defesa. Sempre use critérios rigorosos para validação.'
        }
      );
    }

    // Add more lessons to reach the module's lesson count
    while (lessons.length < module.lessons) {
      lessons.push({
        id: lessons.length + 1,
        title: `Lição ${lessons.length + 1}`,
        content: `# Conteúdo em Desenvolvimento

Esta lição está sendo preparada com muito carinho para você!

## Em breve você terá acesso a:
- Explicações detalhadas
- Exemplos práticos
- Exercícios interativos
- Projetos reais`,
        code: `// Esta lição será implementada em breve
console.log("🚧 Conteúdo em desenvolvimento! 🚧");`,
        explanation: '🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀'
      });
    }

    return lessons;
  };

  const lessons = generateLessons(module);
  const currentLesson = selectedLesson || lessons[0];
  const currentIndex = lessons.findIndex(l => l.id === currentLesson.id);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Código copiado!",
      description: "O código foi copiado para a área de transferência",
    });
  };

  const markAsCompleted = (lessonId) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
    toast({
      title: "Lição concluída!",
      description: "Parabéns! Continue assim! 🎉",
    });
  };

  const navigateLesson = (direction) => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < lessons.length) {
      setSelectedLesson(lessons[newIndex]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-6"
    >
      {/* Lesson Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">{module.title}</h2>
              <p className="text-sm text-muted-foreground">{module.lessons} lições</p>
            </div>
            
            <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentLesson.id === lesson.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {completedLessons.has(lesson.id) ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground" />
                    )}
                    <div className="flex-1">
                      <div className="text-sm font-medium">{lesson.title}</div>
                      <div className="text-xs opacity-70">Lição {lesson.id}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="lg:col-span-3 space-y-6">
        {/* Lesson Header */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{currentLesson.title}</h1>
              <p className="text-muted-foreground">Lição {currentLesson.id} de {lessons.length}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateLesson('prev')}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateLesson('next')}
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
              {currentLesson.content}
            </div>
          </div>
        </div>

        {/* Code Example */}
        {currentLesson.code && (
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
                  onClick={() => copyCode(currentLesson.code)}
                  className="text-white hover:bg-white/10"
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => toast({
                    title: "Terminal",
                    description: "🚧 Esta funcionalidade ainda não está implementada—mas não se preocupe! Você pode solicitar isso no seu próximo prompt! 🚀",
                  })}
                  className="text-white hover:bg-white/10"
                >
                  <Terminal className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="code-content">
              <pre className="text-sm overflow-x-auto">
                <code>{currentLesson.code}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Explanation */}
        {currentLesson.explanation && (
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <BookOpen className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Explicação</h3>
                <p className="text-foreground leading-relaxed">{currentLesson.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Lesson Actions */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => navigateLesson('prev')}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Lição Anterior
          </Button>

          <Button
            onClick={() => markAsCompleted(currentLesson.id)}
            disabled={completedLessons.has(currentLesson.id)}
            className="bg-green-600 hover:bg-green-700"
          >
            {completedLessons.has(currentLesson.id) ? (
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
            onClick={() => navigateLesson('next')}
            disabled={currentIndex === lessons.length - 1}
          >
            Próxima Lição
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default LessonViewer;
