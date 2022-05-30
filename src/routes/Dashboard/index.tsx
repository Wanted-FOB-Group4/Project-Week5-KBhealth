import DashBoardHeader from './DashboardHeader'
import MyHealthCare from './MyHealthCare'
import UserHealthInfo from './UserHealthInfo'

import styles from './dashboard.module.scss'

export const Dashboard = () => {
  return (
    <div className={styles.dashboardBackground}>
      <div className={styles.dashboardWrapper}>
        <DashBoardHeader />
        <main className={styles.dashboardMain}>
          <UserHealthInfo />
          <hr />
          <MyHealthCare />
        </main>
      </div>
    </div>
  )
}
