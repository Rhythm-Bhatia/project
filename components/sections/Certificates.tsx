'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Microsoft Azure AI-900',
    issuer: 'Microsoft',
    date: '2024',
    description: 'Azure AI Fundamentals certification demonstrating knowledge of machine learning and artificial intelligence concepts on Microsoft Azure.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
    verifyUrl: '#',
    skills: ['Azure AI', 'Machine Learning', 'Artificial Intelligence', 'Cloud Computing'],
  },
  {
    id: 2,
    title: 'Full-Stack Java Development with Spring Boot & React',
    issuer: 'Udemy',
    date: '2024',
    description: 'Comprehensive course covering full-stack development using Java Spring Boot for backend and React for frontend development.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
    verifyUrl: '#',
    skills: ['Java', 'Spring Boot', 'React', 'Full-Stack Development', 'REST APIs'],
  },
];

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certificates" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Certificate Icon */}
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
                    <Award className="w-5 h-5 text-green-400" />
                  </div>
                </div>

                {/* Verify Link */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={cert.verifyUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                  <span className="text-blue-400 font-medium">{cert.issuer}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs border border-green-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}