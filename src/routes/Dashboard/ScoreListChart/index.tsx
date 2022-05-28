import { useRecoilValue } from 'recoil'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory'

import { healthDataState } from 'states/healthDataState'
import { getHealthScoreData } from './utils/getHealthScoreData'
import { getDescription } from './utils/getDescription'
import { CHART_STYLE } from './chartStyle'

const ScoreListChart = () => {
  const healthData = useRecoilValue(healthDataState)
  const { healthScoreList } = healthData

  const data = getHealthScoreData(healthScoreList)
  const ticks = data.map((item) => item.year)
  const description = getDescription(data)

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
