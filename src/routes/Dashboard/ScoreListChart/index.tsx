import { useRecoilValue } from 'recoil'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory'

import { healthDataState } from 'states/healthDataState'
import { COLORS, CHART_STYLE } from './chartStyle'

interface IScoreList {
  year: string
  score: number
  fill: string
  dotFill: string
}

const ScoreListChart = () => {
  const healthData = useRecoilValue(healthDataState)
  const { healthScoreList } = healthData

  const getHealthScoreData = () => {
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

    const slicedData = healthScoreData.slice(-4)
    return slicedData
  }

  const data = getHealthScoreData()
  const ticks = data.map((item) => item.year)

  const getDescription = () => {
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

  const description = getDescription()

  return (
    <div>
      {description}
      <VictoryChart {...CHART_STYLE.chart}>
        <VictoryBar
          data={data}
          labels={({ datum }) => datum.score}
          style={{
            data: { fill: ({ datum }) => datum.fill },
          }}
          {...CHART_STYLE.bar}
        />
        <VictoryLine data={data} {...CHART_STYLE.line} />
        <VictoryScatter
          data={data}
          style={{
            data: { fill: ({ datum }) => datum.dotFill },
          }}
          {...CHART_STYLE.scatter}
        />
        <VictoryAxis tickValues={ticks} tickFormat={ticks} />
      </VictoryChart>
    </div>
  )
}

export default ScoreListChart
