import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Header = ({ data }) => {
  return (
    <motion.header 
      className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-6 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <motion.img 
            src={data.personal.avatar} 
            alt={data.personal.name}
            className="w-50 h-40 rounded-full border-5 border-white shadow-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          
          <div className="flex-1">
            <motion.h1 
              className="text-3xl font-bold"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {data.personal.name}
            </motion.h1>
            <motion.h2 
              className="text-xl text-blue-100"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {data.personal.title}
            </motion.h2>
          </div>

          <motion.div
            className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-xs text-gray-600">Желаемая зарплата</div>
            <div className="text-2xl font-bold">{data.personal.salary}</div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
