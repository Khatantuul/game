import React from 'react'

function ComponentB() {
    const person = {
        name: "Khatantuul",
        age: 1
    }
  return (
    <div>{person.name.fullname.lastName}</div>
  )
}

export default ComponentB