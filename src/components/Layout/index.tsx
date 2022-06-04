import LayoutHeader from './LayoutHeader'

import styles from './layout.module.scss'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutWrapper}>
        <LayoutHeader />
        <main className={styles.layoutMain}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
