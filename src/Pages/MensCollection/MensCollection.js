import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Featured from '../../Images/mensimg.png'
import { Link } from 'react-router-dom'
import './MensCollection.css'
import { FaSpinner } from 'react-icons/fa';;


const MensCollection = () => {
    const [mensArray, setMensArray] = useState()
    

    

    useEffect (()=>{
        const fetchMensData = () => {
            axios.get('https://fakestoreapi.com/products')
            .then(data => {
                
                const filteredData = data.data.filter(fil => fil.category === "men's clothing")
                setMensArray(filteredData)
            
            })
        }
        fetchMensData()
    }, [])

  return (
    <div className='mens_Products'>
      <div className='featuredimg_container'>
      <img className='featured_img' src={Featured} alt="featured_image"></img></div>
      <div className='mapping_Container'>{mensArray ? mensArray.map((data)=>{
        return (
           <div className='mens_Mapping' key={data.id}>
                <Link to="/mens"><img src={data.image} alt='img'></img>
                <h1>{data.title}</h1></Link>
                <p>${data.price}</p>
                <button>Add to Cart</button>
            </div>
        )
      }): <div className='spinner'><FaSpinner className='spin'/></div>}</div>
    </div>
  )
}

export default MensCollection
