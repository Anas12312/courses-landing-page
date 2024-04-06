import React from 'react'

export default function Navbar({
    scrollToMainRef,
    scrollToTokenRef
}) {
    return (
        <div className='nav-bar z-10 '>
            <div className='flex w-[60%] justify-between items-center'>
                <div className='ml-10 w-16'><img src="../../logo.png" alt="" /></div>
                <div className='h-full flex justify-center items-center'>
                    <div onClick={scrollToMainRef} className='nav-bar-item trans'>About</div>
                    <div onClick={scrollToTokenRef} className='nav-bar-item trans'>Study Plan</div>
                    <div onClick={scrollToTokenRef} className='nav-bar-item trans'>Tracks</div>
                    <div onClick={scrollToTokenRef} className='nav-bar-item trans'>Latest Lessons</div>
                    <div onClick={scrollToTokenRef} className='nav-bar-item trans'>FAQ</div>
                    <div onClick={scrollToTokenRef} className='nav-bar-item trans'>Register</div>
                </div>
            </div>
        </div>
    )
}
