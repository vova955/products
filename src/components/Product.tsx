import React, { useState } from "react"
import { iProduct } from "../models"

interface ProductProps {
    product: iProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)

    const buttonBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400'

    const buttonClasses = ['py-2 px-4 border', buttonBgClassName]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{ product.title }</p>
            <button 
                className={buttonClasses.join(' ')}
                onClick={ () => setDetails(prev => !prev)}
            >
                {details ? 'Hide details': 'Show details'}
            </button>
            {details && <div>
                <p>{ product.description }</p>
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span></p>
            </div>}
            {/* <span className="font-bold">{product.price}</span> */}
        </div>
    )
}

