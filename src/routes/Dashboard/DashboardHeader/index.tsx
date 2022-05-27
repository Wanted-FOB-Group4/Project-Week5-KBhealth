import styles from './dashboardHeader.module.scss'
import { BatteryIcon, WifiIcon } from 'assets/svgs'

const DashBoardHeader = () => {
  return (
    <header className={styles.dashboardHeaderWrapper}>
      <div className={styles.dashboardSection}>
        <span>SKT</span>
        <WifiIcon />
      </div>
      <div className={styles.dashboardSection}>
        <span>8:08 AM</span>
      </div>
      <div className={styles.dashboardSection}>
        <span>100%</span>
        <BatteryIcon />
      </div>
    </header>
  )
}

export default DashBoardHeader
