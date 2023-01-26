import React from 'react'

function SingleItem(props) {
  return (
    <div>
      <img src={props.item.image} alt="item-image" style={{ maxWidth: '100px' }} />
      <h5>{props.item.title}</h5>
      <p>{props.item.description}</p>
    </div> 
  )
}
export default SingleItem;
