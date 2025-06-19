import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Code, 
  Shield, 
  Zap, 
  Trophy, 
  Clock, 
  Star,
  CheckCircle,
  Lock,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ChallengeModal from '@/components/challenges/ChallengeModal';

const ChallengesPage = ({ userProgress, onCompleteChallenge }) => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const challenges = [
    {
      id: 'python-basics-1',
      title: 'Calculadora Simples',
      description: 'Crie uma calculadora que realiza operações básicas',
      difficulty: 'Iniciante',
      language: 'Python',
      xp: 100,
      timeEstimate: '15 min',
      category: 'Fundamentos',
      icon: <Code className="w-6 h-6" />,
      requirements: ['Variáveis', 'Operadores', 'Input/Output'],
      starter: `# Crie uma calculadora simples
# Deve aceitar dois números e uma operação (+, -, *, /)
# E retornar o resultado

def calculadora():
    # Seu código aqui
    pass

# Teste sua função
calculadora()`,
      solution: `def calculadora():
    num1 = float(input("Digite o primeiro número: "))
    operacao = input("Digite a operação (+, -, *, /): ")
    num2 = float(input("Digite o segundo número: "))
    
    if operacao == '+':
        resultado = num1 + num2
    elif operacao == '-':
        resultado = num1 - num2
    elif operacao == '*':
        resultado = num1 * num2
    elif operacao == '/':
        if num2 != 0:
            resultado = num1 / num2
        else:
            return "Erro: Divisão por zero!"
    else:
        return "Operação inválida!"
    
    return f"{num1} {operacao} {num2} = {resultado}"

print(calculadora())`
    },
    {
      id: 'js-dom-1',
      title: 'Lista de Tarefas Interativa',
      description: 'Construa uma lista de tarefas com JavaScript puro',
      difficulty: 'Intermediário',
      language: 'JavaScript',
      xp: 200,
      timeEstimate: '30 min',
      category: 'DOM',
      icon: <Zap className="w-6 h-6" />,
      requirements: ['DOM Manipulation', 'Event Listeners', 'Arrays'],
      starter: `// Crie uma lista de tarefas interativa
// Deve permitir adicionar, remover e marcar como concluída

class TodoList {
    constructor() {
        this.tasks = [];
        // Seu código aqui
    }
    
    addTask(task) {
        // Implementar
    }
    
    removeTask(index) {
        // Implementar
    }
    
    toggleTask(index) {
        // Implementar
    }
}

const todoList = new TodoList();`,
      solution: `class TodoList {
    constructor() {
        this.tasks = [];
        this.container = document.createElement('div');
        this.input = document.createElement('input');
        this.button = document.createElement('button');
        this.list = document.createElement('ul');
        
        this.setupUI();
    }
    
    setupUI() {
        this.input.placeholder = 'Digite uma tarefa...';
        this.button.textContent = 'Adicionar';
        this.button.onclick = () => this.addTask(this.input.value);
        
        this.container.appendChild(this.input);
        this.container.appendChild(this.button);
        this.container.appendChild(this.list);
        document.body.appendChild(this.container);
    }
    
    addTask(task) {
        if (task.trim()) {
            this.tasks.push({ text: task, completed: false });
            this.input.value = '';
            this.render();
        }
    }
    
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.render();
    }
    
    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.render();
    }
    
    render() {
        this.list.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = \`
                <span style="text-decoration: \${task.completed ? 'line-through' : 'none'}">
                    \${task.text}
                </span>
                <button onclick="todoList.toggleTask(\${index})">
                    \${task.completed ? 'Desfazer' : 'Concluir'}
                </button>
                <button onclick="todoList.removeTask(\${index})">Remover</button>
            \`;
            this.list.appendChild(li);
        });
    }
}`
    },
    {
      id: 'cyber-password-1',
      title: 'Gerador de Senhas Seguras',
      description: 'Desenvolva um gerador de senhas com critérios de segurança',
      difficulty: 'Intermediário',
      language: 'Python',
      xp: 250,
      timeEstimate: '25 min',
      category: 'Cybersegurança',
      icon: <Shield className="w-6 h-6" />,
      requirements: ['Random', 'String manipulation', 'Security concepts'],
      starter: `import random
import string

def gerar_senha_segura(tamanho=12, incluir_simbolos=True):
    """
    Gera uma senha segura com os critérios especificados
    - Pelo menos 1 maiúscula
    - Pelo menos 1 minúscula  
    - Pelo menos 1 número
    - Pelo menos 1 símbolo (se incluir_simbolos=True)
    """
    # Seu código aqui
    pass

def verificar_forca_senha(senha):
    """
    Verifica a força da senha e retorna uma pontuação de 0-100
    """
    # Seu código aqui
    pass

# Teste suas funções
senha = gerar_senha_segura(16, True)
print(f"Senha gerada: {senha}")
print(f"Força da senha: {verificar_forca_senha(senha)}/100")`,
      solution: `import random
import string
import re

def gerar_senha_segura(tamanho=12, incluir_simbolos=True):
    if tamanho < 4:
        raise ValueError("Tamanho mínimo é 4 caracteres")
    
    # Definir conjuntos de caracteres
    minusculas = string.ascii_lowercase
    maiusculas = string.ascii_uppercase
    numeros = string.digits
    simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?" if incluir_simbolos else ""
    
    # Garantir pelo menos um de cada tipo
    senha = [
        random.choice(minusculas),
        random.choice(maiusculas),
        random.choice(numeros)
    ]
    
    if incluir_simbolos:
        senha.append(random.choice(simbolos))
    
    # Preencher o resto aleatoriamente
    todos_chars = minusculas + maiusculas + numeros + simbolos
    for _ in range(tamanho - len(senha)):
        senha.append(random.choice(todos_chars))
    
    # Embaralhar a senha
    random.shuffle(senha)
    return ''.join(senha)

def verificar_forca_senha(senha):
    pontuacao = 0
    
    # Critérios de pontuação
    if len(senha) >= 8:
        pontuacao += 20
    if len(senha) >= 12:
        pontuacao += 10
    if re.search(r'[a-z]', senha):
        pontuacao += 15
    if re.search(r'[A-Z]', senha):
        pontuacao += 15
    if re.search(r'[0-9]', senha):
        pontuacao += 15
    if re.search(r'[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]', senha):
        pontuacao += 25
    
    return min(pontuacao, 100)`
    },
    {
      id: 'js-async-1',
      title: 'API Weather App',
      description: 'Crie um app de clima usando APIs e async/await',
      difficulty: 'Avançado',
      language: 'JavaScript',
      xp: 300,
      timeEstimate: '45 min',
      category: 'APIs',
      icon: <Zap className="w-6 h-6" />,
      requirements: ['Fetch API', 'Async/Await', 'Error Handling'],
      starter: `// Crie um app de clima que busca dados de uma API
// Use a API OpenWeatherMap (ou simule os dados)

class WeatherApp {
    constructor() {
        this.apiKey = 'sua-chave-aqui'; // Use uma chave real ou simule
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    }
    
    async buscarClima(cidade) {
        // Implementar busca do clima
    }
    
    exibirClima(dados) {
        // Implementar exibição dos dados
    }
    
    tratarErro(erro) {
        // Implementar tratamento de erros
    }
}

const app = new WeatherApp();`,
      solution: `class WeatherApp {
    constructor() {
        this.apiKey = 'demo-key'; // Em produção, use uma chave real
        this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
        this.setupUI();
    }
    
    setupUI() {
        const container = document.createElement('div');
        container.innerHTML = \`
            <h2>App do Clima</h2>
            <input type="text" id="cityInput" placeholder="Digite o nome da cidade">
            <button onclick="app.buscarClimaPorInput()">Buscar</button>
            <div id="weatherResult"></div>
        \`;
        document.body.appendChild(container);
    }
    
    async buscarClimaPorInput() {
        const cidade = document.getElementById('cityInput').value;
        if (cidade.trim()) {
            await this.buscarClima(cidade);
        }
    }
    
    async buscarClima(cidade) {
        try {
            // Simulando dados da API para demonstração
            const dadosSimulados = {
                name: cidade,
                main: {
                    temp: Math.round(Math.random() * 30 + 10),
                    humidity: Math.round(Math.random() * 50 + 30),
                    feels_like: Math.round(Math.random() * 30 + 10)
                },
                weather: [{
                    main: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)],
                    description: 'Clima simulado'
                }],
                wind: {
                    speed: Math.round(Math.random() * 20 + 5)
                }
            };
            
            // Em produção, use:
            // const response = await fetch(\`\${this.baseUrl}?q=\${cidade}&appid=\${this.apiKey}&units=metric&lang=pt\`);
            // const dados = await response.json();
            
            this.exibirClima(dadosSimulados);
        } catch (erro) {
            this.tratarErro(erro);
        }
    }
    
    exibirClima(dados) {
        const resultado = document.getElementById('weatherResult');
        resultado.innerHTML = \`
            <div style="border: 1px solid #ccc; padding: 20px; margin: 10px 0; border-radius: 8px;">
                <h3>\${dados.name}</h3>
                <p><strong>Temperatura:</strong> \${dados.main.temp}°C</p>
                <p><strong>Sensação térmica:</strong> \${dados.main.feels_like}°C</p>
                <p><strong>Umidade:</strong> \${dados.main.humidity}%</p>
                <p><strong>Condição:</strong> \${dados.weather[0].main}</p>
                <p><strong>Vento:</strong> \${dados.wind.speed} km/h</p>
            </div>
        \`;
    }
    
    tratarErro(erro) {
        const resultado = document.getElementById('weatherResult');
        resultado.innerHTML = \`
            <div style="color: red; padding: 10px;">
                <p>Erro ao buscar dados do clima: \${erro.message}</p>
                <p>Verifique o nome da cidade e tente novamente.</p>
            </div>
        \`;
    }
}`
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Iniciante': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Intermediário': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Avançado': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    }
  };

  const getLanguageColor = (language) => {
    switch (language) {
      case 'Python': return 'bg-blue-500';
      case 'JavaScript': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const isCompleted = (challengeId) => {
    return userProgress.completedChallenges.includes(challengeId);
  };

  const canAccess = (challenge, index) => {
    if (index === 0) return true;
    return isCompleted(challenges[index - 1].id);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Desafios de Programação
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Teste suas habilidades com desafios práticos e ganhe XP para subir de nível!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => {
          const completed = isCompleted(challenge.id);
          const accessible = canAccess(challenge, index);

          return (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={accessible ? { scale: 1.02, y: -5 } : {}}
              className={`group cursor-pointer ${!accessible ? 'opacity-50' : ''}`}
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col space-y-4 hover:border-primary/50 transition-all duration-300 glass-effect">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${getLanguageColor(challenge.language)} bg-opacity-20`}>
                      {accessible ? challenge.icon : <Lock className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(challenge.difficulty)}`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                  </div>
                  {completed && (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {challenge.requirements.map((req, i) => (
                      <span key={i} className="px-2 py-1 bg-muted rounded text-xs">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Trophy className="w-4 h-4" />
                      <span>{challenge.xp} XP</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{challenge.timeEstimate}</span>
                    </div>
                  </div>
                  
                  <Button
                    className="w-full"
                    disabled={!accessible}
                    onClick={() => accessible && setSelectedChallenge(challenge)}
                  >
                    {!accessible ? (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Bloqueado
                      </>
                    ) : completed ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Revisar
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Iniciar
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedChallenge && (
        <ChallengeModal
          challenge={selectedChallenge}
          isOpen={!!selectedChallenge}
          onClose={() => setSelectedChallenge(null)}
          onComplete={() => {
            onCompleteChallenge(selectedChallenge.id);
            setSelectedChallenge(null);
            toast({
              title: "Desafio Concluído! 🎉",
              description: `Você ganhou ${selectedChallenge.xp} XP!`,
            });
          }}
          isCompleted={isCompleted(selectedChallenge.id)}
        />
      )}
    </div>
  );
};

export default ChallengesPage;