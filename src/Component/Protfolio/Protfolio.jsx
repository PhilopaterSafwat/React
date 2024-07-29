import React from 'react'
import swaraOne from './../../assets/poert1.png'
import swaraTwo from './../../assets/port2.png'
import swaraThree from './../../assets/port3.png'

export default function Protfolio() {
    return <>
        <div className="flex items-center justify-center min-h-screen py-40">
            <div className="w-3/4 space-y-3 flex items-center justify-center flex-col">
                <h2 className='text-4xl text-center font-bold color-secound-color'>PORTFOLIO COMPONENT</h2>
                <div className="shakl flex items-center justify-center gap-3">
                    <div className="5t w-20 h-1 bg-secound-color"></div>
                    <i className="fa-solid fa-star color-secound-color"></i>
                    <div className="5t w-20 h-1 bg-secound-color"></div>
                </div>
                <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                    <div className="card  ">
                        <div className="inner rounded-md relative ">
                            <img src={swaraOne} className='w-full rounded-md' />
                            <div className="layout inset-0 absolute rounded-md flex items-center justify-center">
                                <i className="fa-solid fa-plus text-8xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card  ">
                        <div className="inner rounded-md relative ">
                            <img src={swaraTwo} className='w-full rounded-md' />
                            <div className="layout inset-0 absolute rounded-md flex items-center justify-center">
                                <i className="fa-solid fa-plus text-8xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card  ">
                        <div className="inner rounded-md relative ">
                            <img src={swaraThree} className='w-full rounded-md' />
                            <div className="layout inset-0 absolute rounded-md flex items-center justify-center">
                                <i className="fa-solid fa-plus text-8xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card  ">
                        <div className="inner rounded-md relative ">
                            <img src={swaraOne} className='w-full rounded-md' />
                            <div className="layout inset-0 absolute rounded-md flex items-center justify-center">
                                <i className="fa-solid fa-plus text-8xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card  ">
                        <div className="inner rounded-md relative ">
                            <img src={swaraTwo} className='w-full rounded-md' />
                            <div className="layout inset-0 absolute rounded-md flex items-center justify-center">
                                <i className="fa-solid fa-plus text-8xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card  ">
                        <div className="inner rounded-md relative ">
                            <img src={swaraThree} className='w-full rounded-md' />
                            <div className="layout inset-0 absolute rounded-md flex items-center justify-center">
                                <i className="fa-solid fa-plus text-8xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}
