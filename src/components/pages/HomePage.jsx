import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Terminal, 
  Shield, 
  Play, 
  Book, 
  Zap, 
  FileCode,
  Target,
  TrendingUp,
  Award,
  Users,
  Clock,
  Star,
  Trophy,
  Flame
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = ({ setActiveSection, userProgress }) => {
  const stats = [
    { icon: <Book className="w-8 h-8" />, label: 'Lições Completas', value: userProgress.completedLessons.length },
    { icon: <Target className="w-8 h-8" />, label: 'Desafios Resolvidos', value: userProgress.completedChallenges.length },
    { icon: <Flame className="w-8 h-8" />, label: 'Sequência de Dias', value: userProgress.streakDays },
    { icon: <Trophy className="w-8 h-8" />, label: 'XP Total', value: userProgress.totalXP }
  ];

  const quickActions = [
    {
      title: 'Continuar Aprendendo',
      description: 'Retome de onde parou',
      icon: <Play className="w-6 h-6" />,
      action: () => setActiveSection('python'),
      gradient: 'from-green-500 to-blue-600'
    },
    {
      title: 'Resolver Desafios',
      description: 'Teste suas habilidades',
      icon: <Target className="w-6 h-6" />,
      action: () => setActiveSection('challenges'),
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Terminal Interativo',
      description: 'Execute códigos ao vivo',
      icon: <Terminal className="w-6 h-6" />,
      action: () => setActiveSection('terminal'),
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Ver Progresso',
      description: 'Acompanhe sua evolução',
      icon: <TrendingUp className="w-6 h-6" />,
      action: () => setActiveSection('progress'),
      gradient: 'from-blue-500 to-purple-600'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 py-16"
      >
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            CodeMaster Academy
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
            Domine Python e JavaScript do básico ao profissional, com foco especial em cybersegurança. 
            Aprenda com exemplos práticos e teste seus códigos em tempo real!
          </p>
        </div>
        
        {/* User Level Display */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-6 py-3"
        >
          <Star className="w-6 h-6 text-yellow-500" />
          <span className="text-lg font-semibold">Nível {userProgress.level}</span>
          <div className="w-px h-6 bg-yellow-500/30"></div>
          <span className="text-yellow-400">{userProgress.totalXP} XP</span>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 text-lg neon-glow"
            onClick={() => setActiveSection('python')}
          >
            <Code className="w-5 h-5 mr-2" />
            Começar com Python
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 text-lg"
            onClick={() => setActiveSection('javascript')}
          >
            <FileCode className="w-5 h-5 mr-2" />
            Aprender JavaScript
          </Button>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg cyber-glow"
            onClick={() => setActiveSection('cybersecurity')}
          >
            <Shield className="w-5 h-5 mr-2" />
            Cybersegurança
          </Button>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="glass-effect rounded-xl p-6 text-center space-y-3"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto text-white">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ações Rápidas</h2>
          <p className="text-muted-foreground">Continue sua jornada de aprendizado</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer"
              onClick={action.action}
            >
              <div className="glass-effect rounded-xl p-6 h-full flex flex-col space-y-4 hover:border-primary/50 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-lg flex items-center justify-center text-white`}>
                  {action.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="glass-effect rounded-xl p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
            <Terminal className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Terminal Interativo</h3>
          <p className="text-muted-foreground">
            Execute códigos Python e JavaScript diretamente no navegador com nosso terminal avançado
          </p>
        </div>

        <div className="glass-effect rounded-xl p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
            <Book className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Conteúdo Completo</h3>
          <p className="text-muted-foreground">
            Mais de 300 lições estruturadas do nível iniciante ao profissional
          </p>
        </div>

        <div className="glass-effect rounded-xl p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold">Foco em Segurança</h3>
          <p className="text-muted-foreground">
            Aprenda cybersegurança aplicada com exemplos práticos e cenários reais
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8"
      >
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Pronto para o próximo nível?</h2>
          <p className="text-slate-300 text-lg">
            Experimente nossos desafios práticos e teste suas habilidades
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              onClick={() => setActiveSection('challenges')}
            >
              <Target className="w-5 h-5 mr-2" />
              Ver Desafios
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              onClick={() => setActiveSection('terminal')}
            >
              <Play className="w-5 h-5 mr-2" />
              Abrir Terminal
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;