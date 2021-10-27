import React from 'react'
import {FaRegBell, FaUserCircle, FaHashtag, FaSun, FaMoon, FaSearch} from 'react-icons/fa'

import useDarkMode from '../hooks/useDarkMode'

const TopNavigation = () => {
  return (
    <div className='top-navigation'>
      <FaHashtag size='20' className='title-hashtag' />
      <h5 className='title-text'>Foarte multumit</h5>
      <ThemeIcon />
      <div  className='search'>
        <input className='search-input' type="text" placeholder='Search ...'/>
        <FaSearch size='18' className='text-secondary my-auto' />
      </div>
      <FaRegBell size='24' className='top-navigation-icon' />
      <FaUserCircle size='24' className='top-navigation-icon' />
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