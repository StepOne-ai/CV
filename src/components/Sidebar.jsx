import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Languages } from 'lucide-react';

const SideBar = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Contact Info */}
      <motion.div
        className="bg-white p-5 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Mail className="text-blue-600" size={20} />
          Контакты
        </h3>
        <div className="space-y-3 text-sm">
          <a href={data.social.phone} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
            <Phone size={16} className="text-blue-600" />
            <span>{data.personal.phone}</span>
          </a>
          <a href={data.social.email} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
            <Mail size={16} className="text-blue-600" />
            <span className="break-all">{data.personal.email}</span>
          </a>
          <a href={data.social.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition">
            <MessageCircle size={16} className="text-blue-600" />
            <span>{data.personal.telegram}</span>
          </a>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={16} className="text-blue-600" />
            <span>{data.personal.location}</span>
          </div>
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        className="bg-white p-5 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Languages className="text-blue-600" size={20} />
          Языки
        </h3>
        <div className="space-y-3">
          {data.languages.map((lang, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-gray-800">{lang.name}</span>
                <span className="text-xs text-gray-600">{lang.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="bg-white p-5 rounded-xl shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-bold text-gray-800 mb-4">Навыки</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Языки программирования</h4>
            <div className="flex flex-wrap gap-1">
              {data.skills.languages.map((skill, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Backend</h4>
            <div className="flex flex-wrap gap-1">
              {data.skills.backend.map((skill, i) => (
                <span key={i} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Базы данных</h4>
            <div className="flex flex-wrap gap-1">
              {data.skills.databases.map((skill, i) => (
                <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Инструменты</h4>
            <div className="flex flex-wrap gap-1">
              {data.skills.tools.map((skill, i) => (
                <span key={i} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Методологии</h4>
            <div className="flex flex-wrap gap-1">
              {data.skills.methodologies.map((skill, i) => (
                <span key={i} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideBar;
