import styles from './dashboard.module.scss'
import DashBoardHeader from './DashboardHeader'
import MyHealthCare from './MyHealthCare'

export const Dashboard = () => {
  return (
    <div className={styles.dashboardBackground}>
      <div className={styles.dashboardWrapper}>
        <DashBoardHeader />
        <main className={styles.dashboardMain}>
          <MyHealthCare />
        </main>
      </div>
    </div>
  )
}
