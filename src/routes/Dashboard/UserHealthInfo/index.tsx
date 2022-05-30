import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { healthDataState } from 'states/healthDataState'
import Score from './Score'

import { NotificationIcon } from 'assets/svgs'
import styles from './userHealthInfo.module.scss'

const UserHealthInfo = () => {
  const nav = useNavigate()
  const healthData = useRecoilValue(healthDataState)
  const {
    userInfo: { healthDate, healthScore },
    wxcResultMap: {
      paramMap: { sex, age, resHeight },
    },
  } = healthData

  const checkDateList = healthDate.split('')
  const checkDate = `${checkDateList.slice(0, 4).join('')}.${checkDateList.slice(4, 6).join('')}.${checkDateList
    .slice(6, 8)
    .join('')}`

  const handleButtonClick = () => {
    nav('/details')
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>마이 헬스</h2>
      <div className={styles.main}>
        <div className={styles.healthScore}>
          <h3 className={styles.scoreTitle}>
            <strong>김헬스</strong> 님의 건강점수
          </h3>
          <NotificationIcon className={styles.icon} />
        </div>
        <Score score={healthScore} times={6} /> {/* times로 크기 조절 가능 */}
        <div className={styles.checkDate}>{checkDate}</div>
        <button className={styles.updateResultBtn} type='button'>
          건강검진결과 가져오기 &gt;
        </button>
        <div className={styles.userInfoBox}>
          <div className={styles.userInfoTitle}>기본정보</div>
          <ul>
            <li>{sex === '1' ? '남' : '여'}</li>
            <li>{age}세</li>
            <li>{resHeight}</li>
          </ul>
        </div>
        <div className={styles.resultBox}>
          <h3>건강점수 분석 결과</h3>
          <button type='button' onClick={handleButtonClick}>
            결과 자세히 보기 &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserHealthInfo
