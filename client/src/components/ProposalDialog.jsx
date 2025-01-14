/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "../assets/logo.png";
import { Dialog, DialogHeader, DialogBody, DialogFooter, Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ProposalDialog = ({ open, handleOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "A valid email is required.";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "A valid 10-digit phone number is required.";
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
  
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        // console.log(responseData.user);
  
        localStorage.setItem("VITE_APP_USER", JSON.stringify({
          user: responseData.user
        }));
  
        navigate("/proposal");
  
      } else {
        const errorData = await response.json();
        console.log(errorData);
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("Network error, please try again later.");
    }
  
    handleOpen();
  };
  

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="md"
      className="rounded-lg"
    >
      <DialogHeader className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Get a free proposal from us!
        </h2>
      </DialogHeader>
      <DialogBody className="space-y-4">
        <Input
          label="Enter your name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          className="focus:border-[#FD5A90] focus:ring-[#FD5A90]"
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name}</p>
        )}
        <Input
          label="Enter your email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!errors.email}
          className="focus:border-[#FD5A90] focus:ring-[#FD5A90]"
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email}</p>
        )}
        <div className="flex space-x-2">
          <Input
            label="+91"
            type="text"
            className="w-16 focus:border-[#FD5A90] focus:ring-[#FD5A90]"
            disabled
          />
          <Input
            label="Enter phone number"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={!!errors.phone}
            className="flex-1 focus:border-[#FD5A90] focus:ring-[#FD5A90]"
          />
        </div>
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone}</p>
        )}
      </DialogBody>
      <DialogFooter className="flex flex-col items-center space-y-2">
        <Button
          fullWidth
          onClick={handleSubmit}
          className="bg-[#FD5A90] text-white hover:shadow-lg rounded-full px-6 py-2"
        >
          Submit
        </Button>
        <div className="flex justify-center items-center space-x-1 pt-2">
          <img src={Logo} alt="Logo" className="h-6 w-auto" />
          <span className="text-sm text-gray-500">
            The Wedding Company
          </span>
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default ProposalDialog;
