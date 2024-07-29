import React from 'react'

export default function Footer() {
    return <>
        <footer className='text-white text-center'>
            <div className='flex justify-center p-20 flex-col md:flex-row gap-10 items-center md:items-start'>
                <div className="location md:w-1/3">
                    <h2 className='text-2xl mb-2 font-semibold'>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p className='mt-3'>Clark, MO 65243</p>
                </div>
                <div className="around md:w-1/3">
                    <h2 className='text-2xl mb-2 font-semibold'>AROUND THE WEB</h2>
                    <ul className='flex items-center justify-center space-x-2'>
                        <li className='w-9 h-9 border-2 border-white rounded-full flex items-center justify-center'><i className="fa-brands fa-facebook"></i></li>
                        <li className='w-9 h-9 border-2 border-white rounded-full flex items-center justify-center'><i className="fa-brands fa-twitter"></i></li>
                        <li className='w-9 h-9 border-2 border-white rounded-full flex items-center justify-center'><i className="fa-brands fa-linkedin"></i></li>
                        <li className='w-9 h-9 border-2 border-white rounded-full flex items-center justify-center'><i className="fa-solid fa-globe"></i></li>
                    </ul>
                </div>
                <div className="about  md:w-1/3">
                    <h2 className='text-2xl mb-2 font-semibold'>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <div className="copyright py-4">
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer>
    </>
}
