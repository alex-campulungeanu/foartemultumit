import { ReactElement } from 'react'
import Meta from './Meta'

// import Header from './Header'
// import styles from '../styles/Layout.module.css'
// import {Sidebar} from '@components/Sidebar'
import Sidebar from './Sidebar'
import ActionsBar from './ActionsBar'
import TopNavigation from './TopNavigation'

interface AppLayoutProps {
  children: ReactElement
}

const AppLayout = ({children}: AppLayoutProps): JSX.Element => {
  return (
    <div className='flex h-screen'>
      <Meta />
      <Sidebar />
      <TopNavigation />
      {/* <ActionsBar /> */}
      <div className='content-container'>
        {children}
      </div>
    </div>
  )
}

export default AppLayout