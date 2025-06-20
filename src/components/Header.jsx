import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Terminal, 
  Shield, 
  Home, 
  ArrowLeft,
  Zap,
  Trophy,
  Target,
  TrendingUp,
  Star,
  Sword,
  Eye,
  User,
  LogOut,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ activeSection, setActiveSection, onBackToModules, showBackButton, userProgress, user, onLogout }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navItems = [
    { id: 'home', label: 'Início', icon: <Home className="w-4 h-4" /> },
    { id: 'python', label: 'Python', icon: <Code className="w-4 h-4" /> },
    { id: 'javascript', label: 'JavaScript', icon: <Zap className="w-4 h-4" /> },
    { id: 'bash', label: 'BASH', icon: <Terminal className="w-4 h-4" /> },
    { id: 'redteam', label: 'Red Team', icon: <Sword className="w-4 h-4" /> },
    { id: 'blueteam', label: 'Blue Team', icon: <Eye className="w-4 h-4" /> },
    { id: 'challenges', label: 'Desafios', icon: <Target className="w-4 h-4" /> },
    { id: 'terminal', label: 'Terminal', icon: <Terminal className="w-4 h-4" /> },
    { id: 'progress', label: 'Progresso', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBackToModules}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            )}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                CodeMaster
              </span>
            </motion.div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 ${
                  activeSection === item.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* User Progress Display */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3 bg-card border border-border rounded-lg px-3 py-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Nível {userProgress.level}</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-1">
                <Trophy className="w-4 h-4 text-orange-500" />
                <span className="text-sm">{userProgress.totalXP} XP</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-green-500" />
                <span className="text-sm">{userProgress.streakDays} dias</span>
              </div>
            </div>

            {/* User Menu */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
              >
                {user?.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">{user?.name}</span>
                <ChevronDown className="w-3 h-3" />
              </Button>

              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50"
                >
                  <div className="px-3 py-2 border-b border-border">
                    <p className="text-sm font-medium">{user?.name}</p>
                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      setActiveSection('progress');
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-accent flex items-center space-x-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Meu Progresso</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowUserMenu(false);
                      onLogout();
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-accent flex items-center space-x-2 text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sair</span>
                  </button>
                </motion.div>
              )}
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => setActiveSection('progress')}
              >
                <TrendingUp className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
