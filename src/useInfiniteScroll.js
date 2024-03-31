import React, { useEffect, useState } from 'react'

const useInfiniteScroll = () => {
  const [totalProduct, setTotalProduct]=useState(10)
  useEffect(()=>{
     const handleScroll=()=>{
         if(window.innerHeight +document.documentElement.scrollTop +1>= document.documentElement.scrollHeight){
          setTotalProduct(prev=>prev+10)
         }
     }

    window.addEventListener("scroll",handleScroll)
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[totalProduct])
  return {
    totalProduct
  }
}

export default useInfiniteScroll