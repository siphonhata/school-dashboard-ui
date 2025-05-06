'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center">
            <Image
              src="/museums.jpg"
              alt="Logo"
              className="w-16 h-16 object-cover rounded-full"
            />
          </div>

        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold text-white">
            Welcome to School Management System
          </h1>
          <p className="text-white/80">
            Loading amazing things...
          </p>

          <div className="flex justify-center mt-6">
            <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default SplashScreen;
