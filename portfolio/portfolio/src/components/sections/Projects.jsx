import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js. Includes product catalog, shopping cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://via.placeholder.com/400x250',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates. Features include task creation, assignments, and progress tracking.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
    image: 'https://via.placeholder.com/400x250',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills. Built with modern web technologies for optimal performance.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://via.placeholder.com/400x250',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'A real-time weather application with location search and detailed forecasts. Integrates with public weather APIs.',
    tags: ['React', 'API Integration', 'Charts.js', 'Geolocation'],
    image: 'https://via.placeholder.com/400x250',
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management. Display real-time metrics and engagement data across platforms.',
    tags: ['React', 'Redux', 'D3.js', 'Material-UI'],
    image: 'https://via.placeholder.com/400x250',
    github: '#',
    live: '#',
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'A real-time chat application with message history, user authentication, and notification system.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Authentication'],
    image: 'https://via.placeholder.com/400x250',
    github: '#',
    live: '#',
  },
];

export function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
          Explore a selection of my recent work and side projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800/50 rounded-lg overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition duration-300 shadow-lg dark:shadow-xl border border-gray-100 dark:border-slate-700/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="flex-1">
                    <Button variant="outline" className="w-full gap-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-400/10">
                      <Github size={18} /> Code
                    </Button>
                  </a>
                  <a href={project.live} className="flex-1">
                    <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
                      <ExternalLink size={18} /> Live
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
