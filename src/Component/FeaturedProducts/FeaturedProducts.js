import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './FeaturedProducts.css'
import { Link } from 'react-router-dom'
import Featured from '../../Images/featured.png'
import {useDispatch} from 'react-redux';
import { useStateValue } from '../../StateProvider';

const FeaturedProducts = () => {
    const [featured, setFeatured] = useState([])
    const [{basket}, dispatch] = useStateValue();

    console.log('this is the cart', basket)
    const fetchFeatured = () => {
        axios.get('https://fakestoreapi.com/products?limit=3')
        .then(data =>{
            setFeatured(data.data)
        })
    }

    const addToCart = () =>{
        console.log(featured)
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:featured.id,
                title:featured.title,
                image:featured.image,
                price:featured.price,
            }
        })
    }

useEffect (()=>{
    fetchFeatured()
}, [])

  return (
    <div className='featured_Products'>
      <div className='featuredimg_container'>
      <img className='featured_img' src={Featured} alt="featured_image"></img></div>
      <div className='mapping_Container'>{featured.map((item)=>{
        return (
           <div className='featured_Mapping' key={item.id}>
                <Link to=""><img src={item.image} alt='img'></img>
                <h1>{item.title}</h1></Link>
                <p>${item.price}</p>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        )
      })}</div>
    </div>
  )
}

export default FeaturedProducts
