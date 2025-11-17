import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const myProducts = [
        { id: '1', name: "laptop" },
        { id: '2', name: "phone" },
    ]

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {myProducts.map(p => (
                    <li key={p.id}>
                        <Link to={`/Products/${p.id}`}>{p.name}</Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Products
