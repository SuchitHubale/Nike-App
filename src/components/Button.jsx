import { motion } from 'framer-motion';

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <motion.button 
      className={`flex items-center justify-center gap-2 py-4 text-lg leading-none border px-7 font-montserrat
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : 'bg-coral-red border-coral-red text-white'
        } rounded-full ${fullWidth && 'w-full'}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {label}
      {iconURL && (
        <motion.img
          src={iconURL}
          alt="arrow right icon"
          className="w-5 h-5 ml-2 rounded-full"
          animate={{ x: [0, 5, 0] }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.button>
  );
};

export default Button;