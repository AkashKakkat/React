import React from 'react'

const List = () => {
    const coffees = ["Espresso", "Latte", "Cappuccino", "Mocha"];

  return (
    <ul>
      {coffees.map((coffee, index) => (
        <li key={index}>{coffee}</li>
      ))}
    </ul>

  );
}

export default List
