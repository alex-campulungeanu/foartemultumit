//unused
import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import redirect from '@src/lib/redirect'

import headerStyles from '../styles/Header.module.css'
import {HeaderOption} from '@components/HeaderOption'

const Header = () => {
  //TODO: change this to a proper redirect, maybe using Link from next
  const goTo = (to) => {
    redirect(to);
  }

  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.left}>
        {/* <HeaderOption 
          Icon={ChatTwoToneIcon}
          title='Foarte multumit'
          onClick={() => goTo('/')}
        /> */}
        <HeaderOption Icon={HomeIcon} title="Home" onClick={() => goTo('/')} />
      </div>
      <div className={headerStyles.right}>
        <HeaderOption Icon={InfoIcon} title="About" onClick={() => goTo('/about')}/>
      </div>
    </div>

  )
}

export default Header