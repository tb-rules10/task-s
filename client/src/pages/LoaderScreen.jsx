import { motion } from 'framer-motion';
import { SearchIcon, HeartIcon, StarIcon } from 'lucide-react';

const stepConfig = {
  0: {
    icon: <SearchIcon className="text-black w-12 h-12" />,
    text: 'Great! Let our planners craft the perfect setting for your magical day.',
  },
  1: {
    icon: <HeartIcon className="text-black w-12 h-12" />,
    text: 'Your perfect day is just a few steps away!',
  },
  2: {
    icon: <StarIcon className="text-black w-12 h-12" />,
    text: 'We’re ready to make your dreams come true!',
  },
};

export default function LoaderScreen({ step }) {
  const { icon, text } = stepConfig[step] || stepConfig[1];

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-b from-[#FFF8E1] to-[#FEDE7C] flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0.3, 0.7],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-96 h-96 bg-white rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.5, 0.7],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
          className="absolute w-88 h-88 bg-white rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="absolute w-80 h-80 bg-white rounded-full"
        />

        <div className="absolute w-80 h-80 bg-transparent text-black rounded-full flex flex-col items-center justify-center text-center p-8">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="mb-6"
          >
            {icon}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-black text-xs font-semibold"
          >
            {text}
          </motion.h2>
        </div>
      </motion.div>
    </motion.div>
  );
}
