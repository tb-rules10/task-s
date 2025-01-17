import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="bg-transparent p-4 mx-auto flex flex-col items-center">
      <div className="mb-2 cursor-pointer" onClick={handleNavigation}>
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </div>
      <h1 className="text-sm md:text-base text-[#D1C4A1] font-medium cursor-pointer" onClick={handleNavigation}>
        THE WEDDING COMPANY
      </h1>
    </div>
  );
};

export default Navbar;
