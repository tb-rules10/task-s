/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import displayImage from "../assets/home-img.png";
import preIcon from "../assets/pre-icon.png";
import { Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const IntroScreen = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 25 }}
      className="w-full flex flex-col items-center justify-center py-8"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center md:justify-between items-center space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="h-auto max-h-[60vh] w-auto object-contain"
            src={displayImage}
            alt="Display"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start space-y-6 w-full md:w-1/2 px-4 md:px-8 md:py-0 py-4">
          <h2 className="text-2xl md:text-3xl text-[#4B483E] text-center md:text-left font-semibold">
            Let our expert planners craft your special day
          </h2>
          <InfoBox
            title="Unlock best venues, decors & more"
            description="Tell us about your dream day & get a perfect proposal in your budget for FREE"
          />
          <InfoBox
            title="Unlock best venues, decors & more"
            description="Tell us about your dream day & get a perfect proposal in your budget for FREE"
          />
          <Button
            fullWidth
            onClick={() => navigate('/proposal')}
            className="rounded-full bg-[#FD5A90] text-white hover:shadow-lg hover:shadow-[#FFE8A3] transition-all duration-300"
          >
            Get My Free Proposal
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const InfoBox = ({ title, description }) => (
  <div className="w-full bg-white rounded-2xl p-4 space-y-2 shadow-md">
    <div className="flex items-center">
      <img className="h-4 w-4 mr-2" src={preIcon} alt="Icon" />
      <p className="text-sm md:text-base font-medium">{title}</p>
    </div>
    <p className="text-[#B4B4B4] text-xs md:text-sm">{description}</p>
  </div>
);

export default IntroScreen;

