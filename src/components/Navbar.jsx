import React from 'react'

export default function Navbar({
    scrollToMainRef,
    scrollToTokenRef
}) {
    return (
        <div className='nav-bar z-10 '>
            <div className='flex w-[50%] justify-between'>
                <div className='ml-10 w-20'><img src="../../logo.png" alt="" /></div>
                <div className='h-full flex justify-center items-center'>
                    <div onClick={scrollToMainRef} className='nav-bar-item trans'>About</div>
                    <div onClick={scrollToTokenRef} className='nav-bar-item trans'>Tokenomics</div>
                </div>
            </div>
        </div>
    )
}
