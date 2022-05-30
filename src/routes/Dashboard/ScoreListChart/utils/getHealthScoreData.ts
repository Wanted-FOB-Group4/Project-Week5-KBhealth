import { IHealthScoreList } from 'types/types'
import { IScoreList } from '../types'
import { COLORS } from '../chartStyle'

export const getHealthScoreData = (healthScoreList: IHealthScoreList[]) => {
  const healthScoreData = healthScoreList.reduce<IScoreList[]>((acc, current, index) => {
    const { SUBMIT_DATE, SCORE } = current
    const isLastIndex = index === healthScoreList.length - 1

    acc.push({
      year: SUBMIT_DATE.slice(0, 4),
      score: Number(SCORE),
      fill: isLastIndex ? COLORS.YELLOW : COLORS.GRAY_E,
      dotFill: isLastIndex ? COLORS.RED : COLORS.GRAY_A,
    })

    return acc
  }, [])

  const data = healthScoreData.slice(-4)
  return data
}
