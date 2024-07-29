import React from 'react'

export default function About() {
    return <>
        <div className="main flex items-center justify-center h-screen text-white">
            <div className="container w-3/4 space-y-3 flex items-center justify-center flex-col">
                <h2 className='text-4xl text-center font-bold'>ABOUT COMPONENT</h2>
                <div className="shakl flex items-center justify-center gap-3">
                    <div className="5t w-20 h-1 bg-white"></div>
                    <i className="fa-solid fa-star"></i>
                    <div className="5t w-20 h-1 bg-white"></div>
                </div>
                <div className='flex items-center justify-center flex-col md:flex-row'>
                    <p className='w-3/4 p-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className='w-3/4 p-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>

        </div>


    </>
}
