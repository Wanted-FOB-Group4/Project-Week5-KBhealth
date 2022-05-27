import { IMyHealthData } from 'types/myHealthData'

const MyHealthItem = ({ index, item }: { index: number; item: IMyHealthData }) => {
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
        <div style={{ display: 'flex' }}>
          <div>{`0${index}`}</div>
          {/* 매 아이템마다 불러와야 하는 파일이 달라 부득이하게 컴포넌트화하지 않고 불러왔습니다ㅠ */}
          <img src={`./ic-icon-mission-h-${index}.svg`} alt={title} />
        </div>
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
}

export default MyHealthItem
