import { motion } from "framer-motion";
import cardImage from "../assets/Card.png";
import envelopeImage from "../assets/Envelope.png";

const Envelope = ({ onTransition }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 7 }}
    >
      <motion.img
        src={envelopeImage}
        alt="Envelope"
        className="w-64 h-64"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut",
        }}
      />

      <motion.img
        src={cardImage}
        alt="Card"
        className="absolute top-12 w-48"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: -50, opacity: 1 }}
        transition={{
          delay: 1,
          duration: 2,
          ease: "easeInOut",
        }}
        exit={{
          y: "-100vh",
          opacity: 0,
          transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 },
        }}
        onAnimationComplete={() => {
          onTransition();
        }}
      />
    </motion.div>
  );
};

export default Envelope;
