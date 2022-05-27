import styles from './DashBoardHeader.module.scss'
import { BatteryIcon, WifiIcon } from 'assets/svgs'

const DashBoardHeader = () => {
  return (
    <div className={styles.dashboardHeaderWrapper}>
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
    </div>
  )
}

export default DashBoardHeader
