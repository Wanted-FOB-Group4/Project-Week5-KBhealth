import { useRecoilValue } from 'recoil'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory'
import { CallbackArgs } from 'victory-core'

import { healthDataState } from 'states/healthDataState'
import { getHealthScoreData } from './utils/getHealthScoreData'

import Description from './Description'
import { CHART_STYLE } from './chartStyle'
import styles from './scoreListChart.module.scss'

const ScoreListChart = () => {
  const healthData = useRecoilValue(healthDataState)
  const { healthScoreList } = healthData

  const data = getHealthScoreData(healthScoreList)
  const ticks = data.map((item) => item.year)

  return (
    <div className={styles.chartContainer}>
      <div className={styles.description}>
        <Description data={data} />
      </div>
      <VictoryChart {...CHART_STYLE.chart}>
        <VictoryBar
          data={data}
          labels={({ datum }) => datum.score}
          style={{
            data: { fill: ({ datum }) => datum.fill },
            labels: { fill: ({ datum }: CallbackArgs) => datum.labelFill },
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
