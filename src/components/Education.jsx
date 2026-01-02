import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl font-bold text-gray-800 mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Образование
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {data.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={16} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-800 mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-blue-600 font-semibold text-xs mb-1">{edu.field}</p>
                  <p className="text-gray-600 text-xs mb-1">{edu.degree}</p>
                  {edu.note && (
                    <p className="text-purple-600 text-xs italic mb-1">{edu.note}</p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-xs">{edu.location}</span>
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-1 gap-3">
            {data.certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg shadow-md flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-bold text-gray-800">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">{cert.issuer} • {cert.subject}</p>
                </div>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
