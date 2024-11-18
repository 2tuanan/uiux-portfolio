import React from 'react';

const Service = () => {
    return (
        <div>
            <section id='service' className='py-4 md:py-7 lg:py-8 px-14 space-y-8'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-[2.3rem] md:text-[2.75rem] lg:text-[3.25rem] font-[400] 
                    font-oswald text-center tracking-wide'>Service</h2>
                </div>
                <div className='flex flex-col md:flex-row items-center text-center md:text-left'>
                    <div className='flex flex-col md:flex-row items-center w-full'>
                        <div className='order-1 md:order-2'>
                            <img src="http://localhost:3000/icons/ui-ux.gif" alt="UI/UX Icon" className="h-20 w-auto"/>
                        </div>
                        <div className='font-exo order-2 md:order-1'>
                            <h3 className='text-[1.1rem] md:text-[1.25rem] lg:text-[1.40rem] font-[500]'>UI/UX Design</h3>
                            <p className='text-base md:text-lg lg:text-xl font-[300]'>Crafting intuitive and visually engaging designs for web and mobile applications.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row-reverse items-center text-center md:text-right'>
                    <div className='flex flex-col md:flex-row-reverse items-center w-full'>
                        <div className='order-1 md:order-2'>
                            <img src="http://localhost:3000/icons/prototype.gif" alt="UI/UX Icon" className="h-20 w-auto"/>
                        </div>
                        <div className='font-exo order-2 md:order-1'>
                            <h3 className='text-[1.1rem] md:text-[1.25rem] lg:text-[1.40rem] font-[500]'>Prototyping</h3>
                            <p className='text-base md:text-lg lg:text-xl font-[300]'>Creating interactive prototypes to bring ideas to life and test functionality.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center text-center md:text-left pb-6'>
                    <div className='flex flex-col md:flex-row items-center w-full'>
                        <div className='order-1 md:order-2'>
                            <img src="http://localhost:3000/icons/user-research.gif" alt="UI/UX Icon" className="h-20 w-auto"/>
                        </div>
                        <div className='font-exo order-2 md:order-1'>
                            <h3 className='text-[1.1rem] md:text-[1.25rem] lg:text-[1.40rem] font-[500]'>User Research</h3>
                            <p className='text-base md:text-lg lg:text-xl font-[300]'>Understanding user behavior and needs to design better digital experiences.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;