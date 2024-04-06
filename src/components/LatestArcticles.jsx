import React from 'react'

export default function LatestArcticles({ ref }) {
    return (
        <div ref={ref} className='w-full relative bg-white flex flex-col justify-start items-center pb-8 text-black'>

            <div className='flex flex-col justify-center items-center pt-20 pb-10'>
                <h2 className='text-5xl mb-2 font-OpenSans font-bold'>
                    Latest Arcticles
                </h2>

                <h5 className='text-2xl'>
                    Latest arcticles about all tracks
                </h5>
            </div>

            <div className='grid grid-cols-3 gap-x-4 gap-y-10 w-10/12 h-full font-OpenSans font-bold text-sm'>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-art/maxresdefault.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=XHj9Uo6oSWk'target="_blank">
                        Some terms in the world of technology
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-art/maxresdefault1.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=_5YQqaD3g5k'target="_blank">
                        Craft WordPress Theme form Scratch
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-art/maxresdefault6.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=XHj9Uo6oSWk'target="_blank">
                        Tips regarding site performance
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-art/maxresdefault3.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=JdEI8Zaf-lA'target="_blank">
                        Ways to write code with multiple languages
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-art/maxresdefault4.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=-LJMgk3OEGc'target="_blank">
                        Things that prevent you from completing tasks
                    </a>
                </div>

                <div className='w-full bg-white border-b-2 border-blue-700 rounded-t-xl flex flex-col justify-center items-center hover:bg-[#e2e2e2] hover:transition'>
                    <img className='' src="./panels/latest-art/maxresdefault5.jpg" alt="" />
                    <a href='https://www.youtube.com/watch?v=IH7u1BVtn28'target="_blank">
                        Visual Studio Community Shortcuts
                    </a>
                </div>
            </div>

        </div>
    )
}
