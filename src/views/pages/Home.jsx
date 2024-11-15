import React from 'react';
import { motion } from 'framer-motion';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';

const Home = () => {
    return (
        <div>
            <section id="home" 
            className="relative md:h-[550px] h-[400px] bg-cover bg-center parallax-background" 
            style={{ backgroundImage: "url('http://localhost:3000/images/herobanner.jpg')" }}>
                {/* Dimming overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                {/* Introduction text */}
                <div className="relative z-1 flex flex-col items-center justify-center 
                h-full text-center text-white font-exo space-y-12 lg:space-y-20 px-10"> 
                    <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-great-vibes font-thin tracking-wide"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05, duration: 0.5, ease: 'easeOut' }}
                    >Welcome to my portfolio</motion.h1>
                    <div className='space-y-2'>
                        <motion.p className="text-xl md:text-2xl lg:text-3xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                        >I'm JPa</motion.p>  
                        <motion.p className="text-md md:text-lg lg:text-xl tracking-wide"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
                        >A passionate UI/UX designer dedicated to creating digital experiences</motion.p>
                    </div>
                </div>
            </section>
            <About />
            <Portfolio />
        </div>
    );
  };
  

export default Home;