/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import venue1 from "../assets/venue1.png";
import venue2 from "../assets/venue2.png";
import venue3 from "../assets/venue3.png";
import venue4 from "../assets/venue4.png";
import venue5 from "../assets/venue5.png";
import venue6 from "../assets/venue6.png";


const venueOptions = [
  { id: "5-star", title: "5 Star Hotels", description: "High-end amenities and exceptional service", image: venue1 },
  { id: "resorts", title: "Resorts", description: "Picturesque settings with luxury guest accommodation", image: venue2 },
  { id: "convention", title: "Convention Hall", description: "Indoor Halls for Grand Weddings", image: venue3 },
  { id: "3-star", title: "3 Star Hotels", description: "Affordable venues with good service", image: venue4 },
  { id: "farmhouse", title: "Farm houses", description: "Green open spaces for affordable outdoor Weddings", image: venue5 },
  { id: "kalyan", title: "Kalyan Mantapas", description: "Indoor halls for traditional weddings", image: venue6 }
];

const Step2 = ({ selectedVenues, setSelectedVenues }) => {
  const buttonRef = useRef(null);

  const handleVenueSelect = (venueId) => {
    setSelectedVenues((prevSelected) => {
      if (prevSelected.includes(venueId)) {
        return prevSelected.filter((id) => id !== venueId);
      }
      return [...prevSelected, venueId];
    });
  };

  useEffect(() => {
    if (selectedVenues.length > 0 && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedVenues]);

  return (
    <div className="w-full max-w-2xl px-4 text-center">
      <div className="mb-4 md:mb-8 text-gray-600 text-sm md:text-base">Step 3/6</div>
      <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">What type of venues would you like?</h1>
      <p className="text-sm md:text-base text-gray-600 mb-6">Select all options that you like.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 pb-4 md:pb-8">
        {venueOptions.map((venue) => {
          const isSelected = selectedVenues.includes(venue.id);
          return (
            <button
              key={venue.id}
              onClick={() => handleVenueSelect(venue.id)}
              className={`
                relative p-2 md:p-4 rounded-xl border transition-all transform hover:scale-95 hover:bg-[#FEDE7C]
                ${isSelected 
                  ? 'bg-white border-[#FD5A90] shadow-2xl' 
                  : 'bg-white border-gray-300 hover:border-[#FEDE7C]'
                }
              `}
            >
              <div className="flex flex-col items-center space-y-1 md:space-y-2">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden mb-1 md:mb-2">
                  <img 
                    src={venue.image} 
                    alt={venue.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-black text-xs md:text-sm">{venue.title}</h3>
                <p className="text-[10px] md:text-xs text-gray-600 line-clamp-2">{venue.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {selectedVenues.length >= 1 && (
        <button
          ref={buttonRef}
          className="w-full md:w-[50%] mb-4 md:mb-8 rounded-full bg-[#FD5A90] text-white py-2 md:py-3 text-sm md:text-base hover:shadow-lg hover:shadow-[#FFE8A3] transition-all duration-300"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Step2;
