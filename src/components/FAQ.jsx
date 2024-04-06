import React from 'react'

export default function FAQ({ ref }) {
    return (
        <div ref={ref} className='w-full relative bg-white flex flex-col justify-start items-center pb-8 text-black'>

            <div className='flex flex-col justify-center items-center pt-20 pb-10'>
                <h2 className='text-5xl mb-2 font-OpenSans font-bold'>
                    Questions
                </h2>

                <h5 className='text-2xl'>
                    Frequently Asked Question
                </h5>
            </div>

            <div className='flex flex-col w-[83%] cursor-pointer my-2'>
                <div className='border-b border-black text-lg w-fit pb-2'>Do I need to learn frontend in order to learn backend? </div>
            </div>
            <div className='flex flex-col w-[83%] cursor-pointer my-2'>
                <div className='border-b border-black text-lg w-fit pb-2'>Is Problem Solving important for frontend? </div>
            </div>
            <div className='flex flex-col w-[83%] cursor-pointer my-2'>
                <div className='border-b border-black text-lg w-fit pb-2'>What should I do when I get stuck while learning? </div>
            </div>
            <div className='flex flex-col w-[83%] cursor-pointer my-2'>
                <div className='border-b border-black text-lg w-fit pb-2'>Where can I find websites for inspiration and ideas? </div>
            </div>
            <div className='flex flex-col w-[83%] cursor-pointer my-2'>
                <div className='border-b border-black text-lg w-fit pb-2'>What books should I study for javascript beside watching the videos? </div>
            </div>
            <div className='flex flex-col w-[83%] cursor-pointer my-2'>
                <div className='border-b border-black text-lg w-fit pb-2'>How to make a website similiar to OLX? </div>
            </div>

        </div>
    )
}
