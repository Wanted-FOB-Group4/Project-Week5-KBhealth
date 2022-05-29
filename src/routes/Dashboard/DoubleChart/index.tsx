import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer, VictoryLine } from 'victory'
import { CallbackArgs } from 'victory-core'

import styles from './doubleChart.module.scss'

interface chartData {
  dataList: number[]
}

const DUMMY_DATA_LIST = [
  { category: '나', value: 750, fill: 'red' },
  { category: '30대 남성', value: 800, fill: 'yellow' },
]

const CHART_COLOR = {
  myColor: '#FFC001',
  otherColor: '#BFBFBF',
}

const STROK_COLOR = '#BEBEBE'

const DoubleChart = () => {
  // { data }: { data: chartData }
  // const { dataList } = data

  const setChartColor = (target: string) => {
    const targetColor = target === '나' ? CHART_COLOR.myColor : CHART_COLOR.otherColor
    return targetColor
  }

  return (
    <div className={styles.chartContainer}>
      <VictoryChart containerComponent={<VictoryContainer />}>
        <VictoryBar
          data={DUMMY_DATA_LIST}
          x='category'
          y='value'
          labels={({ datum }) => `${datum.value}`}
          style={{
            data: { fill: ({ datum }: CallbackArgs) => setChartColor(datum.category) },
          }}
        />
        <VictoryLine data={DUMMY_DATA_LIST} x='category' y='value' style={{ data: { stroke: STROK_COLOR } }} />
        <VictoryAxis
          style={{
            axisLabel: { stroke: '#000000' },
            axis: { stroke: 'transparent' },
            ticks: { stroke: 'transparent' },
          }}
        />
      </VictoryChart>
    </div>
  )
}

export default DoubleChart

// style={{
//   data: {
//     fill: '#0074B7',
//     strokeWidth: 1,
//   },
// }}
