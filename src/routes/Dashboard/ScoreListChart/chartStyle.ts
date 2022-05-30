export const COLORS = {
  GRAY_A: '#aaaaaa',
  GRAY_E: '#e7e7e7',
  YELLOW: '#ffd301',
  RED: '#ff612d',
  LABEL: '#252525',
}

export const CHART_STYLE = {
  chart: {
    domainPadding: { x: 40 },
    maxDomain: { y: 1000 },
  },
  bar: {
    x: 'year',
    y: 'score',
    barWidth: 40,
  },
  line: {
    x: 'year',
    y: 'score',
    style: {
      data: { stroke: COLORS.GRAY_A, strokeWidth: 1 },
    },
  },
  scatter: {
    x: 'year',
    y: 'score',
    size: 4,
  },
}
