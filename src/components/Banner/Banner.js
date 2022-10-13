import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container flex items-center h-full">
                <h1 className='text-white text-2xl font-bold md:w-6/12'><p className='lg:text-7xl md:text-5xl lg:leading-snug md:leading-snug mb-6 text-4xl'>Challenge yourself now!</p> Try solving some of our Web Tech based quizes. Test you skills and boost it moreeee.....</h1>
            </div>
        </div>
    );
};

export default Banner;