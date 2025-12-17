import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Laptop, ChevronRight } from 'lucide-react';
import { useReading } from '../context/ReadingContext';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Dashboard: React.FC = () => {
  const { moduleData } = useReading();

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-2"
          >
            {moduleData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-600 font-light"
          >
            {moduleData.subtitle}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-500 mt-2"
          >
            {moduleData.description}
          </motion.p>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Vocab Card */}
          <motion.div variants={itemVariants}>
            <Link to="/reading/vocab" className="group block h-full">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full flex flex-col cursor-pointer"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pre-Teach Vocabulary</h3>
                <p className="text-gray-600 flex-grow">
                  Master {moduleData.vocabSection.length} key academic terms found in the test.
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                  Start Lesson <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Grammar Card */}
          <motion.div variants={itemVariants}>
            <Link to="/reading/grammar" className="group block h-full">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full flex flex-col cursor-pointer"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Grammar Focus</h3>
                <p className="text-gray-600 flex-grow">
                  Learn <strong>{moduleData.grammarSection.topic}</strong> to understand complex sentences.
                </p>
                <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:translate-x-1 transition-transform">
                  Start Lesson <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Test Card */}
          <motion.div variants={itemVariants}>
            <Link to="/reading/test" className="group block h-full">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 h-full flex flex-col cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 transform transition-transform group-hover:scale-150 duration-700"></div>
                <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 relative z-10">Start Mock Test</h3>
                <p className="text-gray-300 flex-grow relative z-10">
                  Full 60-minute IELTS Computer-Delivered simulation. 40 Questions.
                </p>
                <div className="mt-4 flex items-center text-white font-medium relative z-10 group-hover:translate-x-1 transition-transform">
                  Launch Simulator <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;