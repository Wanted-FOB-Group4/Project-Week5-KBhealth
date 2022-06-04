import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryScatter } from 'victory'
import { CallbackArgs } from 'victory-core'

import { getChartData } from './utils/getChartData'
import { CHART_COLOR } from './constants/chartStyle'
import { CHART_OBJ } from './constants/chartConstants'

interface IChartItem {
  my: number
  compare: number
  type?: string
}

const ChartItem = ({ my, compare, type }: IChartItem) => {
  const chartData = getChartData(my, compare, type)

  const setBarChartColor = (target: string) => {
    const targetColor = target === CHART_OBJ.MY ? CHART_COLOR.BAR.MYCOLOR : CHART_COLOR.BAR.OTHERCOLOR
    return targetColor
  }

  const setScatterChartColor = (target: string) => {
    const targetColor = target === CHART_OBJ.MY ? CHART_COLOR.SCATTER.MYCOLOR : CHART_COLOR.SCATTER.OTHERCOLOR
    return targetColor
  }

  const setBarLable = (targetValue: number) => {
    return targetValue.toLocaleString()
  }

  return (
    <VictoryChart domainPadding={40}>
      <VictoryBar
        data={chartData}
        x='category'
        y='value'
        labels={({ datum }) => setBarLable(datum.value)}
        style={{
          data: { fill: ({ datum }: CallbackArgs) => setBarChartColor(datum.category) },
        }}
      />
      <VictoryLine data={chartData} x='category' y='value' style={{ data: { stroke: CHART_COLOR.LINE.STROK_COLOR } }} />
      <VictoryScatter
        data={chartData}
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
  )
}

export default ChartItem
