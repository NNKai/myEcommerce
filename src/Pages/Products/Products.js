import React, { useEffect } from 'react'
import axios from 'axios'

const Products = () => {


    const fetchStore = (()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res =>{
            console.log(res)
        })
    }) 


    useEffect (()=>{
        fetchStore()
    }, [])


  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

export default Products
