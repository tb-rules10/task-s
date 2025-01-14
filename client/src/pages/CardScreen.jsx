import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Progress, IconButton } from "@material-tailwind/react";
import Navbar from "../components/Navbar";
import { LightbulbIcon } from "lucide-react";
import guestImage from "../assets/guestImage.png";

const CardScreen = () => {
  const navigate = useNavigate();
  const [selectedGuests, setSelectedGuests] = useState(null);

  const guestOptions = [
    "< 100",
    "100 - 250",
    "250 - 500",
    "500 - 1000",
    ">1000",
  ];

  return (
    <div className="flex h-screen w-full bg-[]">
      <motion.div
        className="w-full md:w-3/5 h-full bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-between h-full text-black py-8">
          <div className="w-full px-4 space-y-4 flex flex-col items-start">
            <IconButton
              size="md"
              className="rounded-lg bg-[#FEB219]"
              ripple="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </IconButton>

            <Progress value={50} color="amber" className="bg-[#FEDE7C]" />
          </div>
          <div>
            <div className="flex items-center justify-center p-4">
              <div className="w-full max-w-md text-center">
                <div className="mb-8 text-gray-600">Step 1/6</div>

                <h1 className="text-3xl font-bold mb-4">
                  How many guests
                  <br />
                  are you expecting?
                </h1>

                <p className="text-gray-600 mb-8">
                  Please choose the number of people attending your biggest
                  function
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {guestOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedGuests(option)}
                      className={`
                px-6 py-2 rounded-full border transition-colors
                ${
                  selectedGuests === option
                    ? "bg-[#D4B88C] text-white border-[#D4B88C]"
                    : "bg-white border-gray-300 hover:border-[#D4B88C]"
                }
              `}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </motion.div>

      <motion.div
        className="hidden md:block w-2/5 h-full bg-white rounded-l-3xl pb-10"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      >
        <div className="flex flex-col pt-4 items-center justify-between h-full text-white">
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
                  maskImage:
                    "linear-gradient(to top, transparent 0%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, black 100%)",
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
                  In receptions, expect about 35% of guests in the floating
                  crowd, and ensure ample standing and mingling space.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 35, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="w-44 md:w-52 translate-y-4"
                >
                  <img
                    src={guestImage}
                    alt="Reception Layout Illustration"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div></div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardScreen;
