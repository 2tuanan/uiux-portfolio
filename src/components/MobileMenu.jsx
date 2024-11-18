import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {Link as ScrollLink, animateScroll} from 'react-scroll';

function MobileMenu({isOpen, setIsOpen}){
    
    return (
        isOpen && (
            <div className='z-10 md:hidden fixed p-5 top0 left-0 h-full w-3/4 max-w-sm bg-white transform
            translate-x-0 transition-transform duration-500'>
                <div className='flex flex-col space-y-5 px-7 pt-[5rem] items-start'>
                    <RouterLink
                        onClick={() =>{
                            handleScrollAndNavigate('about');
                            setIsOpen(false);
                        }}
                        className='cursor-pointer text-black font-exo font-bold text-lg tracking-wide 
                        transition-colors duration-500 hover:text-[#ffc26f]'
                    >ABOUT</RouterLink>
                    <RouterLink
                        onClick={() =>{
                            handleScrollAndNavigate('portfolio');
                            setIsOpen(false);
                        }}
                        className='cursor-pointer text-black font-exo font-bold text-lg tracking-wide 
                        transition-colors duration-500 hover:text-[#ffc26f]'
                    >PORTFOLIO</RouterLink>
                    <RouterLink
                        onClick={() =>{
                            handleScrollAndNavigate('services');
                            setIsOpen(false);
                        }}
                        className='cursor-pointer text-black font-exo font-bold text-lg tracking-wide 
                        transition-colors duration-500 hover:text-[#ffc26f]'
                    >SERVICES</RouterLink>
                </div>
            </div>
        )
    )
}
export default MobileMenu;