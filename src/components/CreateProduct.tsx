import axios from 'axios'
import React, { useState } from 'react'
import { iProduct } from '../models'
import { ErrorMessage } from './ErrorMessage'

const productData: iProduct = { 
        title: '',
        price: 13.5,
        description: 'This is some misunderstanding',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 42,
            count: 10
        }
    }


interface CreateProductProps {
    onCreate: (product: iProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {


    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const sabmitHendler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length===0) {
            setError('Please enter valid title.')
            return
        }
        

        productData.title = value
        const response = await axios.post<iProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }

    const changeHendler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)


    }

    return (
        <form onSubmit={sabmitHendler}>
            <input 
                type="text" 
                className='border py-2 px-4 mb-2 w-full outline-0'
                placeholder='Enter product title...'
                value={value}
                onChange={changeHendler}
            />

            {error && <ErrorMessage error={error} />}

            <button type='submit' className='border py-2 px-4 mb-2 bg-yellow-400 hover:text-white'>Create</button>
        </form>
    )
}