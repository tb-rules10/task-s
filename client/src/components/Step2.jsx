/* eslint-disable react/prop-types */
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
  const handleVenueSelect = (venueId) => {
    setSelectedVenues((prevSelected) => {
      if (prevSelected.includes(venueId)) {
        return prevSelected.filter((id) => id !== venueId);
      }
      return [...prevSelected, venueId];
    });
  };

  return (
    <div className="w-full max-w-2xl text-center">
      <div className="mb-8 text-gray-600">Step 2/2</div>
      <h1 className="text-3xl font-bold mb-4">What type of venues would you like?</h1>
      <p className="text-gray-600 mb-4">Select all options that you like.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pb-8">
        {venueOptions.map((venue) => {
          const isSelected = selectedVenues.includes(venue.id);
          return (
            <button
              key={venue.id}
              onClick={() => handleVenueSelect(venue.id)}
              className={`
                relative p-4 rounded-xl border transition-all transform hover:scale-95 hover:bg-[#FEDE7C]
                ${isSelected 
                  ? 'bg-[#FEDE7C] border-[#FEDE7C] shadow-md' 
                  : 'bg-white border-gray-300 hover:border-[#FEDE7C]'
                }
              `}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 rounded-lg overflow-hidden mb-2">
                  <img 
                    src={venue.image} 
                    alt={venue.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-black text-sm">{venue.title}</h3>
                <p className="text-xs text-gray-600">{venue.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {selectedVenues.length >= 1 && (
        <button
          className="w-[50%] mb-8 rounded-full bg-[#FD5A90] text-white py-3 hover:shadow-lg hover:shadow-[#FFE8A3] transition-all duration-300"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Step2;