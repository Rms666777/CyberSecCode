
import React from 'react';
import { 
  Code, 
  Layers, 
  Cpu, 
  Globe, 
  FileCode, 
  Zap, 
  Database,
  Shield,
  Lock,
  Monitor,
  Target,
  Brain,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Package,
  Settings,
  Network,
  Eye,
  Bug
} from 'lucide-react';

export const moduleData = {
  python: [
    {
      id: 'python-basics',
      title: 'Fundamentos Python',
      level: 'Iniciante',
      icon: <Code className="w-6 h-6" />,
      description: 'Variáveis, tipos de dados, estruturas condicionais e loops',
      lessons: 20,
      gradient: 'python-gradient'
    },
    {
      id: 'python-data-structures',
      title: 'Estruturas de Dados',
      level: 'Iniciante',
      icon: <Package className="w-6 h-6" />,
      description: 'Listas, tuplas, dicionários e conjuntos',
      lessons: 15,
      gradient: 'python-gradient'
    },
    {
      id: 'python-functions',
      title: 'Funções e Módulos',
      level: 'Intermediário',
      icon: <Settings className="w-6 h-6" />,
      description: 'Definição de funções, parâmetros, escopo e módulos',
      lessons: 18,
      gradient: 'python-gradient'
    },
    {
      id: 'python-oop',
      title: 'Programação Orientada a Objetos',
      level: 'Intermediário',
      icon: <Layers className="w-6 h-6" />,
      description: 'Classes, objetos, herança e polimorfismo',
      lessons: 22,
      gradient: 'python-gradient'
    },
    {
      id: 'python-advanced',
      title: 'Python Avançado',
      level: 'Avançado',
      icon: <Cpu className="w-6 h-6" />,
      description: 'Decorators, geradores, context managers e metaclasses',
      lessons: 25,
      gradient: 'python-gradient'
    },
    {
      id: 'python-data-science',
      title: 'Data Science',
      level: 'Avançado',
      icon: <Brain className="w-6 h-6" />,
      description: 'NumPy, Pandas, Matplotlib e análise de dados',
      lessons: 30,
      gradient: 'python-gradient'
    },
    {
      id: 'python-web',
      title: 'Desenvolvimento Web',
      level: 'Profissional',
      icon: <Globe className="w-6 h-6" />,
      description: 'Flask, Django, APIs REST e microserviços',
      lessons: 35,
      gradient: 'python-gradient'
    },
    {
      id: 'python-automation',
      title: 'Automação e Scripts',
      level: 'Profissional',
      icon: <Settings className="w-6 h-6" />,
      description: 'Automação de tarefas, web scraping e bots',
      lessons: 28,
      gradient: 'python-gradient'
    }
  ],
  javascript: [
    {
      id: 'js-basics',
      title: 'Fundamentos JavaScript',
      level: 'Iniciante',
      icon: <FileCode className="w-6 h-6" />,
      description: 'Sintaxe, DOM, eventos e funções básicas',
      lessons: 18,
      gradient: 'js-gradient'
    },
    {
      id: 'js-dom',
      title: 'Manipulação do DOM',
      level: 'Iniciante',
      icon: <Monitor className="w-6 h-6" />,
      description: 'Seleção de elementos, eventos e interatividade',
      lessons: 16,
      gradient: 'js-gradient'
    },
    {
      id: 'js-es6',
      title: 'JavaScript Moderno (ES6+)',
      level: 'Intermediário',
      icon: <Zap className="w-6 h-6" />,
      description: 'Arrow functions, promises, async/await e modules',
      lessons: 20,
      gradient: 'js-gradient'
    },
    {
      id: 'js-async',
      title: 'Programação Assíncrona',
      level: 'Intermediário',
      icon: <Network className="w-6 h-6" />,
      description: 'Callbacks, promises, async/await e fetch API',
      lessons: 17,
      gradient: 'js-gradient'
    },
    {
      id: 'js-frameworks',
      title: 'React e Frameworks',
      level: 'Avançado',
      icon: <Layers className="w-6 h-6" />,
      description: 'React, Vue, componentes e estado',
      lessons: 32,
      gradient: 'js-gradient'
    },
    {
      id: 'js-nodejs',
      title: 'Node.js e Backend',
      level: 'Avançado',
      icon: <Server className="w-6 h-6" />,
      description: 'Node.js, Express, APIs e banco de dados',
      lessons: 28,
      gradient: 'js-gradient'
    },
    {
      id: 'js-fullstack',
      title: 'Full Stack JavaScript',
      level: 'Profissional',
      icon: <Database className="w-6 h-6" />,
      description: 'MERN/MEAN stack, deployment e arquitetura',
      lessons: 40,
      gradient: 'js-gradient'
    },
    {
      id: 'js-mobile',
      title: 'Desenvolvimento Mobile',
      level: 'Profissional',
      icon: <Smartphone className="w-6 h-6" />,
      description: 'React Native, Ionic e apps híbridos',
      lessons: 25,
      gradient: 'js-gradient'
    }
  ],
  cybersecurity: [
    {
      id: 'cyber-basics',
      title: 'Fundamentos de Cybersegurança',
      level: 'Iniciante',
      icon: <Shield className="w-6 h-6" />,
      description: 'Conceitos básicos, tipos de ataques e defesas',
      lessons: 15,
      gradient: 'cyber-gradient'
    },
    {
      id: 'cyber-network',
      title: 'Segurança de Redes',
      level: 'Iniciante',
      icon: <Network className="w-6 h-6" />,
      description: 'Protocolos, firewalls e monitoramento de rede',
      lessons: 18,
      gradient: 'cyber-gradient'
    },
    {
      id: 'cyber-python',
      title: 'Python para Cybersegurança',
      level: 'Intermediário',
      icon: <Lock className="w-6 h-6" />,
      description: 'Scripts de segurança, análise de malware e automação',
      lessons: 25,
      gradient: 'cyber-gradient'
    },
    {
      id: 'cyber-js',
      title: 'JavaScript Security',
      level: 'Intermediário',
      icon: <Monitor className="w-6 h-6" />,
      description: 'Segurança web, XSS, CSRF e análise de vulnerabilidades',
      lessons: 20,
      gradient: 'cyber-gradient'
    },
    {
      id: 'cyber-web-security',
      title: 'Segurança de Aplicações Web',
      level: 'Avançado',
      icon: <Globe className="w-6 h-6" />,
      description: 'OWASP Top 10, testes de penetração web',
      lessons: 30,
      gradient: 'cyber-gradient'
    },
    {
      id: 'cyber-forensics',
      title: 'Forense Digital',
      level: 'Avançado',
      icon: <Eye className="w-6 h-6" />,
      description: 'Análise forense, recuperação de dados e evidências',
      lessons: 22,
      gradient: 'cyber-gradient'
    },
    {
      id: 'cyber-advanced',
      title: 'Ethical Hacking Avançado',
      level: 'Profissional',
      icon: <Target className="w-6 h-6" />,
      description: 'Penetration testing, exploits e incident response',
      lessons: 35,
      gradient: 'cyber-gradient'
    },
    {
      id: 'cyber-malware',
      title: 'Análise de Malware',
      level: 'Profissional',
      icon: <Bug className="w-6 h-6" />,
      description: 'Reverse engineering, análise estática e dinâmica',
      lessons: 28,
      gradient: 'cyber-gradient'
    }
  ]
};
