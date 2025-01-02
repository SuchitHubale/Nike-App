import { motion } from "framer-motion";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <motion.header 
      className='absolute z-10 w-full py-8 padding-x'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className='flex items-center justify-between max-container'>
        <motion.a 
          href='/'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </motion.a>
        <motion.ul 
          className='flex items-center justify-center flex-1 gap-16 max-lg:hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {navLinks.map((item, index) => (
            <motion.li 
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <motion.a
                href={item.href}
                className='text-lg leading-normal font-montserrat text-slate-gray'
                whileHover={{ scale: 1.1, color: "#FF6452" }}
              >
                {item.label}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.div 
          className='flex gap-2 text-lg font-medium leading-normal font-montserrat max-lg:hidden wide:mr-24'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a 
            href='/'
            whileHover={{ scale: 1.1 }}
          >
            Sign in
          </motion.a>
          <span>/</span>
          <motion.a 
            href='/'
            whileHover={{ scale: 1.1 }}
          >
            Explore now
          </motion.a>
        </motion.div>
        <motion.div 
          className='hidden max-lg:block'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Nav;