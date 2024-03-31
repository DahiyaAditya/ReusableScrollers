import React, { useState,useEffect } from 'react'
import "./App.css"
import useInfiniteScroll from './useInfiniteScroll'
const Product = () => {
    const [data, setData]=useState([])
    const {totalProduct}=useInfiniteScroll(10);
    
    useEffect(()=>{
        const fetchData = async ()=>{
          const response = await fetch(`https://dummyjson.com/products?limit=${totalProduct}`)
          const fetchedData = await response.json();
          console.log("data",fetchedData.products);
          setData(fetchedData.products);
          
        }
        fetchData()
       },[totalProduct])
  return (
    <>
      <div className='container'>
        {
            data.map((obj,index)=>{
                return(
                    <div className='products'>
                        <img src={obj.thumbnail} className='img'></img>
                        <p>{obj.title}</p>
                    </div>    
                )
            })
        }
      </div>
    </>
  )
}

export default Product