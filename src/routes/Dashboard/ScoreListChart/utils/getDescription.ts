import { IScoreList } from '../types'

export const getDescription = (data: IScoreList[]) => {
  if (data.length === 1) {
    return `${data[0].year}년 건강 점수는 ${data[0].score}점 입니다.`
  }

  const hasCurrentYear = Number(data[data.length - 1].year) === new Date().getFullYear()
  const hasLastYear = !!data.find((item) => Number(item.year) === new Date().getFullYear() - 1)
  const difference = data[data.length - 1].score - data[data.length - 2].score
  const pastYear = data[data.length - 2].year

  if (hasCurrentYear && hasLastYear) {
    if (difference === 0) {
      return `건강 점수는 총점이 지난 해와 동일해요.`
    }
    return `건강 점수는 총점이 지난 해보다 ${Math.abs(difference)}점 ${difference > 0 ? '높' : '낮'}아졌어요.`
  }

  if (difference === 0) {
    return `건강 점수는 총점이 ${pastYear}년과 동일해요.`
  }
  return `건강 점수는 총점이 ${pastYear}년보다 ${Math.abs(difference)}점 ${difference > 0 ? '높' : '낮'}아졌어요.`
}
