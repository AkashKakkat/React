import React from 'react'
import { useParams } from 'react-router-dom'
import { FaBoxOpen } from "react-icons/fa";


const ProductDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h2><FaBoxOpen />Product ID: {id}</h2>
        </div>
    )
}

export default ProductDetails
