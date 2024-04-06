import React from 'react'

export default function Navbar({
    scrollToStudyPlan,
    scrolltoTracks,
    scrollToLatestLessons,
    scrollToFAQ,
    scrollToRegister,
    scrollToMainRef
}) {
    return (
        <div className='nav-bar z-10'>
            <div className='flex w-[60%] justify-between items-center'>
                <div onClick={scrollToMainRef} className='ml-10 w-16 cursor-pointer '><img src="../../logo.png" alt="" /></div>
                <div className='h-full flex justify-center items-center'>
                    <div onClick={scrollToStudyPlan} className='nav-bar-item trans'>Study Plan</div>
                    <div onClick={scrolltoTracks} className='nav-bar-item trans'>Tracks</div>
                    <div onClick={scrollToLatestLessons} className='nav-bar-item trans'>Latest Lessons</div>
                    <div onClick={scrollToFAQ} className='nav-bar-item trans'>FAQ</div>
                    <div onClick={scrollToRegister} className='nav-bar-item trans'>Register</div>
                </div>
            </div>
        </div>
    )
}
