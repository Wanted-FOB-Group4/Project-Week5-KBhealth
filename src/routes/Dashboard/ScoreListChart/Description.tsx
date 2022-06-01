import { IScoreList } from './types'

import styles from './scoreListChart.module.scss'

interface IProps {
  data: IScoreList[]
}

const Description = ({ data }: IProps) => {
  if (data.length === 1) {
    const { year, score } = data[0]

    return (
      <>
        <p>{year}년 건강 점수는</p>
        <p>
          <strong>{score}점</strong>입니다.
        </p>
      </>
    )
  }

  const compareScores = () => {
    const hasCurrentYear = Number(data[data.length - 1].year) === new Date().getFullYear()
    const hasLastYear = !!data.find((item) => Number(item.year) === new Date().getFullYear() - 1)
    const pastYear = data[data.length - 2].year
    const difference = data[data.length - 1].score - data[data.length - 2].score

    if (difference === 0) {
      return <>총점이 {hasCurrentYear && hasLastYear ? '지난 해와' : `${pastYear}년과`} 동일해요.</>
    }

    return (
      <>
        <span>총점이 {hasCurrentYear && hasLastYear ? '지난 해' : `${pastYear}년`}보다 </span>
        <span className={difference > 0 ? styles.increased : styles.decreased}>
          {Math.abs(difference)}점 {difference > 0 ? '높' : '낮'}아졌어요.
        </span>
      </>
    )
  }

  const description = compareScores()

  return (
    <>
      <p>건강 점수는</p>
      <p>{description}</p>
    </>
  )
}

export default Description
