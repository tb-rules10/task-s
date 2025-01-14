/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Progress, IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";

const MainContent = ({
  selectedGuests,
  setSelectedGuests,
  selectedVenues,
  setSelectedVenues,
  step,
  setStep, // Get setStep from CardScreen
}) => {

  const navigate = useNavigate();

  const handleCards = () => {
    if (step > 1) {
      setStep(step - 1); // Decrease step
    } else {
      navigate("/"); // If it's step 1, navigate to home
    }
  };

  return (
    <motion.div
      className="w-full md:w-3/5 h-full bg-transparent overflow-auto no-scrollbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-between h-full text-black py-8">
        <div className="w-full px-4 space-y-4 flex flex-col items-start">
          <IconButton
            size="sm"
            className="rounded-lg bg-[#FEB219]"
            ripple="light"
            onClick={handleCards}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </IconButton>

          <Progress
            value={step === 1 ? 25 : 50}
            color="amber"
            className="bg-[#FEDE7C]"
            size="sm"
          />
        </div>

        <div className="flex flex-col items-center justify-between h-full text-black py-8">
          {step === 1 && (
            <Step1
              selectedGuests={selectedGuests}
              setSelectedGuests={setSelectedGuests}
              setStep={setStep}
            />
          )}

          {step === 2 && (
            <Step2
              selectedVenues={selectedVenues}
              setSelectedVenues={setSelectedVenues}
              setStep={setStep}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MainContent;
