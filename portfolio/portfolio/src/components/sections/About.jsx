export function About() {
  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-lg h-80 flex items-center justify-center">
              <img 
                src="https://via.placeholder.com/300" 
                alt="Profile" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly web applications. 
              With 5+ years of experience in the industry, I've had the opportunity to work with diverse teams and cutting-edge technologies.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My journey in tech started with a curiosity about how things work on the web. Over the years, I've grown to master 
              various frameworks, languages, and tools, always staying updated with the latest industry trends.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge with the community through blog posts and mentoring.
            </p>

            <div className="bg-blue-50 dark:bg-slate-800/50 border-l-4 border-blue-600 dark:border-blue-400 p-6 rounded">
              <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">My Philosophy</h3>
              <p className="text-gray-700 dark:text-gray-300">
                "Write clean code, solve complex problems, and always put the user first. 
                Technology should serve people, not the other way around."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800/50 rounded-lg shadow-lg dark:shadow-xl p-8 transition-colors duration-300 border border-gray-100 dark:border-slate-700/50">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Location</h3>
              <p className="text-gray-700 dark:text-gray-300">San Francisco, California</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Experience Level</h3>
              <p className="text-gray-700 dark:text-gray-300">Senior Developer</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Specialization</h3>
              <p className="text-gray-700 dark:text-gray-300">Full-Stack Web Development</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 text-blue-600 dark:text-blue-400">Available For</h3>
              <p className="text-gray-700 dark:text-gray-300">Freelance & Full-Time Roles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
