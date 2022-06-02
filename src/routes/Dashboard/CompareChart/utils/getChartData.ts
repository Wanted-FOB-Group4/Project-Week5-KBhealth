import { CHART_OBJ } from '../constants/chartConstants'

export const getChartData = (my: number, compare: number, type?: string) => {
  const compareCategory = type !== undefined ? CHART_OBJ.OTHER.AGE : CHART_OBJ.OTHER.ETC
  const data = [
    { category: '나', value: my },
    { category: compareCategory, value: compare },
  ]
  return data
}
