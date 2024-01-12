import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './detail.scss'

function DetailPage() {
  const {id}=useParams()

  const [detail, setDetail] = useState()

async function handleProduct() {
  const res=await axios.get(`http://localhost:4001/exampart2/${id}`)
  setDetail(res.data)
}

useEffect(() => {
 handleProduct()
}, [])

  return (
    <div className='detailPage'>
        {
          detail ?
          <div className='detailBox'>
          <img src={detail.image} alt="" />
          <p>{detail.name}</p>
          <p>${detail.price}</p>
          </div>
          :""
        }
    </div>
  )
}

export default DetailPage