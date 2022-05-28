import { VictoryBar, VictoryContainer } from 'victory'

interface chartData {
  dataList: number[]
}

const DUMMY_DATA_LIST = [600, 750]

const DoubleChart = ({ data }: { data: chartData }) => {
  const { dataList } = data

  return (
    <VictoryContainer>
      <VictoryBar data={DUMMY_DATA_LIST} />
    </VictoryContainer>
  )
}

export default DoubleChart
