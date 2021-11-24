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
    <div className="flex flex-col h-screen">
      <div className="py-5 bg-gray-700 text-white text-center">
        Sticky Header and Footer with Tailwind
      </div>
      <div className="flex-1 overflow-y-auto p-5">
        {children}
      </div>
      <div className="py-5 bg-gray-700 text-center text-white">
        Tailwind is Awesome 😎
      </div>
    </div>
  )
}

export default AppLayout