import healthDataJSON from 'data/health.json'

const { age, sex } = healthDataJSON.wxcResultMap
const otherSex = sex === 1 ? '남성' : '여성'
const otherAge = Math.floor(Number(age) / 10) * 10

export const CHART_OBJ = {
  MY: '나',
  OTHER: { AGE: `${otherAge}대 ${otherSex}`, ETC: '10년 후' },
  TYPE: {
    AGE_PERCENT: 'AGEPERCENT',
    AGE_SCORE: 'AGESCORE',
    DECADE_SCORE: 'DECADESCORE',
    DECADE_COST: 'DECADECOST',
  },
}
