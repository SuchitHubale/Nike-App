import { motion } from 'framer-motion';
import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <motion.div 
      className="flex flex-col flex-1 w-full max-sm:w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.img 
        src={imgURL} 
        alt={name}
        className="w-[280px] h-[280px]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="flex justify-start mt-8 gap-2.5">
        <motion.img 
          src={star} 
          alt="rating star" 
          width={24}
          height={24}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        />
        <p className='text-xl leading-normal font-montserrat text-slate-gray'>(4.5)</p>
      </div>
      <h3 className='mt-2 text-2xl font-semibold leading-normal font-palanquin'>{name}</h3>
      <p className='mt-2 text-2xl font-semibold leading-normal font-montserrat text-coral-red'>{price}</p>
    </motion.div>
  );
};

export default PopularProductCard;