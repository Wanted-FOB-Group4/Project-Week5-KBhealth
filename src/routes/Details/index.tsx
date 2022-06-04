import { useNavigate } from 'react-router-dom'
import styles from './detail.module.scss'

export const Details = () => {
  const navigation = useNavigate()
  const handleClick = () => {
    navigation(-1)
  }
  return (
    <div className={styles.detailContainer}>
      <div className={styles.title}>건강점수 분석 페이지</div>
      <div className={styles.content}>
        <button type='button' onClick={handleClick}>
          뒤로 가기
        </button>
      </div>
    </div>
  )
}
