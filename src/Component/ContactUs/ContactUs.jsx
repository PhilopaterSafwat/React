import React from 'react'

export default function ContactUs() {
    return <>
        <div className="flex items-center justify-center min-h-screen flex-col">
            <div className="w-3/4 space-y-3 flex items-center justify-center flex-col">
                <h2 className='text-4xl text-center font-bold color-secound-color'>CONATCT SECTION</h2>
                <div className="shakl flex items-center justify-center gap-3">
                    <div className="5t w-20 h-1 bg-secound-color"></div>
                    <i className="fa-solid fa-star color-secound-color"></i>
                    <div className="5t w-20 h-1 bg-secound-color"></div>
                </div>
            </div>
            <form className='py-3 w-2/4 space-y-5'>
                <input id="userName" type="text" placeholder="userName" name="UserName" className="w-full focus:border-none p-3 border-b-2"></input>
                <input id="UserAge" type="text" placeholder="UserAge" name="UserAge" className="w-full focus:border-none p-3 border-b-2"></input>
                <input id="UserEmail" type="email" placeholder="UserEmail" name="UserEmail" className="w-full focus:border-none p-3 border-b-2"></input>
                <input id="UserPassword" type="password" placeholder="UserPassword" name="UserPassword" className="w-full focus:border-none p-3 border-b-2"></input>
                <button>send Message</button>
            </form>
        </div>
    </>
}
