import { motion } from "framer-motion";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <motion.img
        src={imgURL}
        alt="customer"
        className="object-cover rounded-full w-[120px] h-[120px]"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.p 
        className="max-w-sm mt-6 text-center info-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {feedback}
      </motion.p>
      <motion.div 
        className="flex items-center justify-center mt-3 gap-2.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </motion.div>
      <motion.h3 
        className="mt-1 text-3xl font-bold text-center font-palanquin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {customerName}
      </motion.h3>
    </motion.div>
  );
};

export default ReviewCard;