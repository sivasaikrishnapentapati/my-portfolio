import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    period: '2015 - 2019',
    details: 'Graduated with Honors. Specialized in Web Development and Software Engineering.',
    achievements: ['Dean\'s List', 'Web Development Prize', 'Hackathon Winner'],
  },
  {
    id: 2,
    degree: 'Full Stack Web Development Bootcamp',
    school: 'Code Academy',
    period: '2018',
    details: 'Intensive 12-week bootcamp focused on modern web development practices and technologies.',
    achievements: ['Capstone Project Award', 'Perfect Attendance', 'Job Placement'],
  },
  {
    id: 3,
    degree: 'AWS Certified Solutions Architect',
    school: 'Amazon Web Services',
    period: '2021',
    details: 'Professional certification demonstrating expertise in AWS cloud services and architecture.',
    achievements: ['Cloud Computing Expert', 'Infrastructure Design', 'Security Best Practices'],
  },
  {
    id: 4,
    degree: 'Google UX Design Certificate',
    school: 'Google Career Certificates',
    period: '2022',
    details: 'Comprehensive program covering user research, wireframing, and design principles.',
    achievements: ['Design Thinking', 'User Testing', 'Portfolio Project'],
  },
];

export function Education() {
  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          My Education
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
          Continuous learning and professional development
        </p>

        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-slate-800/50 rounded-lg shadow-lg dark:shadow-xl p-8 hover:shadow-xl dark:hover:shadow-2xl transition border border-gray-100 dark:border-slate-700/50"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 p-3 rounded-lg flex-shrink-0">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{edu.school}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                <Calendar size={18} />
                <span>{edu.period}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">{edu.details}</p>

              <div className="bg-blue-50 dark:bg-slate-800/50 rounded-lg p-4 border border-blue-100 dark:border-slate-700/50">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-blue-600 dark:text-blue-400" size={20} />
                  <h4 className="font-bold text-slate-900 dark:text-white">Key Achievements</h4>
                </div>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
