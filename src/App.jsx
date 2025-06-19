import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import HomePage from '@/components/pages/HomePage';
import ModulesPage from '@/components/pages/ModulesPage';
import TerminalPage from '@/components/pages/TerminalPage';
import LessonPage from '@/components/pages/LessonPage';
import ChallengesPage from '@/components/pages/ChallengesPage';
import ProgressPage from '@/components/pages/ProgressPage';
import { moduleData } from '@/data/modules';
import { useLocalStorage } from '@/hooks/useLocalStorage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [userProgress, setUserProgress] = useLocalStorage('codemaster-progress', {
    completedLessons: [],
    completedChallenges: [],
    streakDays: 0,
    totalXP: 0,
    level: 1,
    achievements: [],
    lastActiveDate: null
  });

  // Update streak and daily activity
  useEffect(() => {
    const today = new Date().toDateString();
    const lastActive = userProgress.lastActiveDate;
    
    if (lastActive !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastActive === yesterday.toDateString()) {
        // Continue streak
        setUserProgress(prev => ({
          ...prev,
          streakDays: prev.streakDays + 1,
          lastActiveDate: today
        }));
      } else if (lastActive !== today) {
        // Reset streak if more than 1 day gap
        setUserProgress(prev => ({
          ...prev,
          streakDays: 1,
          lastActiveDate: today
        }));
      }
    }
  }, []);

  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setSelectedLesson(null);
    setActiveSection('lesson');
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    setSelectedLesson(null);
    setActiveSection('home');
  };

  const addXP = (amount) => {
    setUserProgress(prev => {
      const newXP = prev.totalXP + amount;
      const newLevel = Math.floor(newXP / 1000) + 1;
      
      return {
        ...prev,
        totalXP: newXP,
        level: newLevel
      };
    });
  };

  const completeLesson = (lessonId) => {
    setUserProgress(prev => ({
      ...prev,
      completedLessons: [...new Set([...prev.completedLessons, lessonId])]
    }));
    addXP(100);
  };

  const completeChallenge = (challengeId) => {
    setUserProgress(prev => ({
      ...prev,
      completedChallenges: [...new Set([...prev.completedChallenges, challengeId])]
    }));
    addXP(250);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onBackToModules={handleBackToModules}
        showBackButton={selectedModule !== null}
        userProgress={userProgress}
      />
      
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage 
                setActiveSection={setActiveSection}
                userProgress={userProgress}
              />
            </motion.div>
          )}

          {(activeSection === 'python' || activeSection === 'javascript' || activeSection === 'bash' || activeSection === 'redteam' || activeSection === 'blueteam') && (
            <motion.div
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ModulesPage 
                section={activeSection}
                modules={moduleData[activeSection]}
                onModuleClick={handleModuleClick}
                userProgress={userProgress}
              />
            </motion.div>
          )}

          {activeSection === 'terminal' && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TerminalPage />
            </motion.div>
          )}

          {activeSection === 'challenges' && (
            <motion.div
              key="challenges"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChallengesPage 
                userProgress={userProgress}
                onCompleteChallenge={completeChallenge}
              />
            </motion.div>
          )}

          {activeSection === 'progress' && (
            <motion.div
              key="progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ProgressPage 
                userProgress={userProgress}
                moduleData={moduleData}
              />
            </motion.div>
          )}

          {activeSection === 'lesson' && selectedModule && (
            <motion.div
              key="lesson"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LessonPage 
                module={selectedModule}
                selectedLesson={selectedLesson}
                setSelectedLesson={setSelectedLesson}
                userProgress={userProgress}
                onCompleteLesson={completeLesson}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Toaster />
    </div>
  );
}

export default App;
