import React from 'react'

const Header = () => {
  return (
   <>
   <ul className='flex justify-between items-center pt-5 pb-5 navbar'>
    <li><a href="/">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" height={"100px"} width={'100px'} />
        </a></li>

        <li className='flex gap-[30px] items-center'>
        <li>
            <a href="/" className='font-extrabold'>Home</a>
        </li>
        <li>
            <a href="/" className='font-extrabold'>About</a>
        </li>
        <li>
            <a href="/" className='font-extrabold'>Services</a>
        </li>
        <li>
            <a href="/" className='font-extrabold'>Order Food</a>
        </li>
        
        <li className='flex gap-[30px] items-center'>
          <button className='contact'>Contact</button>
          <span className='head-span'>
          <input type="text" className='head-inp' placeholder='search...' /><i class="fa fa-search"></i>
          </span>
        </li>
        </li>
   </ul>
   </>
  )
}

export default Header