'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const skillCategories = {
  'Programming Languages': [
    { name: 'Java', level: 95 },
    { name: 'Python', level: 88 },
    { name: 'C++', level: 85 },
    { name: 'C', level: 80 },
    { name: 'SQL', level: 90 },
    { name: 'HTML', level: 85 },
  ],
  'Frameworks & Tools': [
    { name: 'Spring Boot', level: 90 },
    { name: 'Docker', level: 85 },
    { name: 'Kafka', level: 80 },
    { name: 'AWS', level: 82 },
    { name: 'Power BI', level: 88 },
    { name: 'VS Code', level: 95 },
  ],
  'Data & Analytics': [
    { name: 'Power BI', level: 90 },
    { name: 'DAX', level: 85 },
    { name: 'SQL', level: 90 },
    { name: 'Data Visualization', level: 88 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Forecasting', level: 82 },
  ],
  'Soft Skills': [
    { name: 'Leadership', level: 92 },
    { name: 'Communication', level: 90 },
    { name: 'Critical Thinking', level: 88 },
    { name: 'Teamwork', level: 95 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Adaptability', level: 90 },
  ],
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('Programming Languages');

  return (
    <section id="skills" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {Object.keys(skillCategories).map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left p-4 rounded-xl transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                }`}
              >
                <h3 className="font-semibold text-lg">{category}</h3>
                <p className="text-sm opacity-70">
                  {skillCategories[category as keyof typeof skillCategories].length} skills
                </p>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
            >
              {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{ x: ['0%', '100%', '0%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}