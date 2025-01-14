import React, { useState } from 'react';
import { motion } from 'framer-motion';

const venues = [
  { id: 1, name: 'Beachfront Resort', image: 'beach.jpg' },
  { id: 2, name: 'Mountain Lodge', image: 'mountain.jpg' },
  { id: 3, name: 'City Skyline', image: 'city.jpg' },
  { id: 4, name: 'Rustic Barn', image: 'barn.jpg' },
];

const VenuesScreen = () => {
  const [selectedVenues, setSelectedVenues] = useState([]);

  const toggleVenue = (id) => {
    setSelectedVenues(prev => 
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    // TODO: Send selected venues to backend
    console.log('Selected venues:', selectedVenues);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-pink-400 to-red-500 flex flex-col items-center justify-center p-4"
    >
      <h2 className="text-3xl font-bold text-white mb-8">Select Your Venues</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {venues.map(venue => (
          <motion.div
            key={venue.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-white rounded-lg p-4 cursor-pointer ${
              selectedVenues.includes(venue.id) ? 'border-4 border-blue-500' : ''
            }`}
            onClick={() => toggleVenue(venue.id)}
          >
            <img src={venue.image} alt={venue.name} className="w-full h-32 object-cover rounded mb-2" />
            <p className="text-center font-bold">{venue.name}</p>
          </motion.div>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        onClick={handleSubmit}
      >
        Submit
      </motion.button>
    </motion.div>
  );
};

export default VenuesScreen;

