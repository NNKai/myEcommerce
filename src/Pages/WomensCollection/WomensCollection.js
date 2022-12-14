import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Featured from '../../Images/womenimg.png'
import './WomensCollection.css'
import { ImSpinner3 } from 'react-icons/im';
import { FaSpinner } from 'react-icons/fa';


const WomensCollection = () => {

    const [womenArray, setWomenArray] = useState()
    

    useEffect (()=>{
        const fetchMensData = () => {
            axios.get('https://fakestoreapi.com/products')
            .then(data => {
                const filteredData = data.data.filter(fil => fil.category === "women's clothing")
                setWomenArray(filteredData)
            })
        }
        fetchMensData()
    }, [])

  return (
    <div className='womens_Products'>
      <div className='featuredimg_container'>
      <img className='featured_img' src={Featured} alt="featured_image"></img></div>
      <div className='mapping_Container'>{womenArray ? womenArray.map((data)=>{
        return (
           <div className='womens_Mapping' key={data.id}>
                <Link to="/womens"><img src={data.image} alt='img'></img>
                <h1>{data.title}</h1></Link>
                <p>${data.price}</p>
                <button>Add to Cart</button>
            </div>
        )
      }): 
      <div className='spinner'><FaSpinner className='spin'/></div>
      }</div>
    </div>
  )
}

export default WomensCollection
