interface IProps {
  times: number
  score: number
}

const Score = ({ times, score }: IProps) => {
  const scoreRate = score / 1000
  const trackDashArray = `${(6 * Math.PI * 2 * 17 * times) / 10} ${
    Math.PI * 2 * 17 * times - (6 * Math.PI * 2 * 17 * times) / 10
  }`
  const dashArray = `${((6 * Math.PI * 2 * 17 * times) / 10) * scoreRate} ${
    Math.PI * 2 * 17 * times - ((6 * Math.PI * 2 * 17 * times) / 10) * scoreRate
  }`
  const dashOffset = ((Math.PI * 2 * 17 * times) / 10) * 5.5
  return (
    <div className='App'>
      <div>
        <svg version='1.1' baseProfile='full' width={40 * times} height={30 * times} xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx={20 * times}
            cy={20 * times}
            r={17 * times}
            strokeWidth={3 * times}
            stroke='grey'
            fill='none'
            strokeDasharray={trackDashArray}
            strokeDashoffset={dashOffset}
            strokeOpacity='0.3'
            strokeLinecap='round'
          />
          <circle
            cx={20 * times}
            cy={20 * times}
            r={17 * times}
            fill='none'
            stroke='orange'
            strokeWidth={3 * times}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap='round'
          />
          <text x={10 * times} y={20 * times} fill='black' fontSize={10 * times} fontFamily="'맑은 고딕', cursive">
            {score}
          </text>
          <text x={27 * times} y={19 * times} fill='black' fontSize={5 * times} fontFamily="'맑은 고딕', cursive">
            점
          </text>
        </svg>
      </div>
    </div>
  )
}

export default Score
