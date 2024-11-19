import React from 'react';
import { motion } from 'framer-motion';

const Service = () => {
    return (
        <div>
            <section id='services' className='py-4 md:py-7 lg:py-8 px-12 md:px-14 lg:px-20'>
                <div className='container mx-auto px-4'>
                    <motion.h2 className='text-[2.3rem] md:text-[2.75rem] lg:text-[3.25rem] font-[400] 
                    font-oswald text-center tracking-wide'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                    >Services</motion.h2>
                </div>

                {/* Service Section */}
                <div className='flex flex-col md:flex-row items-center text-center md:text-right pt-10'>
                    <div className='flex flex-col md:flex-row items-center w-full'>
                        <div className='order-1 md:order-2 md:pl-5'>
                            <motion.img src="/uiux-portfolio/icons/ui-ux.gif" alt="UI/UX Icon" className="h-20 w-auto"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                            />
                        </div>
                        <div className='font-exo order-2 md:order-1 md:w-[24rem] lg:w-[30rem]'>
                            <motion.h3 className='text-[1.1rem] md:text-[1.25rem] lg:text-[1.40rem] font-[500]'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1, ease: 'anticipate' }}
                            >UI/UX Design</motion.h3>
                            <motion.p className='text-base md:text-lg lg:text-xl font-[300]'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1, ease: 'anticipate' }}
                            >Crafting intuitive and visually engaging designs for web and mobile applications.</motion.p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse items-center text-center md:text-left pt-7 md:pt-14'>
                    <div className='flex flex-col md:flex-row-reverse items-center w-full'>
                        <div className='order-1 md:order-2 md:pr-5'>
                            <motion.img src="/uiux-portfolio/icons/prototype.gif" alt="Protyping Icon" className="h-20 w-auto"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                            />
                        </div>
                        <div className='font-exo order-2 md:order-1 md:w-[24rem] lg:w-[30rem]'>
                            <motion.h3 className='text-[1.1rem] md:text-[1.25rem] lg:text-[1.40rem] font-[500]'
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1, ease: 'anticipate' }}
                            >Prototyping</motion.h3>
                            <motion.p className='text-base md:text-lg lg:text-xl font-[300]'
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1, ease: 'anticipate' }}
                            >Creating interactive prototypes to bring ideas to life and test functionality.</motion.p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center text-center md:text-right pb-6 pt-7 md:pt-14'>
                    <div className='flex flex-col md:flex-row items-center w-full'>
                        <div className='order-1 md:order-2 md:pl-5'>
                            <motion.img src="/uiux-portfolio/icons/user-research.gif" alt="User-Research Icon" className="h-20 w-auto"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                            />
                        </div>
                        <div className='font-exo order-2 md:order-1 md:w-[24rem] lg:w-[30rem]'>
                            <motion.h3 className='text-[1.1rem] md:text-[1.25rem] lg:text-[1.40rem] font-[500]'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1, ease: 'anticipate' }}
                            >User Research</motion.h3>
                            <motion.p className='text-base md:text-lg lg:text-xl font-[300]'
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 1, ease: 'anticipate' }}
                            >Understanding user behavior and needs to design better digital experiences.</motion.p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;