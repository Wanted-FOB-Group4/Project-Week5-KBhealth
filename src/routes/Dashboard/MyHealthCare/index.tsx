import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'

import { healthDataState } from 'states/healthDataState'
import { useParseMyHealthData } from 'hooks'
import MyHealthItem from './MyHealthItem'

const MyHealthCare = () => {
  const { myData } = useParseMyHealthData()
  const healthData = useRecoilValue(healthDataState)
  const {
    wxcResultMap: { wMymaxHscore },
  } = healthData

  const MyHealthList = useMemo(
    () => (
      <ul>
        {myData.map((item, index) => (
          <MyHealthItem key={`health-${item.title}`} index={index + 1} item={item} />
        ))}
      </ul>
    ),
    [myData]
  )

  return (
    <div>
      <div>
        <h3>맞춤 건강관리</h3>
        <p>
          오케어와 함께 건강을 관리해보세요.
          <br />
          건강점수를 최대 {wMymaxHscore}점까지 올릴 수 있어요.
        </p>
      </div>
      {MyHealthList}
    </div>
  )
}

export default MyHealthCare
