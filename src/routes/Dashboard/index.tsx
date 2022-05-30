import MyHealthCare from './MyHealthCare'
import ScoreListChart from './ScoreListChart'
import UserHealthInfo from './UserHealthInfo'

export const Dashboard = () => {
  return (
    <>
      <UserHealthInfo />
      <ScoreListChart />
      <hr />
      <MyHealthCare />
    </>
  )
}
