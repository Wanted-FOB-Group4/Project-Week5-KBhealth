import { useRecoilValue } from 'recoil'
import { healthDataState } from 'states/healthDataState'

import ChartItem from './ChartItem'

import styles from './compareChart.module.scss'
import { CHART_OBJ } from './constants/chartConstants'
import Description from './Description'

const CompareChart = () => {
  const healthData = useRecoilValue(healthDataState)
  const { hscorePercent, wHscore, hscore_peer: hscorePeer, wHscoreDy, medi, mediDy } = healthData.wxcResultMap
  const { TYPE } = CHART_OBJ

  return (
    <div className={styles.chartContainer}>
      <article className={styles.cardWrapper}>
        <h2 className={styles.articleHeader}>나이대 건강 비교</h2>
        <div className={styles.descriptionContainer}>
          <Description my={Number(wHscore)} other={Number(hscorePeer)} type={TYPE.AGE_SCORE} />
          <Description my={Number(hscorePercent)} type={TYPE.AGE_PERCENT} />
        </div>
        <ChartItem my={Number(wHscore)} compare={Number(hscorePeer)} type={TYPE.AGE_SCORE} />
      </article>
      <article className={styles.cardWrapper}>
        <h2 className={styles.articleHeader}>나의 10년 후 건강 예측</h2>
        <div>
          <Description my={Number(wHscore)} other={wHscoreDy[wHscoreDy.length - 1]} type={TYPE.DECADE_SCORE} />
        </div>
        <ChartItem my={Number(wHscore)} compare={wHscoreDy[wHscoreDy.length - 1]} />
      </article>
      <article className={styles.cardWrapper}>
        <h2 className={styles.articleHeader}>나의 10년 후 의료비 예측</h2>
        <div>
          <Description my={Number(medi)} other={mediDy[mediDy.length - 1]} type={TYPE.DECADE_COST} />
        </div>
        <ChartItem my={Number(medi)} compare={mediDy[mediDy.length - 1]} />
      </article>
    </div>
  )
}

export default CompareChart
