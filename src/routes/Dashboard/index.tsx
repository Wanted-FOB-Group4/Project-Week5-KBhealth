import styles from './dashboard.module.scss'
import DashBoardHeader from './DashboardHeader'
import MyHealthCare from './MyHealthCare'

export const Dashboard = () => {
  return (
    <div className={styles.dashboardBackground}>
      <div className={styles.dashboardWrapper}>
        <DashBoardHeader />
        <main className={styles.dashboardMain}>
          {/* TODO: 다른 컴포넌트 여기에 배치 */}
          <hr />
          <MyHealthCare />
        </main>
      </div>
    </div>
  )
}
