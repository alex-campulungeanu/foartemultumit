// import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import {Sidebar} from '@components/Sidebar'

const Layout = ({children}) => {
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

export default Layout