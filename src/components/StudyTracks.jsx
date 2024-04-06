import React from 'react'

export default function StudyTracks({ ref }) {
    return (
        <div ref={ref} className='w-full relative bg-[#F4F6FA] flex flex-col justify-start items-center pb-8 text-black'>

            <div className='flex flex-col justify-center items-center pt-20 pb-10'>
                <h2 className='text-5xl mb-2 font-OpenSans font-bold'>
                    Study Tracks
                </h2>

                <h5 className='text-2xl'>
                    Integrated Educational Tracks
                </h5>
            </div>

            <div className='grid grid-cols-3 gap-4 w-8/12 h-full font-OpenSans font-bold'>

                <div className='w-full h-52 bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='w-24 ' src="./tracks/_backend.png" alt="" />
                    <h6 className='mb-1'>
                        PHP Back-End Developer Track
                    </h6>
                </div>

                <div className='w-full h-52 bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='w-24 ' src="./tracks/_frontend.png" alt="" />
                    <h6 className='mb-1'>
                        Front-End Developer Track
                    </h6>
                </div>

                <div className='w-full h-52 bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='w-24 ' src="./tracks/_fundamentals.png" alt="" />
                    <h6 className='mb-1'>
                        Programming Fundamentals Track
                    </h6>
                </div>
            </div>

        </div>
    )
}
