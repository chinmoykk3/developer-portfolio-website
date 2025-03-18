'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    position: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2021 - Present',
    description: 'Lead the frontend development team in building responsive and accessible web applications using React and Next.js. Implemented modern frontend practices and improved performance by 40%.',
    responsibilities: [
      'Architected and developed scalable frontend solutions',
      'Mentored junior developers and conducted code reviews',
      'Collaborated with design and backend teams to deliver high-quality products',
      'Introduced automated testing, improving code coverage by 65%'
    ]
  },
  {
    position: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    period: '2018 - 2021',
    description: 'Developed and maintained multiple client-facing web applications. Worked closely with UX/UI designers to implement responsive designs.',
    responsibilities: [
      'Built interactive user interfaces using React and Redux',
      'Implemented responsive designs ensuring cross-browser compatibility',
      'Optimized application performance and load times',
      'Participated in agile development cycles and sprint planning'
    ]
  },
  {
    position: 'Web Developer',
    company: 'Creative Web Agency',
    period: '2015 - 2018',
    description: 'Created websites and web applications for various clients across multiple industries. Focused on creating engaging and accessible user experiences.',
    responsibilities: [
      'Developed responsive websites using HTML, CSS, and JavaScript',
      'Built custom WordPress themes and plugins',
      'Collaborated with designers to implement pixel-perfect designs',
      'Managed project timelines and client communications'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {exp.description}
                </p>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 