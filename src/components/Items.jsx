import React from 'react'
import SingleItem from './SingleItem';

function Items(props) {
    return (
      <div> 
        {props.items.map(item => 
          <SingleItem key={item.id} item={item} />)}
      </div>
  )
}

export default Items;