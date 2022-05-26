import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { healthDataState } from 'states/healthDataState'

const MyHealthCare = () => {
  const healthData = useRecoilValue(healthDataState)
  // 여기서 필요한 데이터를 추출한 것들입니다....
  const {
    wxcResultMap: {
      wMymaxHscore,
      paramMap: { sex, age, resHeight, resBMI },
      healthScoreList,
      boj: { resBMI },
    },
    healthTagList, // 태그 리스트는 배열이라 각 컴포넌트(?)에 인덱스로 전달해줘야 함, 하지만 다른 애들은 인덱스가 아니라 고유한 이름을 갖고 있어 반드시 순서가 지켜져야 함
  } = healthData

  useEffect(() => {
    console.log(healthTagList)
  }, [])

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
      <ul>
        {healthTagList.map((tag) => (
          <li key={tag.tagId}>
            <div>{tag.tag1}</div>
            <div>{tag.tag2}</div>
            <div>{tag.tag3}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyHealthCare
