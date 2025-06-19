import React from 'react';
import LessonViewer from '@/components/lesson/LessonViewer';

const LessonPage = ({ module, selectedLesson, setSelectedLesson, userProgress, onCompleteLesson }) => {
  return (
    <LessonViewer 
      module={module}
      selectedLesson={selectedLesson}
      setSelectedLesson={setSelectedLesson}
      userProgress={userProgress}
      onCompleteLesson={onCompleteLesson}
    />
  );
};

export default LessonPage;