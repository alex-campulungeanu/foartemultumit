import { ReactElement } from 'react'
import Meta from './Meta'

// import Header from './Header'
// import styles from '../styles/Layout.module.css'
// import {Sidebar} from '@components/Sidebar'
import ReviewsSummaryBar from './ReviewsSummaryBar'
import TopNavigation from './TopNavigation'

interface AppLayoutProps {
  children: ReactElement
}

const AppLayout = ({children}: AppLayoutProps): JSX.Element => {
  return (
    <div className='flex'>
      <Meta />
      <ReviewsSummaryBar />
      {/* <TopNavigation /> */}
      {children}
      {/* <div className={styles.container}>
        <Header/>
        <div className={styles.app_body}>
          <Sidebar />
          <div className={styles.main}>
            {children}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default AppLayout