import React from 'react'

const Navbar = () => {
  return (
    <div className="pt-10 h-[15vh] ">
    <div className='max-w-[1280px]  bg-[#0a0a1a]/90 backdrop-blur-lg rounded-xl mx-auto px-4 sm:px-6   flex items-center justify-between border border-white/10 '>
      <div className="">
        <img className='h-2/3' src="./Logo.svg" alt="Brand Icon" />
      </div>
      <div className="">
        <ul className='flex items-center text-white gap-x-6'>
            <a href='#work' className='cursor-pointer text-[#2563eb]'>Work</a>
            <a href='#service' className='cursor-pointer text-[#2563eb]'>Service</a>
            <a href='#about' className='cursor-pointer text-[#2563eb]'>About</a>
            <a href='#contact' className='cursor-pointer text-[#2563eb]'>Contact</a>
            <input className='px-5 py-2 lg:px-6 lg:py-2.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/40 transition-all cursor-pointer' type="button" value="Say Hello 👋" />
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar
