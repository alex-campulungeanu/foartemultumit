import { ReactElement } from 'react'
import Meta from './Meta'

// import Header from './Header'
// import styles from '../styles/Layout.module.css'
// import {Sidebar} from '@components/Sidebar'
import Sidebar from './Sidebar'
import ReviewsSummaryBar from './ReviewsSummaryBar'
import TopNavigation from './TopNavigation'

interface AppLayoutProps {
  children: ReactElement
}

const AppLayout = ({children}: AppLayoutProps): JSX.Element => {
  return (
    <div className='flex'>
      <Meta />
      <Sidebar />
      <ReviewsSummaryBar />
      <div className='content-container'>
        <TopNavigation />
        {children}
      </div>
    </div>
  )
}

export default AppLayout