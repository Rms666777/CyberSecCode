import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BookOpen, Clock, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModuleCard = ({ module, onClick, userProgress }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Iniciante':
        return 'text-green-400 bg-green-400/10';
      case 'Intermediário':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'Avançado':
        return 'text-orange-400 bg-orange-400/10';
      case 'Profissional':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-blue-400 bg-blue-400/10';
    }
  };

  // Calculate completion percentage
  const completedLessons = userProgress.completedLessons.filter(lessonId => 
    lessonId.startsWith(module.id)
  ).length;
  const completionPercentage = Math.round((completedLessons / module.lessons) * 100);
  const isCompleted = completionPercentage === 100;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col space-y-4 hover:border-primary/50 transition-all duration-300 glass-effect">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-lg ${module.gradient} bg-opacity-20 relative`}>
            {module.icon}
            {isCompleted && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(module.level)}`}>
            {module.level}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {module.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {module.description}
          </p>
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progresso</span>
              <span className="text-primary font-medium">{completionPercentage}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="text-xs text-muted-foreground">
              {completedLessons} de {module.lessons} lições completas
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>{module.lessons} lições</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>~{Math.ceil(module.lessons * 1.5)}h</span>
            </div>
          </div>
          
          <Button
            size="sm"
            variant="ghost"
            className="text-primary hover:text-primary-foreground hover:bg-primary p-2"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* XP Indicator */}
        {completedLessons > 0 && (
          <div className="flex items-center justify-center space-x-1 text-xs text-yellow-500 bg-yellow-500/10 rounded-full py-1 px-3">
            <Star className="w-3 h-3" />
            <span>+{completedLessons * 100} XP</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ModuleCard;