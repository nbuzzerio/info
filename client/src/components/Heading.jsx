import React from 'react';



let heading = (props) => {
  console.log(props)
  return (
    <div>
      <div>{props.name}</div>
      <div>({props.otherNames})</div>
    </div>
  )
}

export default heading;