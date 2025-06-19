import React from 'react';
import { CheckCircle, Circle, Star, Trophy } from 'lucide-react';

const LessonSidebar = ({ module, lessons, currentLesson, completedLessons, setSelectedLesson }) => {
  const completedCount = lessons.filter(lesson => completedLessons.has(lesson.id)).length;
  const progressPercentage = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="lg:col-span-1">
      <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-foreground">{module.title}</h2>
            <p className="text-sm text-muted-foreground">{module.lessons} lições</p>
            
            {/* Progress */}
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progresso</span>
                <span className="text-primary font-medium">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{completedCount} completas</span>
                <div className="flex items-center space-x-1">
                  <Trophy className="w-3 h-3 text-yellow-500" />
                  <span>+{completedCount * 100} XP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  currentLesson.id === lesson.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {completedLessons.has(lesson.id) ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground" />
                  )}
                  <div className="flex-1">
                    <div className="text-sm font-medium">{lesson.title}</div>
                    <div className="text-xs opacity-70">
                      Lição {lesson.id} • {lesson.difficulty}
                    </div>
                  </div>
                  {lesson.featured && (
                    <Star className="w-3 h-3 text-yellow-500" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonSidebar;