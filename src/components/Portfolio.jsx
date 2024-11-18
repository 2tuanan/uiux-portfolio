import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Portfolio = () => {
    return (
        <div>
            <section id='portfolio' className='bg-[#f9e0bb] text-black font-exo w-full flex flex-row justify-between py-4 md:py-5 lg:py-6 space-x-16'>
                <div className='flex flex-col pl-12 md:pl-20 items-start w-2/5'>
                    <motion.h1 className='text-[2.3rem] md:text-[2.75rem] lg:text-[3.25rem] 
                    font-[400] font-oswald text-center pt-4 lg:pt-6 tracking-wide -mb-5'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                    >Portfolio</motion.h1>
                    <div className='flex flex-col text-md md:text-lg lg:text-xl space-y-3 md:space-y-4 lg:space-y-5 font-exo py-8  lg:py-11 '>
                        <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 1.5, ease: 'easeIn' }}
                        >These are all my designs from the course. </motion.p>
                        <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3, duration: 1.5, ease: 'easeIn' }}
                        >While they may still have some issues and be incomplete, they possess the app's main functionality.</motion.p>
                    </div>
                </div>
                <div className='marquee_component relative overflow-hidden m-8 w-7/12 lg:w-3/5'>
                    <div className='marquee_track flex w-[calc(200%)] animate-marquee'>
                        {[...portfolioData, ...portfolioData].map((item, index) => (
                            <Link key={index} to={`/portfolio/${item.id}`}
                            className='marquee_item flex-shrink-0 w-[18rem] md:w-[22rem] lg:w-[25rem] h-auto mx-4 flex flex-col items-center space-y-2'>
                                <img className='w-full h-full object-cover rounded-3xl shadow-md hover:shadow-xl duration-500' 
                                src={item.cover} 
                                alt={item.slug} />

                                <div className='w-full text-center'>
                                    <p className='text-md md:text-lg shadow-md hover:shadow-xl'>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;