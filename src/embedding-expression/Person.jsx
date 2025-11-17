import React from 'react'

const Person = () => {

    const personData = {
        name: 'Akash',
        age: 21,
        isStudent: 'yes'
    }
    return (
        <div>
            <center><table border='2' cellPadding='10' cellSpacing='10'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>IsStudent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{personData.name}</td>
                        <td>{personData.age}</td>
                        <td>{personData.isStudent}</td>
                    </tr>
                </tbody>
            </table>
            </center>
        </div>
    )
}

export default Person
