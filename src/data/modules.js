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
  redteam: [
    {
      id: 'redteam-basics',
      title: 'Fundamentos de Ethical Hacking',
      level: 'Iniciante',
      icon: <Target className="w-6 h-6" />,
      description: 'Conceitos básicos, metodologias e ética do hacking',
      lessons: 20,
      gradient: 'redteam-gradient'
    },
    {
      id: 'redteam-recon',
      title: 'Reconnaissance e OSINT',
      level: 'Iniciante',
      icon: <Eye className="w-6 h-6" />,
      description: 'Coleta de informações, OSINT e footprinting',
      lessons: 22,
      gradient: 'redteam-gradient'
    },
    {
      id: 'redteam-vuln-assessment',
      title: 'Vulnerability Assessment',
      level: 'Intermediário',
      icon: <Bug className="w-6 h-6" />,
      description: 'Identificação e análise de vulnerabilidades',
      lessons: 25,
      gradient: 'redteam-gradient'
    },
    {
      id: 'redteam-web-pentest',
      title: 'Web Application Penetration Testing',
      level: 'Intermediário',
      icon: <Globe className="w-6 h-6" />,
      description: 'OWASP Top 10, SQL injection, XSS e testes web',
      lessons: 30,
      gradient: 'redteam-gradient'
    },
    {
      id: 'redteam-network-pentest',
      title: 'Network Penetration Testing',
      level: 'Avançado',
      icon: <Network className="w-6 h-6" />,
      description: 'Testes de rede, lateral movement e privilege escalation',
      lessons: 28,
      gradient: 'redteam-gradient'
    },
    {
      id: 'redteam-exploitation',
      title: 'Exploitation e Post-Exploitation',
      level: 'Avançado',
      icon: <Zap className="w-6 h-6" />,
      description: 'Exploits, payloads, persistence e data exfiltration',
      lessons: 32,
      gradient: 'redteam-gradient'
    },
    {
      id: 'redteam-apt',
      title: 'Advanced Persistent Threats',
      level: 'Profissional',
      icon: <Lock className="w-6 h-6" />,
      description: 'APTs, evasion techniques e advanced malware',
      lessons: 35,
      gradient: 'redteam-gradient'
    },
    {
      id: 'redteam-operations',
      title: 'Red Team Operations',
      level: 'Profissional',
      icon: <Shield className="w-6 h-6" />,
      description: 'Operações completas, C2, teamwork e reporting',
      lessons: 40,
      gradient: 'redteam-gradient'
    }
  ],
  blueteam: [
    {
      id: 'blueteam-basics',
      title: 'Fundamentos de Defesa Cibernética',
      level: 'Iniciante',
      icon: <Shield className="w-6 h-6" />,
      description: 'Conceitos de defesa, frameworks e estratégias',
      lessons: 18,
      gradient: 'blueteam-gradient'
    },
    {
      id: 'blueteam-monitoring',
      title: 'Monitoramento e Detecção',
      level: 'Iniciante',
      icon: <Monitor className="w-6 h-6" />,
      description: 'SIEM, logs, alertas e detecção de anomalias',
      lessons: 24,
      gradient: 'blueteam-gradient'
    },
    {
      id: 'blueteam-incident-response',
      title: 'Incident Response',
      level: 'Intermediário',
      icon: <Zap className="w-6 h-6" />,
      description: 'Resposta a incidentes, containment e recovery',
      lessons: 26,
      gradient: 'blueteam-gradient'
    },
    {
      id: 'blueteam-forensics',
      title: 'Forense Digital',
      level: 'Intermediário',
      icon: <Eye className="w-6 h-6" />,
      description: 'Análise forense, evidências e investigação',
      lessons: 28,
      gradient: 'blueteam-gradient'
    },
    {
      id: 'blueteam-soc',
      title: 'Security Operations Center',
      level: 'Avançado',
      icon: <Server className="w-6 h-6" />,
      description: 'Operação de SOC, workflows e automação',
      lessons: 30,
      gradient: 'blueteam-gradient'
    },
    {
      id: 'blueteam-threat-hunting',
      title: 'Threat Hunting',
      level: 'Avançado',
      icon: <Target className="w-6 h-6" />,
      description: 'Caça a ameaças, TTPs e threat intelligence',
      lessons: 32,
      gradient: 'blueteam-gradient'
    },
    {
      id: 'blueteam-malware-analysis',
      title: 'Análise de Malware',
      level: 'Profissional',
      icon: <Bug className="w-6 h-6" />,
      description: 'Reverse engineering, análise estática e dinâmica',
      lessons: 35,
      gradient: 'blueteam-gradient'
    },
    {
      id: 'blueteam-architecture',
      title: 'Security Architecture',
      level: 'Profissional',
      icon: <Layers className="w-6 h-6" />,
      description: 'Arquitetura segura, zero trust e defense in depth',
      lessons: 38,
      gradient: 'blueteam-gradient'
    }
  ]
};
