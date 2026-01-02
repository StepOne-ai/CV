import { motion } from 'framer-motion';
import { Target, Heart } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Обо мне
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {/* About */}
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="text-blue-600" size={18} />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Профессионал</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {data.about.ru}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
