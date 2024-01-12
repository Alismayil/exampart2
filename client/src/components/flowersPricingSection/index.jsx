import React, { useContext, useEffect, useState } from 'react'
import './flowersPricingSection.scss'
import axios from 'axios'
import { WishlistContext } from '../../context/wishlistContext'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { BasketContext } from '../../context/basketContext';
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";

function FlowersPricingSection() {

  const [product, setProduct] = useState([])

  const { handleAddWishlist, wishlist } = useContext(WishlistContext)
  const { handleAddBasket, basket } = useContext(BasketContext)

  async function getProduct() {
    const res = await axios.get("http://localhost:4001/exampart2")
    setProduct(res.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <section id='flowersPricingSection'>
      <div className="flowersPricingSectionUpbox">
        <span>Devoted to wonderful beauty</span>
        <p>Flowers Pricing</p>
      </div>
      <div className="flowersPricingSectionDownbox">
        {
          product && product.map((item) => (
            <div className="flowersBox">
              <div className="flowersImageBox">
                <img src={item.image} alt="" />
              </div>
              <div className="flowersTextBox">
                <p>{item.name}</p>
                <span>${item.price}</span>
              </div>
              <div className="btnsBox">
                <button onClick={() => handleAddWishlist(item)}>
                  {wishlist.find((x) => x._id === item._id) ? <GoHeartFill />  : <GoHeart />}
                </button>
                <button onClick={()=>handleAddBasket(item)}>
                {basket.find((x) => x._id === item._id) ?<BsFillCartCheckFill /> :  <BsFillCartPlusFill /> }
                </button>
                <Link to={`/detail/${item._id}`}>
                <button><IoIosSearch /></button>
                </Link >
              </div>
            </div>

          ))
        }

      </div>
      {/* <div className="flowersPricingSectionDownbox">
        {
          product && product.map((item) => (
            <div className="flowersBox">
              <div className="flowersImageBox">
                <img src={item.image} alt="" />
              </div>
              <div className="flowersTextBox">
                <p>{item.name}</p>
                <span>${item.price}</span>
              </div>
              <div className="btnsBox">
                <button onClick={() => handleAddWishlist(item)}>
                  {wishlist.find((x) => x._id === item._id) ? <GoHeart /> : <GoHeartFill />}
                </button>
                <button onClick={()=>handleAddBasket(item)}>
                {basket.find((x) => x._id === item._id) ?<BsFillCartCheckFill /> :  <BsFillCartPlusFill /> }
                </button> 
                <Link to={`/detail/${item._id}`}>
                <button><IoIosSearch /></button>
                </Link >
              </div>
            </div>

          ))
        }

      </div> */}

    </section >
  )
}

export default FlowersPricingSection