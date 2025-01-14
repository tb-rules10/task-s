import { useState } from "react";
import Envelope from "../components/Envelope";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/bg.png";
import IntroScreen from "../components/IntroScreen";

const Home = () => {
  const [showIntroScreen, setShowIntroScreen] = useState(false);

  const handleTransition = () => {
    setShowIntroScreen(true);
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover flex flex-col bg-center overflow-hidden relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="mx-auto px-4 flex items-center justify-center min-h-[80vh]">
        
        {!showIntroScreen ? (
          <Envelope onTransition={handleTransition} />
        ) : (
          <IntroScreen />
        )}
      </div>
    </div>
  );
};

export default Home;

