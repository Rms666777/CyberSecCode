export const generateLessons = (module) => {
  const lessons = [];
  
  // PYTHON MODULES
  if (module.id === 'python-basics') {
    lessons.push(
      {
        id: 'python-basics-1',
        title: 'Introdução ao Python',
        difficulty: 'Básico',
        content: `# Bem-vindo ao Python!

Python é uma linguagem de programação poderosa e fácil de aprender. Criada por Guido van Rossum em 1991, Python se tornou uma das linguagens mais populares do mundo.

## Por que Python?
- **Sintaxe simples**: Fácil de ler e escrever
- **Versátil**: Web, ciência de dados, IA, automação
- **Grande comunidade**: Milhões de desenvolvedores
- **Bibliotecas ricas**: Soluções para quase tudo

## Filosofia do Python
"Bonito é melhor que feio. Explícito é melhor que implícito. Simples é melhor que complexo."

## Primeiro Programa
Vamos começar com o tradicional "Olá, mundo!":`,
        code: `# Meu primeiro programa Python
print("Olá, mundo!")
print("Bem-vindo ao CodeMaster!")

# Você pode usar aspas simples ou duplas
print('Python é incrível!')

# Comentários começam com #
# Eles são ignorados pelo interpretador`,
        explanation: 'A função print() é usada para exibir texto na tela. É uma das funções mais básicas e úteis do Python. Note que não precisamos declarar tipos ou usar ponto e vírgula!',
        tips: [
          'Use comentários para explicar seu código',
          'Python é case-sensitive (maiúsculas e minúsculas importam)',
          'Indentação é importante em Python - use espaços consistentemente'
        ]
      },
      {
        id: 'python-basics-2',
        title: 'Variáveis e Tipos de Dados',
        difficulty: 'Básico',
        content: `# Variáveis em Python

Em Python, você não precisa declarar o tipo da variável. O Python determina automaticamente o tipo baseado no valor atribuído.

## Tipos Básicos:
- **int**: números inteiros (1, 42, -10)
- **float**: números decimais (3.14, -2.5, 0.0)
- **str**: texto/strings ("hello", 'world')
- **bool**: verdadeiro ou falso (True, False)
- **NoneType**: valor nulo (None)

## Regras para Nomes de Variáveis:
- Devem começar com letra ou underscore
- Podem conter letras, números e underscores
- São case-sensitive
- Não podem ser palavras reservadas`,
        code: `# Variáveis numéricas
idade = 25
altura = 1.75
pi = 3.14159

# Strings (texto)
nome = "João"
sobrenome = 'Silva'
mensagem = """Esta é uma
string de múltiplas linhas"""

# Boolean (verdadeiro/falso)
ativo = True
inativo = False

# None (valor nulo)
valor_vazio = None

# Verificando tipos
print(type(idade))      # <class 'int'>
print(type(altura))     # <class 'float'>
print(type(nome))       # <class 'str'>

# Exibindo as variáveis
print(f"Nome: {nome} {sobrenome}")
print(f"Idade: {idade} anos")
print(f"Altura: {altura}m")`,
        explanation: 'Python usa tipagem dinâmica, o que significa que você não precisa especificar o tipo da variável ao criá-la. O tipo é determinado automaticamente pelo valor atribuído.',
        tips: [
          'Use nomes descritivos para suas variáveis',
          'Prefira snake_case para nomes de variáveis (ex: nome_completo)',
          'f-strings são a forma moderna de formatar strings em Python'
        ],
        exercise: {
          description: 'Crie variáveis para armazenar informações pessoais e exiba-as formatadas.',
          starter: `# Crie variáveis para:
# - Seu nome
# - Sua idade  
# - Sua cidade
# - Se você gosta de programar (True/False)

# Seu código aqui

# Exiba as informações usando f-strings`
        }
      }
    );
  }

  // Fill remaining lessons with comprehensive content
  const moduleContentMap = {
    'python-basics': {
      topics: ['Introdução ao Python', 'Variáveis e Tipos', 'Operadores', 'Estruturas Condicionais', 'Loops', 'Funções Básicas', 'Input/Output', 'Strings', 'Debugging', 'Exercícios Práticos'],
      hours: 25
    },
    'python-data-structures': {
      topics: ['Listas - Introdução', 'Listas - Métodos', 'Tuplas', 'Dicionários', 'Conjuntos', 'Compreensões de Lista', 'Iteradores', 'Generators', 'Collections Module', 'Exercícios Avançados'],
      hours: 30
    },
    'python-functions': {
      topics: ['Definição de Funções', 'Parâmetros e Argumentos', 'Escopo de Variáveis', 'Módulos', 'Packages', 'Decorators Básicos', 'Funções Lambda', 'Recursão', 'Documentação', 'Testes'],
      hours: 35
    },
    'python-oop': {
      topics: ['Classes e Objetos', 'Atributos e Métodos', 'Herança', 'Polimorfismo', 'Encapsulamento', 'Métodos Especiais', 'Properties', 'Classes Abstratas', 'Design Patterns', 'Projetos OOP'],
      hours: 40
    },
    'python-advanced': {
      topics: ['Decorators Avançados', 'Context Managers', 'Metaclasses', 'Descriptors', 'Threading', 'Asyncio', 'Memory Management', 'Performance Optimization', 'Profiling', 'Best Practices'],
      hours: 45
    },
    'python-data-science': {
      topics: ['NumPy Fundamentals', 'Pandas Basics', 'Data Manipulation', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebooks', 'Data Cleaning', 'Machine Learning', 'Projetos Reais'],
      hours: 50
    },
    'python-web': {
      topics: ['Flask Básico', 'Django Framework', 'APIs REST', 'FastAPI', 'Database ORM', 'Authentication', 'Testing', 'Deployment', 'Microservices', 'Projetos Web'],
      hours: 50
    },
    'python-automation': {
      topics: ['Scripts de Sistema', 'Web Scraping', 'Automação de Tarefas', 'Bots', 'Selenium', 'APIs Integration', 'Task Scheduling', 'DevOps Tools', 'Monitoring', 'Projetos Automation'],
      hours: 40
    },
    'js-basics': {
      topics: ['Introdução ao JavaScript', 'Variáveis e Tipos', 'Operadores', 'Condicionais', 'Loops', 'Funções', 'Arrays', 'Objetos', 'DOM Básico', 'Exercícios'],
      hours: 30
    },
    'js-dom': {
      topics: ['Seleção de Elementos', 'Manipulação DOM', 'Eventos', 'Event Listeners', 'Forms', 'Validação', 'Animações CSS', 'Local Storage', 'AJAX Básico', 'Projetos DOM'],
      hours: 25
    },
    'js-es6': {
      topics: ['Arrow Functions', 'Template Literals', 'Destructuring', 'Spread/Rest', 'Modules', 'Classes', 'Promises', 'Async/Await', 'Map/Set', 'Projetos ES6'],
      hours: 35
    },
    'js-async': {
      topics: ['Callbacks', 'Promises', 'Async/Await', 'Fetch API', 'AJAX', 'Error Handling', 'Parallel Processing', 'Web Workers', 'Performance', 'Projetos Async'],
      hours: 30
    },
    'js-frameworks': {
      topics: ['React Basics', 'Components', 'State Management', 'Hooks', 'Router', 'Context API', 'Testing', 'Performance', 'Next.js', 'Projetos React'],
      hours: 45
    },
    'js-nodejs': {
      topics: ['Node.js Basics', 'Express.js', 'NPM', 'File System', 'HTTP Servers', 'Middleware', 'Database Integration', 'Authentication', 'Testing', 'Projetos Backend'],
      hours: 40
    },
    'js-fullstack': {
      topics: ['MERN Stack', 'Database Design', 'API Development', 'Frontend Integration', 'State Management', 'Testing', 'Deployment', 'DevOps', 'Scaling', 'Projetos Fullstack'],
      hours: 50
    },
    'js-mobile': {
      topics: ['React Native', 'Navigation', 'Native Modules', 'Styling', 'State Management', 'APIs', 'Publishing', 'Performance', 'Testing', 'Projetos Mobile'],
      hours: 35
    },
    'redteam-basics': {
      topics: ['Introdução ao Ethical Hacking', 'Ética e Legalidade', 'Metodologias', 'Ferramentas Básicas', 'Laboratórios', 'Documentação', 'Relatórios', 'Frameworks', 'Certificações', 'Carreira'],
      hours: 25
    },
    'redteam-recon': {
      topics: ['OSINT Fundamentals', 'Google Dorking', 'Social Engineering', 'DNS Enumeration', 'Subdomain Discovery', 'Email Harvesting', 'Metadata Analysis', 'Footprinting', 'Tools', 'Projetos OSINT'],
      hours: 30
    },
    'redteam-vuln-assessment': {
      topics: ['Vulnerability Scanners', 'Manual Testing', 'CVE Database', 'Risk Assessment', 'Prioritization', 'False Positives', 'Reporting', 'Remediation', 'Automation', 'Case Studies'],
      hours: 35
    },
    'redteam-web-pentest': {
      topics: ['OWASP Top 10', 'SQL Injection', 'XSS', 'CSRF', 'Authentication Bypass', 'Session Management', 'File Upload', 'Business Logic', 'API Testing', 'Projetos Web'],
      hours: 40
    },
    'redteam-network-pentest': {
      topics: ['Network Scanning', 'Service Enumeration', 'Lateral Movement', 'Privilege Escalation', 'Active Directory', 'Pivoting', 'Tunneling', 'Persistence', 'Cleanup', 'Projetos Network'],
      hours: 45
    },
    'redteam-exploitation': {
      topics: ['Exploit Development', 'Buffer Overflows', 'Return Oriented Programming', 'Shellcode', 'Payloads', 'Encoders', 'Post-Exploitation', 'Data Exfiltration', 'Custom Tools', 'Advanced Exploits'],
      hours: 45
    },
    'redteam-apt': {
      topics: ['APT Tactics', 'Evasion Techniques', 'Anti-Forensics', 'Covert Channels', 'Advanced Malware', 'C2 Infrastructure', 'Attribution', 'Threat Intelligence', 'Campaign Analysis', 'Defense Evasion'],
      hours: 50
    },
    'redteam-operations': {
      topics: ['Team Coordination', 'C2 Frameworks', 'Operational Security', 'Campaign Planning', 'Reporting', 'Debrief', 'Continuous Improvement', 'Leadership', 'Client Relations', 'Advanced Operations'],
      hours: 50
    },
    'blueteam-basics': {
      topics: ['Fundamentos da Defesa', 'Defense Frameworks', 'Security Controls', 'Risk Management', 'Compliance', 'Policies', 'Procedures', 'Training', 'Awareness', 'Metrics'],
      hours: 25
    },
    'blueteam-monitoring': {
      topics: ['SIEM Fundamentals', 'Log Analysis', 'Network Monitoring', 'Endpoint Detection', 'Alerting', 'Dashboards', 'Metrics', 'Baselines', 'Tuning', 'Advanced Monitoring'],
      hours: 35
    },
    'blueteam-incident-response': {
      topics: ['IR Frameworks', 'Playbooks', 'Containment', 'Eradication', 'Recovery', 'Lessons Learned', 'Communication', 'Legal Considerations', 'Automation', 'Advanced IR'],
      hours: 40
    },
    'blueteam-forensics': {
      topics: ['Digital Evidence', 'Acquisition', 'Analysis', 'Timeline Analysis', 'Memory Forensics', 'Network Forensics', 'Mobile Forensics', 'Reporting', 'Tools', 'Case Studies'],
      hours: 40
    },
    'blueteam-soc': {
      topics: ['SOC Design', 'Workflows', 'Automation', 'Orchestration', 'Metrics', 'KPIs', 'Staffing', 'Technology Stack', 'Maturity Models', 'SOC Evolution'],
      hours: 45
    },
    'blueteam-threat-hunting': {
      topics: ['Hunting Methodologies', 'Hypothesis Development', 'Data Analysis', 'TTPs', 'Threat Intelligence', 'IOCs', 'Behavioral Analysis', 'Tools', 'Automation', 'Advanced Hunting'],
      hours: 45
    },
    'blueteam-malware-analysis': {
      topics: ['Static Analysis', 'Dynamic Analysis', 'Reverse Engineering', 'Sandboxing', 'Behavioral Analysis', 'IOC Extraction', 'Yara Rules', 'Reporting', 'Automation', 'Advanced Analysis'],
      hours: 50
    },
    'blueteam-architecture': {
      topics: ['Security Architecture', 'Zero Trust', 'Defense in Depth', 'Network Segmentation', 'Identity Management', 'Cloud Security', 'DevSecOps', 'Governance', 'Risk Management', 'Future Trends'],
      hours: 50
    },
    'bash-basics': {
      topics: ['Introdução ao BASH', 'Comandos Básicos', 'Navegação de Diretórios', 'Manipulação de Arquivos', 'Permissões', 'Redirecionamento', 'Pipes', 'Wildcards', 'Histórico', 'Exercícios Práticos'],
      hours: 25
    },
    'bash-scripting': {
      topics: ['Primeiro Script', 'Variáveis', 'Parâmetros', 'Estruturas Condicionais', 'Loops', 'Funções', 'Arrays', 'Debugging', 'Boas Práticas', 'Projetos Scripts'],
      hours: 30
    },
    'bash-text-processing': {
      topics: ['grep Fundamentals', 'sed Editor', 'awk Programming', 'cut e sort', 'uniq e wc', 'Regular Expressions', 'Text Manipulation', 'Log Processing', 'Data Extraction', 'Advanced Processing'],
      hours: 35
    },
    'bash-system-admin': {
      topics: ['Process Management', 'Service Control', 'Cron Jobs', 'System Monitoring', 'User Management', 'Package Management', 'System Logs', 'Performance Tuning', 'Backup Scripts', 'Automation'],
      hours: 40
    },
    'bash-networking': {
      topics: ['Network Commands', 'SSH Fundamentals', 'SCP e rsync', 'Port Scanning', 'Network Troubleshooting', 'Remote Execution', 'Tunneling', 'VPN Setup', 'Network Monitoring', 'Security Tools'],
      hours: 35
    },
    'bash-security': {
      topics: ['File Permissions', 'User Security', 'Encryption Tools', 'Log Analysis', 'Security Auditing', 'Hardening Scripts', 'Intrusion Detection', 'Forensics', 'Compliance', 'Security Automation'],
      hours: 40
    },
    'bash-devops': {
      topics: ['CI/CD Pipelines', 'Docker Scripts', 'Kubernetes Automation', 'Infrastructure as Code', 'Deployment Scripts', 'Monitoring Automation', 'Git Hooks', 'Build Automation', 'Testing Scripts', 'Production Deployment'],
      hours: 45
    },
    'bash-advanced': {
      topics: ['Advanced Scripting', 'Performance Optimization', 'Parallel Processing', 'Error Handling', 'Signal Handling', 'IPC', 'Memory Management', 'Profiling', 'Best Practices', 'Expert Projects'],
      hours: 50
    }
  };

  // Generate lessons for each module based on topics
  const moduleInfo = moduleContentMap[module.id];
  if (moduleInfo && lessons.length === 0) {
    moduleInfo.topics.forEach((topic, index) => {
      const lessonNumber = index + 1;
      const difficulty = lessonNumber <= 3 ? 'Básico' : lessonNumber <= 7 ? 'Intermediário' : 'Avançado';
      
      lessons.push({
        id: `${module.id}-${lessonNumber}`,
        title: topic,
        difficulty: difficulty,
        content: generateLessonContent(module.id, topic, lessonNumber),
        code: generateCodeExample(module.id, topic),
        explanation: generateExplanation(module.id, topic),
        tips: generateTips(module.id, topic),
        exercise: generateExercise(module.id, topic)
      });
    });
  }

  // Fill remaining lessons if needed
  while (lessons.length < module.lessons) {
    const lessonNumber = lessons.length + 1;
    lessons.push({
      id: `${module.id}-${lessonNumber}`,
      title: `Lição ${lessonNumber} - ${module.title}`,
      difficulty: lessonNumber <= 5 ? 'Básico' : lessonNumber <= 15 ? 'Intermediário' : 'Avançado',
      content: `# Lição ${lessonNumber}: ${module.title}

Esta lição está sendo desenvolvida com conteúdo detalhado e exemplos práticos.

## O que você aprenderá:
- Conceitos fundamentais importantes
- Exemplos práticos e aplicáveis
- Exercícios para fixar o conhecimento
- Dicas e melhores práticas

## Conteúdo em desenvolvimento
Nossa equipe está preparando conteúdo de alta qualidade para esta lição, incluindo:
- Explicações detalhadas
- Códigos de exemplo funcionais
- Exercícios práticos
- Projetos reais

Continue explorando as outras lições disponíveis enquanto preparamos este conteúdo!`,
      code: `# Exemplo de código para a lição ${lessonNumber}
print("Esta lição está em desenvolvimento!")
print("Em breve teremos conteúdo completo aqui")

# Conceitos que serão abordados:
# - Tópico importante 1
# - Tópico importante 2  
# - Tópico importante 3

def exemplo_funcao():
    """
    Esta função será implementada com conteúdo real
    """
    return "Conteúdo em breve!"

resultado = exemplo_funcao()
print(resultado)`,
      explanation: '🚧 Esta lição está sendo desenvolvida com conteúdo completo e exemplos práticos. Em breve você terá acesso a explicações detalhadas, códigos funcionais e exercícios interativos!',
      tips: [
        'Continue praticando com as lições disponíveis',
        'Experimente o terminal interativo para testar códigos',
        'Explore os desafios práticos para aplicar seu conhecimento'
      ]
    });
  }

  return lessons;
};

function generateLessonContent(moduleId, topic, lessonNumber) {
  const contentTemplates = {
    python: `# ${topic}

Esta lição aborda ${topic.toLowerCase()} em Python, um conceito fundamental para o desenvolvimento.

## Objetivos da Lição:
- Compreender os conceitos básicos de ${topic.toLowerCase()}
- Aplicar conhecimentos em exemplos práticos
- Desenvolver habilidades de resolução de problemas
- Preparar-se para conceitos mais avançados

## Conceitos Importantes:
${topic} é essencial para programação Python porque permite que você:
- Organize e estruture seu código de forma eficiente
- Resolva problemas complexos de maneira sistemática
- Implemente soluções robustas e escaláveis
- Siga as melhores práticas da comunidade Python

## Aplicações Práticas:
- Desenvolvimento de aplicações web
- Análise de dados e ciência de dados
- Automação de tarefas
- Inteligência artificial e machine learning`,

    javascript: `# ${topic}

Esta lição explora ${topic.toLowerCase()} em JavaScript, fundamental para desenvolvimento web moderno.

## Objetivos da Lição:
- Dominar os conceitos de ${topic.toLowerCase()}
- Implementar soluções práticas e eficientes
- Compreender as melhores práticas
- Preparar-se para frameworks avançados

## Por que ${topic} é Importante:
No desenvolvimento JavaScript, ${topic.toLowerCase()} permite:
- Criar interfaces de usuário interativas
- Desenvolver aplicações web dinâmicas
- Implementar lógica de negócio complexa
- Integrar com APIs e serviços externos

## Aplicações no Mundo Real:
- Desenvolvimento frontend com React/Vue/Angular
- Aplicações backend com Node.js
- Desenvolvimento mobile com React Native
- Aplicações desktop com Electron`,

    redteam: `# ${topic}

Esta lição aborda ${topic.toLowerCase()} no contexto de Red Team e Ethical Hacking.

## Objetivos da Lição:
- Compreender as técnicas de ${topic.toLowerCase()}
- Aplicar metodologias éticas de teste
- Desenvolver habilidades de análise de segurança
- Documentar achados de forma profissional

## Importância no Red Team:
${topic} é crucial para operações de Red Team porque:
- Permite identificar vulnerabilidades reais
- Simula ataques de adversários reais
- Testa a eficácia das defesas
- Fornece insights para melhorias de segurança

## Considerações Éticas:
- Sempre obter autorização por escrito
- Respeitar o escopo definido
- Proteger informações sensíveis
- Reportar vulnerabilidades responsavelmente`,

    blueteam: `# ${topic}

Esta lição foca em ${topic.toLowerCase()} para operações de Blue Team e defesa cibernética.

## Objetivos da Lição:
- Implementar estratégias de ${topic.toLowerCase()}
- Desenvolver capacidades de detecção
- Criar processos de resposta eficazes
- Melhorar a postura de segurança organizacional

## Papel no Blue Team:
${topic} é fundamental para Blue Team porque:
- Fortalece as defesas organizacionais
- Detecta atividades maliciosas
- Responde rapidamente a incidentes
- Previne futuros ataques

## Frameworks e Padrões:
- NIST Cybersecurity Framework
- ISO 27001/27002
- CIS Controls
- MITRE ATT&CK Framework`
  };

  const category = moduleId.includes('python') ? 'python' :
                  moduleId.includes('js') ? 'javascript' :
                  moduleId.includes('redteam') ? 'redteam' : 'blueteam';

  return contentTemplates[category];
}

function generateCodeExample(moduleId, topic) {
  if (moduleId.includes('python')) {
    return `# Exemplo prático: ${topic}
def exemplo_${topic.toLowerCase().replace(/\s+/g, '_')}():
    """
    Demonstração de ${topic} em Python
    """
    print(f"Aprendendo sobre: {topic}")
    
    # Implementação do conceito
    resultado = "Conceito aplicado com sucesso!"
    return resultado

# Executando o exemplo
resultado = exemplo_${topic.toLowerCase().replace(/\s+/g, '_')}()
print(resultado)

# Exercício prático
# TODO: Implemente sua própria versão do conceito`;
  } else if (moduleId.includes('js')) {
    return `// Exemplo prático: ${topic}
function exemplo${topic.replace(/\s+/g, '')}() {
    console.log(\`Aprendendo sobre: ${topic}\`);
    
    // Implementação do conceito
    const resultado = "Conceito aplicado com sucesso!";
    return resultado;
}

// Executando o exemplo
const resultado = exemplo${topic.replace(/\s+/g, '')}();
console.log(resultado);

// Exercício prático
// TODO: Implemente sua própria versão do conceito`;
  } else if (moduleId.includes('redteam')) {
    return `# Red Team - ${topic}
import subprocess
import sys

def demonstracao_${topic.toLowerCase().replace(/\s+/g, '_')}():
    """
    Demonstração ética de ${topic}
    AVISO: Use apenas em ambientes autorizados!
    """
    print(f"🔴 Red Team: {topic}")
    print("⚠️  Lembre-se: Sempre obtenha autorização!")
    
    # Exemplo de técnica (apenas educacional)
    print("Executando técnica de forma ética...")
    return "Técnica demonstrada com sucesso"

# IMPORTANTE: Só execute em laboratórios próprios
resultado = demonstracao_${topic.toLowerCase().replace(/\s+/g, '_')}()
print(resultado)`;
  } else {
    return `# Blue Team - ${topic}
import logging
import datetime

def implementar_${topic.toLowerCase().replace(/\s+/g, '_')}():
    """
    Implementação de ${topic} para defesa
    """
    print(f"🔵 Blue Team: {topic}")
    
    # Configuração de logging para monitoramento
    logging.basicConfig(level=logging.INFO)
    logger = logging.getLogger(__name__)
    
    logger.info(f"Implementando {topic}")
    
    # Implementação da defesa
    defesa_ativa = True
    return f"{topic} implementado com sucesso"

# Executando a implementação
resultado = implementar_${topic.toLowerCase().replace(/\s+/g, '_')}()
print(resultado)`;
  }
}

function generateExplanation(moduleId, topic) {
  const explanations = {
    python: `Este exemplo demonstra como ${topic.toLowerCase()} funciona em Python. O conceito é fundamental para escrever código eficiente e legível.`,
    javascript: `Este código mostra a implementação de ${topic.toLowerCase()} em JavaScript, essencial para desenvolvimento web moderno.`,
    redteam: `Esta demonstração ilustra técnicas de ${topic.toLowerCase()} usadas em operações de Red Team. Sempre pratique em ambientes controlados e autorizados.`,
    blueteam: `Este exemplo implementa ${topic.toLowerCase()} como parte de uma estratégia de defesa cibernética, fortalecendo a postura de segurança.`
  };

  const category = moduleId.includes('python') ? 'python' :
                  moduleId.includes('js') ? 'javascript' :
                  moduleId.includes('redteam') ? 'redteam' : 'blueteam';

  return explanations[category];
}

function generateTips(moduleId, topic) {
  const tipCategories = {
    python: [
      'Siga a PEP 8 para estilo de código Python',
      'Use docstrings para documentar suas funções',
      'Prefira list comprehensions quando apropriado',
      'Teste seu código regularmente'
    ],
    javascript: [
      'Use const e let em vez de var',
      'Implemente error handling adequado',
      'Mantenha funções pequenas e focadas',
      'Use ferramentas de linting como ESLint'
    ],
    redteam: [
      'Sempre obtenha autorização por escrito',
      'Documente todas as atividades realizadas',
      'Use VPNs e proxies para proteção',
      'Mantenha-se atualizado com novas técnicas'
    ],
    blueteam: [
      'Monitore logs continuamente',
      'Implemente defesa em profundidade',
      'Mantenha sistemas sempre atualizados',
      'Treine a equipe regularmente'
    ]
  };

  const category = moduleId.includes('python') ? 'python' :
                  moduleId.includes('js') ? 'javascript' :
                  moduleId.includes('redteam') ? 'redteam' : 'blueteam';

  return tipCategories[category];
}

function generateExercise(moduleId, topic) {
  return {
    description: `Pratique ${topic.toLowerCase()} implementando uma solução personalizada.`,
    starter: `# Exercício: ${topic}
# Implemente sua própria versão do conceito aprendido
# 
# Requisitos:
# 1. Use as melhores práticas
# 2. Adicione comentários explicativos
# 3. Teste sua implementação
# 4. Considere casos extremos

# Seu código aqui:

`
  };
}
