import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development team, architecting scalable React applications, and mentoring junior developers.',
    technologies: ['React', 'TypeScript', 'Redux', 'Next.js'],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed full-stack web applications, managed databases, and implemented payment systems.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 3,
    title: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2019 - 2020',
    description: 'Built responsive web interfaces and worked on backend APIs for various client projects.',
    technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL'],
  },
  {
    id: 4,
    title: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2018 - Present',
    description: 'Providing web development services to various clients, from startups to established businesses.',
    technologies: ['React', 'Vue.js', 'Node.js', 'Firebase'],
  },
];

export function Experience() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          My Experience
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
          A timeline of my professional journey and roles
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-start`}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden md:flex flex-1 justify-end pr-8">
                  <div className="relative">
                    {index % 2 === 0 ? (
                      <div className="text-right w-full"></div>
                    ) : (
                      <div className="text-left w-full"></div>
                    )}
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 hidden md:block mt-6"></div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition shadow-lg dark:shadow-xl border border-gray-100 dark:border-slate-700/50">
                    <div className="flex items-start gap-3 mb-3">
                      <Briefcase className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
