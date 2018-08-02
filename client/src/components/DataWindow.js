import React from 'react'

import dummyData from './dummyData'

class DataWindow extends React.Component {
  state = {
    items: dummyData
  }

  render(){
    const {items} = this.state

    return (
      <div>
        <h1>Data Window</h1>
        {
          items.map(({id, temp, time}) => (
            <div key={id}>
              {temp}{time}
            </div>
          ))
        }
      </div>
    )
  }
}

export default DataWindow