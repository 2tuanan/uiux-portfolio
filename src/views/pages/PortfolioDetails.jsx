import React from 'react';
import { useParams } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import { motion } from 'framer-motion';

const PortfolioDetails = () => {
    const { id } = useParams();
    const data = portfolioData.find(item => item.id === parseInt(id));

    if (!data) {
        return <h1>Portfolio Not Found</h1>
    }

    return (
        <div>
            <section 
            className="bg-[#f9e0bb] text-black font-exo w-full justify-between 
            py-6 md:py-8 lg:py-9" >
                <div className="px-12 md:px-14 lg:px-20 flex flex-col items-start justify-center 
                h-full text-center text-[#000000] font-exo space-y-1 md:space-y-2">
                    <motion.h1 className='text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-[500]'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
                    >{data.name}</motion.h1>
                    <motion.p className='text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: 'easeInOut' }}
                    >{data.bannerPhrase}</motion.p>
                </div>
                <div
                className="px-12 md:px-14 lg:px-20 pt-6">
                    <motion.img className='relative w-full md:h-[550px] h-[400px] rounded-3xl object-cover'
                    src={data.cover} alt={data.slug}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7, ease: 'circInOut' }}
                    />
                    
                </div>
            </section>
            <section className='flex flex-col space-y-4 pt-5 pb-6 md:pb-8 lg:pb-9'>
                <div className='flex flex-col space-y-3 px-12 md:px-14 lg:px-20 font-exo'>
                    <motion.h2 className='text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem] font-[500]'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5, ease: 'easeInOut' }}
                    >Description</motion.h2>
                    <motion.p className='text-base md:text-lg lg:text-xl'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: 'easeInOut' }}
                    >{data.description}</motion.p>
                </div>
                <div className='px-12 md:px-14 lg:px-20 flex flex-row space-x-4'>
                    {data.caseStudyUrl ? (
                        <motion.a href={data.caseStudyUrl} target='_blank' rel='noopener noreferrer'
                        className='bg-[#000000] text-white font-exo font-[400] text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] 
                        tracking-wide rounded-full py-2 px-3 md:py-[0.6rem] md:px-[0.8rem] border-2 border-[#000000] 
                        transition-all duration-500 hover:bg-white hover:text-[#000000]'
                        initial={{ opacity: 0, x: -800 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.56, ease: 'backIn' }}
                        >View Case Study</motion.a>
                    ) : (
                        <motion.span 
                        className='bg-gray-400 text-white font-exo font-[400] text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] 
                        tracking-wide rounded-full py-2 px-3 md:py-[0.6rem] md:px-[0.8rem] border-2 border-gray-400 cursor-not-allowed'
                        initial={{ opacity: 0, x: -800 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.56, ease: 'backIn' }}
                        >Case Study Coming Soon</motion.span>
                    )}
                    <motion.a href={data.prototypeUrl} target='_blank' rel='noopener noreferrer'
                    className='bg-[#000000] text-white font-exo font-[400] text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] 
                    tracking-wide rounded-full py-2 px-3 md:py-[0.6rem] md:px-[0.8rem] border-2 border-[#000000] 
                    transition-all duration-500 hover:bg-white hover:text-[#000000]' to={data.prototypeUrl}
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.4, ease: 'backIn' }}
                    >Explore Prototype</motion.a>
                </div>
            </section>
        </div>
    );
};

export default PortfolioDetails;