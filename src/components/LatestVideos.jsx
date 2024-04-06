import React from 'react'

export default function LatestVideos({ref}) {
    return (
        <div ref={ref} className='w-full relative bg-white flex flex-col justify-start items-center pb-8 text-black'>

            <div className='flex flex-col justify-center items-center pt-20 pb-10'>
                <h2 className='text-5xl mb-2 font-OpenSans font-bold'>
                    Latest Videos
                </h2>

                <h5 className='text-2xl'>
                    Latest videos for programming advices
                </h5>
            </div>

            <div className='grid grid-cols-3 gap-x-4 gap-y-10 w-10/12 h-full font-OpenSans font-bold text-sm'>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault.jpg" alt="" />
                    <h6 className=''>
                        Importing Libs best practices
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault1.jpg" alt="" />
                    <h6 className=''>
                        Programming fundamentals with C++ 
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault2.jpg" alt="" />
                    <h6 className=''>
                        How to get money from web development
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault3.jpg" alt="" />
                    <h6 className=''>
                        5 opportunities to get more knowldge
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault4.jpg" alt="" />
                    <h6 className=''>
                        Development and Income
                    </h6>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault5.jpg" alt="" />
                    <h6 className=''>
                        Don't waste college years
                    </h6>
                </div>
            </div>

        </div>
    )
}
