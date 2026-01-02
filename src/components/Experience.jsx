import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section className="py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl font-bold text-gray-800 mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Опыт работы
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-4">
          {data.experience.map((job, index) => (
            <motion.div
              key={job.id}
              className="relative bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">
                    {job.position}
                  </h3>
                  <div className="flex items-center gap-1 text-blue-600 font-semibold text-sm">
                    <Briefcase size={14} />
                    <span>{job.company}</span>
                  </div>
                </div>
                
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
                  {job.duration}
                </span>
              </div>

              <div className="flex gap-3 text-xs text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{job.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{job.location}</span>
                </div>
              </div>

              <ul className="space-y-1 mb-3 text-sm">
                {job.description.slice(0, 3).map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-1 text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="text-blue-600 mt-1 text-xs">▪</span>
                    <span className="text-xs">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1">
                {job.stack.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
