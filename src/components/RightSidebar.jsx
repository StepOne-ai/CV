import { motion } from 'framer-motion';
import { TrendingUp, Code2, Zap, Users, Award, CheckCircle, Target } from 'lucide-react';

const RightSidebar = ({ data }) => {
  return (
    <div className="space-y-6">
        {/* Education */}
      <motion.div
        className="bg-white p-5 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Award className="text-blue-600" size={20} />
          Образование
        </h3>
        <div className="space-y-4">
          {data.education.map((edu) => (
            <div key={edu.id} className="border-l-4 border-blue-600 pl-3">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-sm text-gray-800">{edu.field}</h4>
                <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold">
                  {edu.year}
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-1">{edu.institution}</p>
              <p className="text-xs text-gray-500">{edu.degree}</p>
              {edu.note && (
                <p className="text-xs text-purple-600 italic mt-1">{edu.note}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">Сертификаты</h3>
        {data.certifications.map((cert, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="text-white" size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-gray-800">{cert.name}</h4>
              <p className="text-xs text-gray-600">{cert.subject}</p>
              <p className="text-xs text-orange-600 font-semibold">{cert.year}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RightSidebar;
