import { Button } from '../ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useScroll } from '../../contexts/ScrollContext';

export function Home() {
  const { scrollToSection } = useScroll();

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white flex items-center justify-center px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm a passionate developer building amazing digital experiences. Explore my work, skills, and get in touch.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button onClick={() => scrollToSection('projects')}>
            <Button className="gap-2 px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
              View My Projects <ArrowRight size={20} />
            </Button>
          </button>
          <button onClick={() => scrollToSection('contact')}>
            <Button variant="outline" className="gap-2 px-8 py-6 text-lg border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-400/10">
              Contact Me
            </Button>
          </button>
        </div>

        <div className="flex gap-6 justify-center mb-12">
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Github size={32} />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Linkedin size={32} />
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Mail size={32} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg dark:hover:bg-slate-800 transition">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg dark:hover:bg-slate-800 transition">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
            <p className="text-gray-700 dark:text-gray-300">Years Experience</p>
          </div>
          <div className="bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-lg dark:hover:bg-slate-800 transition">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
            <p className="text-gray-700 dark:text-gray-300">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
