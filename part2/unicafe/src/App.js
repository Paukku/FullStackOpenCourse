import { useState } from 'react'

const Statistics = ({clicks}) => {
  if(clicks.good === 0 && clicks.neutral === 0 && clicks.bad === 0 ) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else
  {
    return(
      <>
        <table>
          <tbody>
            <tr>
            <StatisticLine text="Good" value={clicks.good} />
            </tr>
            <tr><StatisticLine text="Neutral" value={clicks.neutral} /></tr>
            <tr><StatisticLine text="Bad" value={clicks.bad} /></tr>
            <tr><StatisticLine text="All" value={clicks.good+clicks.neutral+clicks.bad} /></tr>
            <tr><StatisticLine text="Averange" value={(clicks.good*1 + clicks.neutral*0 + clicks.bad*(-1)) / (clicks.good+clicks.neutral+clicks.bad) } /></tr>
            <tr><StatisticLine text="Positive" value={clicks.good/(clicks.good+clicks.neutral+clicks.bad) * 100} /></tr>
          </tbody>
        </table>
      </>
    )
  }
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatisticLine = ({text, value}) => {
  if (text === 'Positive'){
    return (
      <>
        <td>{text}</td>
        <td> {value}%</td>
      </>
    )
  }
  return(
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  )

}

const App = () => {
  // tallenna napit omaan tilaansa

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad:0
  })

  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1})
  }

  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1})
  }

  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1})
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button  handleClick={handleBadClick} text="Bad" />
      <h1>Statistics</h1>
     <Statistics clicks={clicks} />
    </div>
  )
}

export default App