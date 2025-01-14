/* eslint-disable react/prop-types */

const guestOptions = [
    "< 100",
    "100 - 250",
    "250 - 500",
    "500 - 1000",
    ">1000",
  ];

const Step1 = ({ selectedGuests, setSelectedGuests, setStep }) => {

  const handleSelectGuest = (option) => {
    setSelectedGuests(option); 
    setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 text-gray-600">Step 1/6</div>

        <h1 className="text-3xl font-bold mb-4">
          How many guests
          <br />
          are you expecting?
        </h1>

        <p className="text-gray-600 mb-8">
          Please choose the number of people attending your biggest function
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {guestOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleSelectGuest(option)} // Trigger the handleSelectGuest function
              className={`px-6 py-2 rounded-full border transition-colors
                ${selectedGuests === option
                  ? "bg-[#D4B88C] text-white border-[#D4B88C]"
                  : "bg-white border-gray-300 hover:border-[#D4B88C]"}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1;
