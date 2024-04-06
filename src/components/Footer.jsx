import React from 'react'

export default function Footer() {
    return (
        <div className='w-full bg-black flex justify-center'>
            <div className='w-[83%] text-sm h-20 border-t text-white border-black flex justify-between items-center'>
                <div>Made with Love by AZ <span className='font-serif'>&copy;</span> 2024</div>
                <div className='flex'>
                    <a target='_blank' href='https://www.youtube.com/@ElzeroWebSchool' className='mx-2'>Youtube</a>
                    <a target='_blank' href='https://www.facebook.com/OsElzero' className='mx-2'>Facebook</a>
                    <a target='_blank' href='https://twitter.com/Osama_Elzero' className='mx-2'>X</a>
                    <a target='_blank' href='https://www.facebook.com/OsElzero' className='mx-2'>Github</a>
                </div>
            </div>
        </div>
    )
}
