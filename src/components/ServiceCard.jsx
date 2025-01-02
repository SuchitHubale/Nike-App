import { motion } from "framer-motion";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <motion.div 
      className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <motion.div 
        className='flex items-center justify-center rounded-full w-11 h-11 bg-coral-red'
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img 
          src={imgURL} 
          alt={label} 
          width={24} 
          height={24}
        />
      </motion.div>
      <motion.h3 
        className='mt-5 text-3xl font-bold leading-normal font-palanquin'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.h3>
      <motion.p 
        className='mt-3 text-lg leading-normal break-words font-montserrat text-slate-gray'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {subtext}
      </motion.p>
    </motion.div>
  );
};

export default ServiceCard;