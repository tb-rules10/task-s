import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoaderScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/venues');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-yellow-400 to-orange-500 flex flex-col items-center justify-center p-4"
    >
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-white border-t-transparent rounded-full"
      />
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-white text-xl font-bold"
      >
        Loading your perfect venues...
      </motion.p>
    </motion.div>
  );
};

export default LoaderScreen;

