import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { useScroll } from '../contexts/ScrollContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme, mounted } = useTheme();
  const { activeSection, scrollToSection } = useScroll();

  if (!mounted) return null;

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-md dark:shadow-lg dark:shadow-black/50 sticky top-0 z-50 transition-colors duration-300 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === link.id
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'text-slate-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:shadow-md"
              aria-label="Toggle theme"
              type="button"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 hover:shadow-md"
              aria-label="Toggle theme"
              type="button"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              {isOpen ? <X size={24} className="text-slate-900 dark:text-white" /> : <Menu size={24} className="text-slate-900 dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200 dark:border-slate-700 pt-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === link.id
                    ? 'bg-blue-600 dark:bg-blue-500 text-white'
                    : 'text-slate-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

