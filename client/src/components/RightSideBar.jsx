/* eslint-disable react/prop-types */
import Navbar from '../components/Navbar';
import { LightbulbIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import step1Image from '../assets/guestImage.png';
import step2Image from '../assets/venueImage.png';

const stepData = [
  {
    id: 1,
    text: "In receptions, expect about 35% of guests in the floating crowd, and ensure ample standing and mingling space.",
    image: step1Image,
    alt: "Guest Layout Illustration",
  },
  {
    id: 2,
    text: "People tend to choose airy outdoor venues like resorts for daytime weddings, and elegant indoor settings like convention halls for evening celebrations.",
    image: step2Image,
    alt: "Venue Layout Illustration",
  },
];

const RightSidebar = ({ step }) => {
  const currentStep = stepData.find((stepItem) => stepItem.id === step);

  return (
    <motion.div
      className="hidden md:block w-2/5 h-full bg-white rounded-l-3xl pb-20"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
    >
      <div className="flex flex-col pt-2 items-center justify-between h-full text-white">
        <Navbar />
        <div className="flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-[350px] md:h-[350px]"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(250, 244, 185, 0.8) 0%, rgba(250, 244, 185, 0.2) 100%)",
                padding: "2px",
                maskImage: "linear-gradient(to top, transparent 0%, black 100%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 100%)",
              }}
            >
              <div className="w-full h-full rounded-full bg-[#FAF4B9]" />
            </div>
            <div className="absolute inset-0 rounded-full bg-[#FAF4B9]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center translate-y-2">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 32, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-3"
              >
                <div className="bg-white rounded-full p-2 shadow-sm">
                  <LightbulbIcon className="w-4 h-4 text-amber-800" />
                </div>
              </motion.div>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 35, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-gray-600 text-sm mb-4 w-[75%]"
              >
                {currentStep?.text}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 35, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-44 md:w-52 translate-y-4"
              >
                <img
                  src={currentStep?.image}
                  alt={currentStep?.alt}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default RightSidebar;
