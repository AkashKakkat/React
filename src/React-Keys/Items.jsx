import React from 'react'

const Items = () => {
    const items=['apple','banana','orange'];
  return (
    <div>
      <ul>
        {items.map((fruits,index)=>(
            <li key={index}>{fruits}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items
