import React from 'react'

function Navbar() {
  return (
    <div className='px-[104px] py-[2rem] flex items-center justify-between'>
        <img src="/images/logo.png" alt="logo" className="" />
      <div className="links flex items-center gap-16 text-[18px] font-medium">
        {['home','Flashcard','Contact','FAQ'].map((item,index)=>(
          <a key={index} href="#" className="capitalize">{item}</a>
        ))}
        <button className="bg-gradient-to-b text-white px-[40px] py-[13px] from-[#06286E] to-[#164EC0] rounded-full">Login</button>
      </div>
    </div>
  )
}

export default Navbar