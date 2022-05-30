import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer, VictoryLine, VictoryScatter } from 'victory'
import { CallbackArgs } from 'victory-core'

import styles from './doubleChart.module.scss'

interface chartData {
  category: string
  value: number
}

const CHART_COLOR = {
  bar: { myColor: '#FFC001', otherColor: '#FF833D' },
  scatter: { myColor: '#BEBEBE', otherColor: '#ffffff' },
}

const STROK_COLOR = '#BEBEBE'

const DoubleChart = ({ data }: { data: chartData[] }) => {
  const setBarChartColor = (target: string) => {
    const targetColor = target === '나' ? CHART_COLOR.bar.myColor : CHART_COLOR.bar.otherColor
    return targetColor
  }

  const setScatterChartColor = (target: string) => {
    const targetColor = target === '나' ? CHART_COLOR.scatter.myColor : CHART_COLOR.scatter.otherColor
    return targetColor
  }

  return (
    <div className={styles.chartContainer}>
      <VictoryChart>
        <VictoryBar
          data={data}
          x='category'
          y='value'
          labels={({ datum }) => `${datum.value}`}
          style={{
            data: { fill: ({ datum }: CallbackArgs) => setBarChartColor(datum.category) },
          }}
        />
        <VictoryLine data={data} x='category' y='value' style={{ data: { stroke: STROK_COLOR } }} />
        <VictoryScatter
          data={data}
          style={{
            data: { fill: ({ datum }: CallbackArgs) => setScatterChartColor(datum.category) },
            border: { stroke: 'black' },
          }}
          x='category'
          y='value'
        />
        <VictoryAxis
          style={{
            axis: { stroke: 'transparent' },
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default DoubleChart
