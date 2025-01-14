import { useState, useEffect } from 'react';
import MainContent from '../components/MainContent';
import RightSidebar from '../components/RightSideBar';
import LoaderScreen from './LoaderScreen'; // Assuming you have the loader component here.

const CardScreen = () => {
  const [selectedGuests, setSelectedGuests] = useState(null);
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [step, setStep] = useState(0); // Start with step 0 for initial loading
  const [isLoading, setIsLoading] = useState(true); // Initial load state
  const [transitioning, setTransitioning] = useState(false); // For step transition loader

  // Handle initial load and loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // End the loading screen after 3 seconds
      setStep(1); // Move to step 1 after loading
    }, 3000); // 3 seconds for initial loading

    return () => clearTimeout(timer); // Clean up the timeout when the component unmounts
  }, []);

  // Handle step change with loader and transition
  const changeStep = (newStep) => {
    setTransitioning(true); // Start step transition loader
    setTimeout(() => {
      setStep(newStep); // Update step after loader
      setTransitioning(false); // End loader after 3 seconds
    }, 3000); // Duration of the loader screen
  };

  // If still loading or transitioning, show the loader screen
  if (isLoading || transitioning) {
    return <LoaderScreen step={step} />;
  }

  return (
    <div className="flex h-screen w-full">
      {/* Main Content */}
      <MainContent
        selectedGuests={selectedGuests}
        setSelectedGuests={setSelectedGuests}
        selectedVenues={selectedVenues}
        setSelectedVenues={setSelectedVenues}
        step={step}
        setStep={changeStep} // Pass changeStep function to MainContent
      />
      
      {/* Right Sidebar */}
      <RightSidebar step={step} />
    </div>
  );
};

export default CardScreen;
