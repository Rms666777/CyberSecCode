import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LessonSidebar from './LessonSidebar';
import LessonContent from './LessonContent';
import { generateLessons } from '@/data/lessons';

const LessonViewer = ({ module, selectedLesson, setSelectedLesson, userProgress, onCompleteLesson }) => {
  const [completedLessons, setCompletedLessons] = useState(new Set(userProgress.completedLessons));

  const lessons = generateLessons(module);
  const currentLesson = selectedLesson || lessons[0];
  const currentIndex = lessons.findIndex(l => l.id === currentLesson.id);

  const markAsCompleted = (lessonId) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
    onCompleteLesson(lessonId);
  };

  const navigateLesson = (direction) => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < lessons.length) {
      setSelectedLesson(lessons[newIndex]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-6"
    >
      <LessonSidebar
        module={module}
        lessons={lessons}
        currentLesson={currentLesson}
        completedLessons={completedLessons}
        setSelectedLesson={setSelectedLesson}
      />

      <LessonContent
        lesson={currentLesson}
        lessons={lessons}
        currentIndex={currentIndex}
        completedLessons={completedLessons}
        onMarkCompleted={markAsCompleted}
        onNavigate={navigateLesson}
      />
    </motion.div>
  );
};

export default LessonViewer;