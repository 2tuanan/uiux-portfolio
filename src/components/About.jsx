import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div>
            <section id='about' >
                <motion.h1 className='text-[2.3rem] md:text-[2.75rem] lg:text-[3.25rem] font-[400] font-oswald text-center pt-4 lg:pt-6 tracking-wide -mb-5 '
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                >About</motion.h1>
                <div className='flex flex-col text-md md:text-lg lg:text-xl space-y-3 md:space-y-4 lg:space-y-5 font-exo px-20 py-8  lg:py-11'>
                    <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 1.5, ease: 'easeIn' }}
                    >With a half-year of learning UI/UX Design Course, I get more confident and I am passionate about crafting engaging digital experiences. With those experiences in the industry. I offer fresh insights and a strong drive for innovation. I strongly believe in prioritizing users throughout my design process taking the time to understand their needs and objectives. </motion.p>
                    <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3, duration: 1.5, ease: 'easeIn' }}
                    >This enables me to create interfaces that are intuitive and provide seamless and enjoyable interactions. Additionally I pay close attention to aesthetics by carefully selecting colors, typography, and visual elements that enhance user engagement while maintaining a cohesive experience. </motion.p>
                    <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 1.5, ease: 'easeIn' }}
                    >Explore my portfolio, showcasing the projects I have put my effort on during the Course. Together, let's create remarkable digital experiences that leave a lasting impact</motion.p>
                </div>
            </section>
        </div>
    );
};

export default About;