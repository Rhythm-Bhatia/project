'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', level: 95, icon: Code },
  { name: 'UI/UX Design', level: 88, icon: Palette },
  { name: 'Backend Development', level: 85, icon: Zap },
  { name: 'Team Leadership', level: 90, icon: Users },
];

const interests = [
  'Machine Learning',
  'Data Analytics',
  'Java Development',
  'Spring Boot',
  'Business Intelligence',
  'Problem Solving',
  'Leadership',
  'Event Management',
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Computer Science Student & Developer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Currently pursuing B.Tech in Electronics and Computer Science at Vellore Institute of Technology, Chennai (CGPA: 8.21). 
              I specialize in Java development, Spring Boot, and data analytics with a strong foundation in problem-solving 
              (200+ LeetCode problems solved).
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My academic journey is complemented by hands-on experience in full-stack development, machine learning, 
              and business intelligence. I'm passionate about leveraging technology to solve real-world problems and 
              creating data-driven solutions that make an impact.
            </p>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Interests</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}