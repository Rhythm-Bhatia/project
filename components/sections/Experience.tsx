'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Vellore Institute of Technology',
    position: 'B.Tech in Electronics and Computer Science',
    duration: '09/2022 - Present',
    location: 'Chennai, India',
    description: 'Currently pursuing Bachelor of Technology with a CGPA of 8.21. Specializing in computer science fundamentals, data structures, algorithms, and software development.',
    achievements: [
      'Maintaining CGPA of 8.21 throughout academic journey',
      'Solved 200+ problems on LeetCode demonstrating strong problem-solving skills',
      'Completed projects in Java development, machine learning, and data analytics',
      'Active participation in technical events and coding competitions',
    ],
    technologies: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms', 'Machine Learning'],
    logo: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 2,
    company: 'Technovit \'23 - VIT Chennai',
    position: 'Event Coordinator',
    duration: '2023',
    location: 'Chennai, India',
    description: 'Led a volunteer team to manage key technical events during the International Technical Fest, ensuring smooth execution and high engagement.',
    achievements: [
      'Successfully coordinated multiple technical events with record participation',
      'Led and managed a diverse team of volunteers effectively',
      'Demonstrated strong leadership and problem-solving under pressure',
      'Contributed to the overall success of the international technical festival',
    ],
    technologies: ['Leadership', 'Event Management', 'Team Coordination', 'Project Management'],
    logo: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    id: 3,
    company: 'Jain Public School',
    position: 'Higher Secondary Education',
    duration: '07/2021 - 07/2022',
    location: 'Ratlam, India',
    description: 'Completed Higher Secondary Education with 92.4% marks, demonstrating strong academic foundation and analytical skills.',
    achievements: [
      'Achieved 92.4% marks in Higher Secondary Education',
      'Strong foundation in Mathematics and Science subjects',
      'Active participation in extracurricular activities and competitions',
      'Developed critical thinking and analytical problem-solving skills',
    ],
    technologies: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
    logo: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900" />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </div>

                  <div className="flex items-center gap-6 mb-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  <motion.div
                    initial={false}
                    animate={{ height: expandedId === exp.id ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start gap-2">
                              <span className="text-green-400 mt-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}