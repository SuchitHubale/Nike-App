import { motion } from "framer-motion";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <motion.footer 
      className='max-container'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-wrap items-start justify-between gap-20 max-lg:flex-col'>
        <motion.div 
          className='flex flex-col items-start'
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a 
            href='/'
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </motion.a>
          <motion.p 
            className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </motion.p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon, index) => (
              <motion.div
                className='flex items-center justify-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className='flex flex-wrap justify-between flex-1 gap-20 lg:gap-10'>
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h4 className='mb-6 text-2xl font-medium leading-normal text-white font-montserrat'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    className='mt-3 text-base leading-normal font-montserrat text-white-400 hover:text-slate-gray'
                    key={link.name}
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + linkIndex * 0.1 }}
                  >
                    <a href={link.link}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className='flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className='flex items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat'
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='m-0 rounded-full'
          />
          <p>Copyright. All rights reserved.</p>
        </motion.div>
        <motion.p 
          className='cursor-pointer font-montserrat'
          whileHover={{ scale: 1.05 }}
        >
          Terms & Conditions
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;