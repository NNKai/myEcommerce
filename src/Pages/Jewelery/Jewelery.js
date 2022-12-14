import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Featured from '../../Images/jeweleryimg.png'
import '../MensCollection/MensCollection.css'
import { Link } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa';;


const Jewelery = () => {
    const [jewelery, setJewelery] = useState()
    

    

    useEffect (()=>{
        const fetchJewelery = () => {
            axios.get('https://fakestoreapi.com/products')
            .then(data => {
                
                const filteredData = data.data.filter(fil => fil.category === "jewelery")
                console.log(data)
                setJewelery(filteredData)
            
            })
        }
        fetchJewelery()
    }, [])

  return (
    <div className='mens_Products'>
      <div className='featuredimg_container'>
      <img className='featured_img' src={Featured} alt="featured_image"></img></div>
      <div className='mapping_Container'>{jewelery? jewelery.map((data)=>{
        return (
           <div className='mens_Mapping' key={data.id}>
                <Link to="/accessories"><img src={data.image} alt='img'></img>
                <h1>{data.title}</h1></Link>
                <p>${data.price}</p>
                <button>Add to Cart</button>
            </div>
        )
      }): <div className='spinner'><FaSpinner className='spin'/></div>}</div>
    </div>
  )
}

export default Jewelery