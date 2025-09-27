import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={ props.onClick }>
      { props.text }
    </button>
  )
}
const StatisticLine = (props) => {
  return (
    <tr colSpan="2">
        <td> {props.text} </td>
        <td> {props.value} </td>
    </tr>
  )
}
const Statistics = (props) => {
  const All = props.good + props.bad + props.neutral
  const Average = (props.good - props.bad)/All
  const Positive = props.good/All*100
    if (All === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else
  return (
  <table> 
    <tbody>
      <tr>
      <th>statistics</th>
      </tr>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={All} />
      <StatisticLine text="average" value ={Average} />
      <StatisticLine text="positive" value ={Positive} />
    </tbody>
  </table>
)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>  
    
      <h1>give feedback</h1>
       
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    
  </div>
)
}

export default App
