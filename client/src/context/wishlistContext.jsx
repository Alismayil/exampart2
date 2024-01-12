import React, { createContext, useEffect, useState } from 'react'

export const WishlistContext=createContext()
function WishlistProvider({children}) {
const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])

useEffect(() => {
localStorage.setItem("wishlist", JSON.stringify(wishlist))
}, [wishlist])


function handleAddWishlist(x) {
    const wishlistProduct=wishlist.find((item)=>item._id === x._id)
    if (wishlistProduct) {
        setWishlist(wishlist.filter((item)=>item._id !== x._id))
    }
 else{
    setWishlist([...wishlist , x])
 }
}
function handleDeletWishlist(_id) {
    setWishlist(wishlist.filter((x)=>x._id !== _id))
}
    const data={
        handleDeletWishlist,
        handleAddWishlist, 
        wishlist, 
        setWishlist
    }

  return (
    <WishlistContext.Provider value={data}>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider