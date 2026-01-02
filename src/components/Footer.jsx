import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">Готов к новым вызовам!</h3>
            <p className="text-gray-400 text-sm">Открыт для интересных проектов и предложений</p>
          </div>
          
          <div className="flex gap-3">
            <motion.a
              href={data.social.email}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              Email
            </motion.a>
            
            <motion.a
              href={data.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={16} />
              Telegram
            </motion.a>
            
            <motion.a
              href={data.social.phone}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} />
              Позвонить
            </motion.a>
          </div>
        </motion.div>
        
        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-gray-500 text-xs">
            © {currentYear} {data.personal.name} • Москва
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
