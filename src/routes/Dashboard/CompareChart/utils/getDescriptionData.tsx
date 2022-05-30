import React from 'react'
import { CHART_OBJ } from '../constants/chartConstants'
import cx from 'classnames'

import styles from '../compareChart.module.scss'

const EQUAL_ELEMENT = <span>현재와 같아요</span>

const compareCalculate = {
  ageScorePercent: (myPercent: number) => {
    const diff = 100 - Number(myPercent)
    const isRow = diff > 50
    const msg = isRow ? '하위' : '상위'
    const resultElement = (
      <div className={styles.msgColContainer}>
        <span>
          {msg} {Math.abs(diff)}%
        </span>
      </div>
    )
    return resultElement
  },
  ageScoreValue: (myScore: number, targetScore: number) => {
    if (myScore === targetScore) return EQUAL_ELEMENT

    const { AGE } = CHART_OBJ.OTHER
    const diff = myScore - targetScore
    const isRow = diff < 0
    const msg = isRow ? '낮아요' : '높아요'

    const resultElement = (
      <div className={styles.msgColContainer}>
        <span>{AGE} 평균점수보다</span>
        <div className={styles.msgText}>
          <mark className={cx(styles.highlight, { [styles.rowCase]: isRow, [styles.highCase]: !isRow })}>
            {Math.abs(diff)}점 {msg}
          </mark>
        </div>
      </div>
    )
    return resultElement
  },
  decadeScore: (myScore: number, targetScore: number) => {
    if (myScore === targetScore) return EQUAL_ELEMENT

    const { ETC } = CHART_OBJ.OTHER
    const diff = targetScore - myScore
    const isRow = diff < 0
    const msg = isRow ? '낮아요' : '높아요'

    const resultElement = (
      <div className={styles.msgColContainer}>
        <span>{ETC} 예상 건강점수는</span>
        <div className={styles.msgText}>
          <span className={styles.msgText}>현재보다 </span>
          <mark className={cx(styles.highlight, { [styles.rowCase]: isRow })}>
            {Math.abs(diff)}점 {msg}
          </mark>
        </div>
      </div>
    )
    return resultElement
  },
  decadeCost: (myScore: number, targetScore: number) => {
    if (myScore === targetScore) return EQUAL_ELEMENT

    const { ETC } = CHART_OBJ.OTHER
    const diff = targetScore - myScore
    const isHigh = diff > 0
    const msg = isHigh ? '많아요' : '적어요'
    const costDiff = Math.abs(diff).toLocaleString()

    const resultElement = (
      <div className={styles.msgColContainer}>
        <span className={styles.msgText}>{ETC} 예상 의료비는</span>
        <div className={styles.msgText}>
          <span>현재보다 </span>
          <mark className={cx(styles.highlight, { [styles.rowCase]: isHigh, [styles.highCase]: !isHigh })}>
            {costDiff}원 {msg}
          </mark>
        </div>
      </div>
    )
    return resultElement
  },
}

const getDescriptionData = (type: string, myData: number, otherData?: number) => {
  const { TYPE } = CHART_OBJ
  switch (type) {
    case TYPE.AGE_PERCENT:
      return compareCalculate.ageScorePercent(myData)
    case TYPE.AGE_SCORE:
      return compareCalculate.ageScoreValue(myData, otherData!)
    case TYPE.DECADE_SCORE:
      return compareCalculate.decadeScore(myData, otherData!)
    default:
      return compareCalculate.decadeCost(myData, otherData!)
  }
}

export default getDescriptionData
