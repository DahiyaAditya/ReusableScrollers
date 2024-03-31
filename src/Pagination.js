import React, { useState } from 'react'

const Pagination = ({handlePagedata,totlProduct,productPerpage}) => {
    const [currentPage, setCurrentPage]=useState(1);
    const prev =()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1);
        }
        handlePagedata(currentPage)
    }
    const next =()=>{
        if(currentPage<TotalPages){
            setCurrentPage(currentPage+1);
        }
        handlePagedata(currentPage)

        
    }
    const changePage=(index)=>{
        console.log(index);
        setCurrentPage(index)
    }
    handlePagedata(currentPage)
    const TotalPages=Math.ceil(totlProduct/productPerpage);
    const pages=[];
    for(let i=1; i<=TotalPages; i++){
        pages.push(i)
    }
  return (
    <>
    <div className='pagination'>
        <button onClick={prev}>prev</button>
        {
            pages.map((obj,index)=>{
                return(
                    <div className='page' onClick={()=>changePage(index+1)}>
                        {obj}
                    </div>    
                )
            })
        }
        <button onClick={next}>Next</button>
    </div>
    </>
  )
}

export default Pagination