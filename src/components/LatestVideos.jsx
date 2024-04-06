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
                    <a href='https://www.youtube.com/watch?v=XHj9Uo6oSWk'target="_blank">
                        Importing Libs best practices
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault1.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=JdEI8Zaf-lA'target="_blank">
                        Programming fundamentals with C++ 
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault2.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=_5YQqaD3g5k'target="_blank">
                        How to get money from web development
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault3.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=-LJMgk3OEGc'target="_blank">
                        5 opportunities to get more knowldge
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault4.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=-LJMgk3OEGc'target="_blank">
                        Development and Income
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-vids/maxresdefault5.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=-LJMgk3OEGc'target="_blank">
                        Don't waste college years
                    </a>
                </div>
            </div>

        </div>
    )
}
