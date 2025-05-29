import React from 'react'

const App = () => {

  const name = "Aditya";
  const x = 10;
  const y = 12;
  const flatmates = ['Pralay','Rajan','Kuldeep','Sagar','Nikhil'];
  const loggedIn = false;
  const styles = {
    color: 'red',
    fontSize: '50px',
  };

  return (
    <div>
      <p className="font-sans text-lg">Hello {name}</p>
      <p style={styles}>The sum of {x} + {y} is {x+y}</p>
      <p><b> List </b></p>
      <ul>
          { 
            flatmates.map((name,index) => { return <li key={index}>{name}</li> })
          }
      </ul>
      {/* This or that */}
      {loggedIn ? <p>Welcome member</p>: <p>Welcome Guest</p>}
      {/* Display only if this*/}
      {loggedIn ? <p>Welcome member</p>: ""}
      {loggedIn && <p>Welcome member</p>}
    </div>
  )
}

export default App
