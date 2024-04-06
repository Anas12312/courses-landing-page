import React from 'react'

export default function Main({ ref }) {
    return (
        // <div className='box w-full h-[50rem]'>
        //     <div ref={ref} className='bg-[#0075ff] w-full relative flex flex-col h-[50rem] justify-center items-center box-inner'>
        //         <div className='font-bold tracking-widest text-5xl mt-10 text-white'>El Zero Academy</div>
        //         <div className='text-xl mt-7 text-white text-center'>It is an educational platform that provides many web development paths and learning programming in general,<br /> with detailed interactive explanations in Arabic, and study plans with programming tests and challenges <br /> to ensure understanding and application of the code.</div>
        //     </div>
        // </div>
        <div className="hero_area">
            <div ref={ref} className='w-full relative flex flex-col h-[40rem] justify-center items-center box-inner'>
                <div className='tracking-widest text-6xl mt-10 text-white'>El-Zero Academy</div>
                <div className='text-lg mt-7 text-white text-center'>It is an educational platform that provides many web development paths and learning programming in general,<br /> with detailed interactive explanations in Arabic, and study plans with programming tests and challenges <br /> to ensure understanding and application of the code.</div>
                <div className='relative w-[50%] flex justify-center items-center'>
                    <input
                        type="text"
                        className='mt-10 w-full h-14 rounded-lg pl-5 text-lg font-bold'
                        placeholder='Search anything in the academy'
                    />
                    <div className='absolute top-1/2 right-2 bg-[#0075ff] font-bold text-white p-2 rounded-lg'>Search</div>
                </div>
            </div>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>
    )
}
