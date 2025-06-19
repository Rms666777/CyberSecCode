import React from 'react';
import { motion } from 'framer-motion';
import ModuleCard from '@/components/ModuleCard';

const ModulesPage = ({ section, modules, onModuleClick, userProgress }) => {
  const sectionTitles = {
    python: 'Módulos Python',
    javascript: 'Módulos JavaScript',
    cybersecurity: 'Módulos de Cybersegurança'
  };

  const sectionDescriptions = {
    python: 'Aprenda Python desde o básico até conceitos avançados com exemplos práticos e projetos reais',
    javascript: 'Domine JavaScript moderno e suas tecnologias mais populares do frontend ao backend',
    cybersecurity: 'Especialize-se em segurança digital usando Python e JavaScript para ethical hacking e defesa'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          {sectionTitles[section]}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {sectionDescriptions[section]}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ModuleCard 
              module={module} 
              onClick={() => onModuleClick(module)}
              userProgress={userProgress}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ModulesPage;