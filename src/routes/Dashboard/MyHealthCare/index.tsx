import { useRecoilValue } from 'recoil'
import { healthDataState } from 'states/healthDataState'
import { useParseMyHealthData } from 'hooks'

const MyHealthCare = () => {
  const { myData } = useParseMyHealthData()
  const healthData = useRecoilValue(healthDataState)
  const {
    wxcResultMap: { wMymaxHscore },
  } = healthData

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
        {myData.map((item, index) => {
          const {
            title,
            res,
            postfix,
            unit,
            boldString,
            normalData,
            tag: { tag1, tag2, tag3 },
            detail,
          } = item

          return (
            <li key={`health-${title}`} style={{ border: '1px solid pink', padding: '20px' }}>
              <div>
                <div>{`0${index + 1}`}</div>
                <h5>{title}</h5>
                <p>{`${title}${postfix} ${res}${unit}로 ${boldString}입니다.`}</p>
                <div>{`정상: ${normalData}`}</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div>{tag1}</div>
                  <div>{tag2}</div>
                  <div>{tag3}</div>
                </div>
                <hr />
              </div>
              <div>
                <h6>이렇게 관리해 보세요!</h6>
                <p>{detail.split(' - ')[1]}</p>
                <p>{detail.split(' - ')[2]}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MyHealthCare
