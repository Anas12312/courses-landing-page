import React from 'react'

export default function LatestApps({ref}) {
    return (
        <div ref={ref} className='w-full relative bg-white flex flex-col justify-start items-center pb-8 text-black'>

            <div className='flex flex-col justify-center items-center pt-20 pb-10'>
                <h2 className='text-5xl mb-2 font-OpenSans font-bold'>
                    Latest Applications
                </h2>

                <h5 className='text-2xl'>
                    Application for Front-End Track
                </h5>
            </div>

            <div className='grid grid-cols-3 gap-x-4 gap-y-10 w-10/12 h-full font-OpenSans font-bold text-sm'>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-apps/maxresdefault.jpg" alt="" />
                    <h6 className=''>
                        Hangman Game
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-apps/maxresdefault1.jpg" alt="" />
                    <h6 className=''>
                        Page Scroll Progress
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-apps/maxresdefault2.jpg" alt="" />
                    <h6 className=''>
                        Fetch Repos
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-apps/maxresdefault3.jpg" alt="" />
                    <h6 className=''>
                        Quizz App
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-apps/maxresdefault4.jpg" alt="" />
                    <h6 className=''>
                    How to use curreny API
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-apps/maxresdefault5.jpg" alt="" />
                    <h6 className=''>
                        Guess the world game
                    </h6>
                </div>
            </div>

        </div>
    )
}
