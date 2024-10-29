'use client';

import { motion } from 'framer-motion';

const MainContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          <center>Welcome to the School Management System</center>
        </h1>
        {/* Add your main content here */}
      </div>
    </motion.div>
  );
};
export default MainContent;