import { ReactElement } from 'react'

import Header from './Header'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import {Sidebar} from '@components/Sidebar'

interface AppLayoutProps {
  children: ReactElement
}

const AppLayout = ({children}: AppLayoutProps): JSX.Element => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Header/>
        <div className={styles.app_body}>
          <Sidebar />
          <div className={styles.main}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default AppLayout