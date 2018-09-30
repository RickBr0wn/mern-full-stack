import React from "react"

const Content = (props) => {
  const { data } = props.dataProp
  const makeTime = t => `${new Date(t).getHours()}:${new Date(t).getMinutes()}`
  const makeDay = t => {
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return daysArray[new Date(t).getDay()]
  }

  const tempArray = data.map(item => item.temp)
  const timeArray = data.map(item => makeTime(item.time))
  const dayArray = data.map(item => makeDay(item.time))
  
  console.log(tempArray, timeArray, dayArray);
  return (
    <div>
      <h1>Content</h1>
      <div>{}</div>
    </div>    
  )
}

export default Content