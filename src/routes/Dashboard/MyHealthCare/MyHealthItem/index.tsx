import { IMyHealthData } from 'types/myHealthData'
import {
  AlcoholIcon,
  BloodPressureIcon,
  BloodSugarIcon,
  BMIIcon,
  CholesterolIcon,
  ExerciseIcon,
  GFRIcon,
  SmokeIcon,
} from 'assets/svgs'

import styles from './myHealthItem.module.scss'

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

  const svgIcon = {
    체질량지수: <BMIIcon />,
    혈압: <BloodPressureIcon />,
    총콜레스테롤: <CholesterolIcon />,
    흡연: <SmokeIcon />,
    식전혈당: <BloodSugarIcon />,
    음주: <AlcoholIcon />,
    신사구체여과율: <GFRIcon />,
    운동량: <ExerciseIcon />,
  }[title]

  const colorTheme = {
    체질량지수: styles.themeBMI,
    혈압: styles.themeBloodPressure,
    총콜레스테롤: styles.themeCholesterol,
    흡연: styles.themeSmoke,
    식전혈당: styles.themeBloodSugar,
    음주: styles.themeAlcohol,
    신사구체여과율: styles.themeGFR,
    운동량: styles.themeExercise,
  }[title]

  const detailSub = detail.split(' - ')

  const summary = boldString ? (
    <>
      <p className={styles.summaryTop}>
        {title}
        {postfix} {res}
        {unit}로
        <br />
        <strong>{boldString}</strong>입니다.
      </p>
      <div className={styles.summaryBottom}>정상: {normalData}</div>
    </>
  ) : (
    <p className={styles.summaryTop}>{postfix}</p>
  )

  return (
    <li key={`health-${title}`} className={styles.myHealthItemWrapper}>
      <div className={styles.myHealthItemTop}>
        <div className={styles.topIconSectionTop}>
          <span>{`0${index}`}</span>
          {svgIcon}
        </div>
        <h3 className={colorTheme}>{title}</h3>
        {summary}
        <div className={styles.tagContainer}>
          <div>#{tag1}</div>
          {tag2 && <div>#{tag2}</div>}
          {tag3 && <div>#{tag3}</div>}
        </div>
      </div>
      <hr />
      <div className={styles.myHealthItemBottom}>
        <h4 className={colorTheme}>이렇게 관리해 보세요!</h4>
        <ul>
          {detailSub[1] && <li>{detailSub[1]}</li>}
          {detailSub[2] && <li>{detailSub[2]}</li>}
        </ul>
      </div>
    </li>
  )
}

export default MyHealthItem
