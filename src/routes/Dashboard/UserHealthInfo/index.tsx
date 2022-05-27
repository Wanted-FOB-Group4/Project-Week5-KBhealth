import { Link } from 'react-router-dom'

import healthData from 'data/health.json'
import { NotificationIcon } from 'assets/svgs'

import styles from './userHealthInfo.module.scss'
import Score from './Score'

const UserHealthInfo = () => {
  const {
    userInfo: { healthDate },
    wxcResultMap: {
      paramMap: { sex, age, resHeight },
    },
  } = healthData

  const checkDateList = healthDate.split('')
  const checkDate = `${checkDateList.slice(0, 4).join('')}.${checkDateList.slice(4, 6).join('')}.${checkDateList
    .slice(6, 8)
    .join('')}`

  return (
    <section className={styles.container}>
      <div className={styles.title}>마이 헬스</div>
      <div className={styles.healthScore}>
        <div className={styles.scoreTitle}>김헬스님의 건강점수</div>
        <NotificationIcon className={styles.icon} />
      </div>
      <Score score={875} times={10} /> {/* times로 크기 조절 가능 */}
      <div className={styles.checkDate}>{checkDate}</div>
      <button className={styles.updateResultBtn} type='button'>
        건강검진결과 가져오기 &gt;
      </button>
      <div className={styles.userInfoBox}>
        <div className={styles.userInfoTitle}>기본정보</div>
        <div className={styles.userInfos}>
          <div className={styles.userInfo}>{sex === '1' ? '남' : '여'}</div>
          <div className={styles.userInfo}>{age}세</div>
          <div className={styles.userInfo}>{resHeight}</div>
        </div>
      </div>
      <div className={styles.analysisResult}>건강점수 분석 결과</div>
      <button className={styles.detailResultBtn} type='button'>
        <Link to='/details'>
          <u>결과 자세히 보기</u> &gt;
        </Link>
      </button>
    </section>
  )
}

export default UserHealthInfo
