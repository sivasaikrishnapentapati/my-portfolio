const skills = {
  frontend: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript', 'Next.js'],
  backend: ['Node.js', 'Python', 'Express.js', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  tools: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma', 'VS Code', 'Webpack', 'Vite'],
  soft: ['Problem Solving', 'Communication', 'Team Collaboration', 'Project Management', 'Leadership', 'Adaptability'],
};

export function Skills() {
  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          My Skills
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
          Here are the technologies and skills I've developed throughout my career
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white dark:bg-slate-800/50 rounded-lg shadow-lg dark:shadow-xl p-8 transition-colors duration-300 border border-gray-100 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 text-white rounded-full text-sm font-semibold hover:shadow-lg transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-lg p-8 text-white shadow-lg dark:shadow-xl transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-4">Proficiency Levels</h2>
          <div className="space-y-6">
            {[
              { skill: 'Frontend Development', level: 95 },
              { skill: 'Backend Development', level: 85 },
              { skill: 'Full-Stack Development', level: 90 },
              { skill: 'UI/UX Design', level: 75 },
              { skill: 'DevOps & Deployment', level: 80 },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
