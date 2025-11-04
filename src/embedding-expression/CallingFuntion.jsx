import React from 'react'

const CallingFuntion = () => {

    function Greeting(name){
        return `Hello, ${name}`;
    }

    function GetGreeting(){
        return <h1>{Greeting("Mufeedha")}</h1>;
    }
  return (
    <div>
        <GetGreeting/>
    </div>
  )
}

export default CallingFuntion
