import React, { useContext } from 'react'
import { BasketContext } from '../context/basketContext'
import { RiDeleteBin7Fill } from "react-icons/ri";

function BasketPage() {
  const{basket , handleDeletBasket,handleAllDetele}=useContext(BasketContext)

  return (
    <div className='wishlistPage'>
      <button onClick={handleAllDetele} style={{fontSize:'20px', padding:"10px", border:"none", cursor:"pointer"}}>
      <RiDeleteBin7Fill />
      </button>
    {basket && basket.map((item)=>(
      <div className='wishlistCart'>
        <img src={item.image} alt="" />
        <p>{item.name}</p>  
        <p>${item.price}</p>
        <button onClick={()=>handleDeletBasket(item._id)}>Delete</button>
        <p>Count:{item.count}</p>
        <p>Total:${item.total}</p>
      </div>
    ))}
</div>
  )
}

export default BasketPage