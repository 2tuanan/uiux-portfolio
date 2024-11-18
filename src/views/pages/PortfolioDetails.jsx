import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';

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
                <div className="px-10 md:px-14 flex flex-col items-start justify-center 
                h-full text-center text-[#000000] font-exo space-y-1 md:space-y-2">
                    <h1 className='text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-[500]'>{data.name}</h1>
                    <p className='text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]'>{data.bannerPhrase}</p>
                </div>
                <div
                className="px-10 md:px-14 pt-6">
                    <img className='relative w-full md:h-[550px] h-[400px] rounded-3xl object-cover'
                    src={data.cover} alt={data.slug}
                    />
                    
                </div>
            </section>
            <section className='flex flex-col space-y-4 pt-2 pb-6 md:pb-8 lg:pb-9'>
                <div className='flex flex-col space-y-3 px-10 md:px-14 font-exo'>
                    <h2 className='text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem] font-[500]'>Description</h2>
                    <p className='text-md md:text-lg lg:text-xl'>{data.description}</p>
                </div>
                <div className='px-10 md:px-14 flex flex-row space-x-4'>
                    <Link className='bg-[#000000] text-white font-exo font-[400] text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] tracking-wide rounded-full py-2 px-3
            border-2 border-[#000000] transition-all duration-500 hover:bg-white hover:text-[#000000]' to={data.caseStudyUrl}>View Case Study</Link>
                    <Link className='bg-[#000000] text-white font-exo font-[400] text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] tracking-wide rounded-full py-2 px-3
            border-2 border-[#000000] transition-all duration-500 hover:bg-white hover:text-[#000000]' to={data.prototypeUrl}>Explore Prototype</Link>
                </div>
            </section>
        </div>
    );
};

export default PortfolioDetails;