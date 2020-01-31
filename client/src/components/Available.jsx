import React from 'react'

let Available = (props) => {
  console.log('props in Available: ', props)
  return (
    <div>
      <div>
        4142 AVAILABLE FOR PICKUP
      </div>
      <div>
       {/* SET AN ALERT FOR {props.name.toUpperCase()}S */}
      </div>
      <ul>
        <li>test1</li>
      </ul>
    </div>
  )


}


export default Available