import React from 'react'

export default function StudyPlans({ ref }) {
    return (
        <div ref={ref} className='w-full relative h-[34rem] bg-white flex flex-col justify-start items-center py-8 text-black'>

            <h2 className='text-5xl mb-2 font-OpenSans'>
                Study Plans
            </h2>

            <h5 className='text-2xl'>
                Programming Language Available
            </h5>

            <div className='grid grid-cols-4 gap-4 w-8/12 h-full py-10'>

                <div className='relative w-full h-4/5 bg-[#F5F5F5] rounded-xl flex justify-center items-end hover:bg-[#e2e2e2] hover:transition'>
                    <img className='absolute -top-7 w-24 ' src="./language-icons/html.png" alt="" />
                    <h6 className='mb-7'>
                        HTML
                    </h6>
                </div>

                <div className='relative w-full h-4/5 bg-[#F5F5F5] rounded-xl flex justify-center items-end hover:bg-[#e2e2e2] hover:transition'>
                    <img className='absolute -top-7 w-24 ' src="./language-icons/css.png" alt="" />
                    <h6 className='mb-7'>
                        CSS
                    </h6>
                </div>
                <div className='relative w-full h-4/5 bg-[#F5F5F5] rounded-xl flex justify-center items-end hover:bg-[#e2e2e2] hover:transition'>
                    <img className='absolute -top-7 w-24 ' src="./language-icons/javascript.png" alt="" />
                    <h6 className='mb-7'>
                        JavaScript
                    </h6>
                </div>
                <div className='relative w-full h-4/5 bg-[#F5F5F5] rounded-xl flex justify-center items-end hover:bg-[#e2e2e2] hover:transition'>
                    <img className='absolute -top-7 w-24 ' src="./language-icons/sass.png" alt="" />
                    <h6 className='mb-7'>
                        SASS
                    </h6>
                </div>
                <div className='relative w-full h-4/5 bg-[#F5F5F5] rounded-xl flex justify-center items-end hover:bg-[#e2e2e2] hover:transition'>
                    <img className='absolute -top-7 w-24 ' src="./language-icons/typescript.png" alt="" />
                    <h6 className='mb-7'>
                        TypeScript
                    </h6>
                </div>
                <div className='relative w-full h-4/5 bg-[#F5F5F5] rounded-xl flex justify-center items-end hover:bg-[#e2e2e2] hover:transition'>
                    <img className='absolute -top-7 w-24 ' src="./language-icons/cpp.png" alt="" />
                    <h6 className='mb-7'>
                        C++
                    </h6>
                </div>
                <div className='relative w-full h-4/5 bg-[#F5F5F5] rounded-xl flex justify-center items-end hover:bg-[#e2e2e2] hover:transition'>
                    <img className='absolute -top-7 w-24 ' src="./language-icons/php.png" alt="" />
                    <h6 className='mb-7'>
                        PHP
                    </h6>
                </div>
                <div className='relative w-full h-4/5 bg-[#F5F5F5] rounded-xl flex justify-center items-end hover:bg-[#e2e2e2] hover:transition'>
                    <img className='absolute -top-7 w-24 ' src="./language-icons/python.png" alt="" />
                    <h6 className='mb-7'>
                        Python
                    </h6>
                </div>


            </div>

        </div>
    )
}
