import React from 'react';
import ModulesPage from './ModulesPage';

const BashPage = () => {
  const bashModules = [
    {
      id: 'bash-fundamentals',
      title: 'Fundamentos do BASH',
      description: 'Aprenda os comandos básicos e navegação no terminal',
      difficulty: 'Iniciante',
      duration: '2 horas',
      lessons: 8,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'bash-scripting',
      title: 'Scripts e Automação',
      description: 'Criação de scripts para automatizar tarefas',
      difficulty: 'Intermediário',
      duration: '3 horas',
      lessons: 10,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'bash-text-processing',
      title: 'Processamento de Texto',
      description: 'Domine grep, sed, awk e outras ferramentas',
      difficulty: 'Intermediário',
      duration: '2.5 horas',
      lessons: 9,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'bash-system-admin',
      title: 'Administração de Sistema',
      description: 'Gerenciamento de processos e serviços',
      difficulty: 'Avançado',
      duration: '4 horas',
      lessons: 12,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'bash-networking',
      title: 'Networking e Conectividade',
      description: 'Comandos de rede e conectividade',
      difficulty: 'Avançado',
      duration: '3 horas',
      lessons: 10,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'bash-security',
      title: 'Segurança e Hardening',
      description: 'Práticas de segurança e hardening',
      difficulty: 'Avançado',
      duration: '3.5 horas',
      lessons: 11,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'bash-devops',
      title: 'DevOps e CI/CD',
      description: 'Automação e integração contínua',
      difficulty: 'Profissional',
      duration: '4 horas',
      lessons: 13,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'bash-advanced',
      title: 'BASH Avançado e Performance',
      description: 'Otimização e técnicas avançadas',
      difficulty: 'Profissional',
      duration: '5 horas',
      lessons: 15,
      color: 'from-pink-500 to-red-600'
    }
  ];

  return (
    <ModulesPage 
      title="Dominar BASH"
      subtitle="Do básico ao profissional em linha de comando"
      description="Aprenda BASH desde os fundamentos até técnicas avançadas de automação e administração de sistemas"
      modules={bashModules}
      category="bash"
    />
  );
};

export default BashPage;
