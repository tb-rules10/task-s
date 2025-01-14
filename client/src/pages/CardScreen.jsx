import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CardScreen = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/guests');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 flex flex-col items-center justify-center p-4"
    >
      <motion.div 
        initial={{ rotateY: 180 }}
        animate={{ rotateY: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Your Wedding Card</h2>
        <p className="mb-4">Customize your wedding card here.</p>
        {/* Add card customization options here */}
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
        onClick={handleNext}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default CardScreen;

