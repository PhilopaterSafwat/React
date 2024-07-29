import React from 'react'
import swra from "./../../../src/assets/avataaars.svg"

export default function Home() {
    return <>
        <div className="main flex items-center justify-center h-screen text-white">
            <div className='text-center space-y-3 flex flex-col items-center justify-center'>
                <img src={swra} width={250} />
                <h2 className='text-4xl font-semibold'>START FRAMEWORK</h2>
                <div className="shakl flex items-center justify-center gap-3">
                    <div className="5t w-20 h-1 bg-white"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="5t w-20 h-1 bg-white"></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>

    </>
}
