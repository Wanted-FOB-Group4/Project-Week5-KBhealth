import styles from './layoutHeader.module.scss'
import { BatteryIcon, WifiIcon } from 'assets/svgs'

const LayoutHeader = () => {
  return (
    <header className={styles.layoutHeaderWrapper}>
      <div className={styles.layoutSection}>
        <span>SKT</span>
        <WifiIcon />
      </div>
      <div className={styles.layoutSection}>
        <span>8:08 AM</span>
      </div>
      <div className={styles.layoutSection}>
        <span>100%</span>
        <BatteryIcon />
      </div>
    </header>
  )
}

export default LayoutHeader
