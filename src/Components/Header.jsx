import React from 'react'

const Header = () => {
  return (
   <>
   <ul className='flex justify-between pt-5 pb-5 navbar'>
    <li><a href="/">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="" height={"100px"} width={'100px'} />
        </a></li>
        <li>
            <a href="" className='font-extrabold'>Contact</a>
        </li>
   </ul>
   </>
  )
}

export default Header