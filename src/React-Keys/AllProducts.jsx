import React from 'react'

const AllProducts = () => {
    const Products = [
        { id: 'P1', name: 'T-shirt' },
        { id: 'P2', name: 'jeans' }
    ]
    return (
        <div>
            <ul>
                {Products.map(pdcts => (
                    <li style={{ backgroundColor: 'blue', color: 'yellow', padding: '10px', margin: '10px' }} key={pdcts.id}>{pdcts.name}</li>
                ))}
            </ul>


        </div>
    )
}

export default AllProducts
