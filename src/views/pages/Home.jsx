import React from 'react';

const Home = () => {
    return (
        <div>
            <section id="home" className="relative md:h-[550px] h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('http://localhost:3000/images/herobanner.jpg')" }}>
                {/* Dimming overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                {/* Introduction text */}
                <div className="relative z-1 flex flex-col items-center justify-center 
                h-full text-center text-white font-exo px-4 space-y-12 lg:space-y-20">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-great-vibes font-thin tracking-wide">Welcome to my portfolio</h1>
                    <div className='space-y-2'>
                        <p className="text-xl md:text-2xl lg:text-3xl">I'm JPa</p>  
                        <p className="text-lg md:text-xl lg:text-2xl">A passionate UI/UX designer dedicated to creating digital experiences</p>
                    </div>
                </div>
            </section>
        </div>
    );
  };
  

export default Home;