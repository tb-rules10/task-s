import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GuestScreen = () => {
  const [guestCount, setGuestCount] = useState(50);
  const navigate = useNavigate();

  const handleNext = () => {
    // TODO: Save guest count to backend
    navigate('/loader');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-green-400 to-blue-500 flex flex-col items-center justify-center p-4"
    >
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Select Guest Count</h2>
        <input
          type="range"
          min="10"
          max="500"
          value={guestCount}
          onChange={(e) => setGuestCount(parseInt(e.target.value))}
          className="w-full mb-4"
        />
        <p className="text-center text-xl font-bold">{guestCount} Guests</p>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        onClick={handleNext}
      >
        Next
      </motion.button>
    </motion.div>
  );
};

export default GuestScreen;

