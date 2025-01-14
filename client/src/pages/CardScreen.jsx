import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MainContent from '../components/MainContent';
import RightSidebar from '../components/RightSideBar'; 

const CardScreen = () => {
  const navigate = useNavigate();
  const [selectedGuests, setSelectedGuests] = useState(null);
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [step, setStep] = useState(1); 

  return (
    <div className="flex h-screen w-full ">
      <MainContent
        selectedGuests={selectedGuests}
        setSelectedGuests={setSelectedGuests}
        selectedVenues={selectedVenues}
        setSelectedVenues={setSelectedVenues}
        step={step}
        setStep={setStep}
      />
      <RightSidebar step={step} />
    </div>
  );
};

export default CardScreen;
