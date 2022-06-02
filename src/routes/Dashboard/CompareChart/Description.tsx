import getDescriptionData from './utils/getDescriptionData'

import styles from './compareChart.module.scss'

interface IDescription {
  my: number
  other?: number
  type?: string
}

const Description = ({ my, other, type }: IDescription) => {
  const resultElement = getDescriptionData(type!, my, other)
  return <div className={styles.descriptionCard}>{resultElement}</div>
}

export default Description
