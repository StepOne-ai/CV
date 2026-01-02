import { motion } from 'framer-motion';
import { Code, Database, Wrench, Layers } from 'lucide-react';

const Skills = ({ data }) => {
  const skillCategories = [
    { 
      name: "Языки", 
      skills: data.skills.languages, 
      icon: Code,
      color: "blue"
    },
    { 
      name: "Backend", 
      skills: data.skills.backend, 
      icon: Layers,
      color: "purple"
    },
    { 
      name: "БД", 
      skills: data.skills.databases, 
      icon: Database,
      color: "green"
    },
    { 
      name: "Инструменты", 
      skills: data.skills.tools, 
      icon: Wrench,
      color: "orange"
    },
    { 
      name: "Frontend", 
      skills: data.skills.frontend, 
      icon: Code,
      color: "pink"
    },
    { 
      name: "Методологии", 
      skills: data.skills.methodologies, 
      icon: Layers,
      color: "indigo"
    }
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600",
    pink: "from-pink-500 to-pink-600",
    indigo: "from-indigo-500 to-indigo-600"
  };

  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl font-bold text-gray-800 mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Навыки
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 bg-gradient-to-br ${colorClasses[category.color]} rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white" size={16} />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs hover:bg-gray-200 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Language Proficiency */}
        <motion.div 
          className="grid md:grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {data.languages.map((lang, index) => (
            <motion.div
              key={index}
              className="bg-white p-3 rounded-lg shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-800">{lang.name}</span>
                <span className="text-xs text-gray-600">{lang.level}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
