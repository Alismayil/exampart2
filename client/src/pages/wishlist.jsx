import React, { useContext } from 'react'
import { WishlistContext } from '../context/wishlistContext'
import './wishlist.scss'

function WishlistPage() {
    const{wishlist , handleDeletWishlist}=useContext(WishlistContext)
  return (
    <div className='wishlistPage'>
        {wishlist && wishlist.map((item)=>(
          <div className='wishlistCart'>
            <img src={item.image} alt="" />
            <p>{item.name}</p>  
            <p>${item.price}</p>
            <button onClick={()=>handleDeletWishlist(item._id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default WishlistPage