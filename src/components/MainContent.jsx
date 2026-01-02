import { motion } from 'framer-motion';
import { Target, Briefcase, Calendar, MapPin } from 'lucide-react';

const MainContent = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* About Section */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="text-blue-600" size={24} />
          Обо мне
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          {data.about.ru}
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
          <h3 className="font-bold text-gray-800 mb-2">🎯 Моя цель:</h3>
          <p className="text-gray-700 text-sm">
            {data.about.goals}
          </p>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Briefcase className="text-blue-600" size={24} />
          Опыт работы
        </h2>

        <div className="space-y-6">
          {data.experience.map((job, index) => (
            <motion.div
              key={job.id}
              className="relative pl-8 pb-6 border-l-2 border-blue-200 last:border-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-lg hover:shadow-md transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{job.position}</h3>
                    <p className="text-blue-600 font-semibold">{job.company}</p>
                  </div>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    {job.duration}
                  </span>
                </div>

                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-blue-600 font-bold mt-1">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
