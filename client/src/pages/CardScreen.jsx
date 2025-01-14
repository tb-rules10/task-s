import { useState, useEffect } from 'react';
import MainContent from '../components/MainContent';
import RightSidebar from '../components/RightSideBar';
import LoaderScreen from './LoaderScreen';

const CardScreen = () => {
  const [selectedGuests, setSelectedGuests] = useState(null);
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setStep(1);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const changeStep = (newStep) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(newStep);
      setTransitioning(false);
    }, 3000);
  };

  if (isLoading || transitioning) {
    return <LoaderScreen step={step} />;
  }

  return (
    <div className="flex h-screen w-full">
      <MainContent
        selectedGuests={selectedGuests}
        setSelectedGuests={setSelectedGuests}
        selectedVenues={selectedVenues}
        setSelectedVenues={setSelectedVenues}
        step={step}
        setStep={changeStep}
      />
      <RightSidebar step={step} />
    </div>
  );
};

export default CardScreen;
