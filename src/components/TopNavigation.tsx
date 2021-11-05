import React from 'react'
import {FaRegBell, FaUserCircle, FaHashtag, FaSun, FaMoon, FaSearch} from 'react-icons/fa'

import useDarkMode from '../hooks/useDarkMode'
// import {HeaderOption} from '@components/HeaderOption'
import redirect from '@src/lib/redirect'
import Logo from '@components/Logo'

const TopNavigation = () => {
  //TODO: change this to a proper redirect, maybe using Link from next
  const goTo = (to: string) => {
    redirect(to);
  }
  return (
    <div className='top-navigation'>
      {/* <FaHashtag size='20' className='title-hashtag' /> */}
      <div className='flex flex-row cursor-pointer' onClick={() => goTo('/')}>
        <Logo className='ml-3'/>
        <div className='title-text'>
          <h5>Foarte multumit</h5>
        </div>
      </div>
      <ThemeIcon />
      {/* <div  className='search'>
        <input className='search-input' type="text" placeholder='Search ...'/>
        <FaSearch size='18' className='text-secondary my-auto' />
      </div> */}
      {/* <FaRegBell size='24' className='top-navigation-icon' /> */}
      {/* <FaUserCircle size='24' className='top-navigation-icon' /> */}
    </div>
  )
}

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode()
  const handleMode = () => setDarkTheme(!darkTheme)
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size='24' className='top-navigation-icon'/>
      ):(
        <FaMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  )
}

export default TopNavigation
