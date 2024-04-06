import React from 'react'

export default function Main({ref}) {
    return (
        <div ref={ref} className='bg-[#0075ff] w-full relative flex flex-col h-full justify-center items-center'>
            <div className='font-bold tracking-widest text-5xl mt-10 text-white'>El Zero Academy</div>
            <div className='text-xl mt-7 text-white text-center'>It is an educational platform that provides many web development paths and learning programming in general,<br /> with detailed interactive explanations in Arabic, and study plans with programming tests and challenges <br /> to ensure understanding and application of the code.</div>
        </div>
    )
}
