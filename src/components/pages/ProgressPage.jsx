import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Star, 
  Target, 
  Book, 
  Flame, 
  Award,
  TrendingUp,
  Calendar,
  Code,
  Shield,
  Zap
} from 'lucide-react';

const ProgressPage = ({ userProgress, moduleData }) => {
  const totalLessons = Object.values(moduleData).flat().reduce((sum, module) => sum + module.lessons, 0);
  const completionPercentage = Math.round((userProgress.completedLessons.length / totalLessons) * 100);
  
  const xpToNextLevel = (userProgress.level * 1000) - userProgress.totalXP;
  const currentLevelProgress = ((userProgress.totalXP % 1000) / 1000) * 100;

  const achievements = [
    {
      id: 'first-lesson',
      title: 'Primeiro Passo',
      description: 'Complete sua primeira lição',
      icon: <Book className="w-6 h-6" />,
      unlocked: userProgress.completedLessons.length >= 1,
      progress: Math.min(userProgress.completedLessons.length, 1)
    },
    {
      id: 'streak-7',
      title: 'Dedicado',
      description: 'Mantenha uma sequência de 7 dias',
      icon: <Flame className="w-6 h-6" />,
      unlocked: userProgress.streakDays >= 7,
      progress: Math.min(userProgress.streakDays / 7, 1)
    },
    {
      id: 'challenges-5',
      title: 'Desafiador',
      description: 'Complete 5 desafios',
      icon: <Target className="w-6 h-6" />,
      unlocked: userProgress.completedChallenges.length >= 5,
      progress: Math.min(userProgress.completedChallenges.length / 5, 1)
    },
    {
      id: 'level-5',
      title: 'Experiente',
      description: 'Alcance o nível 5',
      icon: <Star className="w-6 h-6" />,
      unlocked: userProgress.level >= 5,
      progress: Math.min(userProgress.level / 5, 1)
    }
  ];

  const moduleProgress = Object.entries(moduleData).map(([key, modules]) => {
    const totalModuleLessons = modules.reduce((sum, module) => sum + module.lessons, 0);
    const completedModuleLessons = userProgress.completedLessons.filter(lessonId => 
      lessonId.startsWith(key)
    ).length;
    
    return {
      name: key === 'python' ? 'Python' : key === 'javascript' ? 'JavaScript' : 'Cybersegurança',
      icon: key === 'python' ? <Code className="w-5 h-5" /> : 
            key === 'javascript' ? <Zap className="w-5 h-5" /> : 
            <Shield className="w-5 h-5" />,
      completed: completedModuleLessons,
      total: totalModuleLessons,
      percentage: Math.round((completedModuleLessons / totalModuleLessons) * 100)
    };
  });

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Seu Progresso
        </h1>
        <p className="text-xl text-muted-foreground">
          Acompanhe sua jornada de aprendizado e conquistas
        </p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-effect rounded-xl p-6 text-center space-y-3"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-foreground">Nível {userProgress.level}</div>
          <div className="text-sm text-muted-foreground">
            {xpToNextLevel} XP para próximo nível
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${currentLevelProgress}%` }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-xl p-6 text-center space-y-3"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
            <Book className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-foreground">{userProgress.completedLessons.length}</div>
          <div className="text-sm text-muted-foreground">Lições Completas</div>
          <div className="text-xs text-green-400">{completionPercentage}% do total</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-effect rounded-xl p-6 text-center space-y-3"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-foreground">{userProgress.streakDays}</div>
          <div className="text-sm text-muted-foreground">Dias Consecutivos</div>
          <div className="text-xs text-orange-400">Continue assim!</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-effect rounded-xl p-6 text-center space-y-3"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="text-3xl font-bold text-foreground">{userProgress.completedChallenges.length}</div>
          <div className="text-sm text-muted-foreground">Desafios Resolvidos</div>
          <div className="text-xs text-purple-400">Excelente!</div>
        </motion.div>
      </div>

      {/* Module Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-effect rounded-xl p-6"
      >
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2" />
          Progresso por Módulo
        </h2>
        
        <div className="space-y-4">
          {moduleProgress.map((module, index) => (
            <div key={module.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {module.icon}
                  <span className="font-medium">{module.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {module.completed}/{module.total} lições
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${module.percentage}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full"
                />
              </div>
              <div className="text-right text-sm text-muted-foreground">
                {module.percentage}%
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-effect rounded-xl p-6"
      >
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
          <Award className="w-6 h-6 mr-2" />
          Conquistas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={`border rounded-lg p-4 transition-all duration-300 ${
                achievement.unlocked 
                  ? 'border-green-500/50 bg-green-500/10' 
                  : 'border-border bg-muted/50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  achievement.unlocked 
                    ? 'bg-green-500 text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${
                    achievement.unlocked ? 'text-green-400' : 'text-muted-foreground'
                  }`}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  {!achievement.unlocked && (
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${achievement.progress * 100}%` }}
                      />
                    </div>
                  )}
                </div>
                {achievement.unlocked && (
                  <Trophy className="w-5 h-5 text-yellow-500" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProgressPage;