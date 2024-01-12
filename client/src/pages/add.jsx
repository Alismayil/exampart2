import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import './add.scss'
import axios from 'axios'

function AddPage() {
  const [name, setName] = useState([])
  const [image, setImage] = useState([])
  const [price, setPrice] = useState([])
  const [product, setProduct] = useState([])

  async function getProduct() {
    const res = await axios.get("http://localhost:4001/exampart2")
    setProduct(res.data)
  }

  useEffect(() => {
    getProduct()
  }, [])

  async function handleAddProduct() {
    await axios.post("http://localhost:4001/exampart2", {
      name: name,
      image: image,
      price: price
    })
  }
  async function handleDeleteProduct(_id) {
    await axios.delete(`http://localhost:4001/exampart2/${_id}`)
    getProduct()
  }

  return (
    <section id='addPage'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
      <h1>Add</h1>
      <form action="">
        <input type="text" placeholder='Name' required onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Price' required onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='Image' required onChange={(e) => setImage(e.target.value)} />
        <button onClick={handleAddProduct}>Add</button>
      </form>


      <thead >
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>

        {product && product.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.price}$</td>
            <td><button onClick={() => handleDeleteProduct(item._id)}>Delete</button></td>
          </tr>
        ))}

      </tbody>


    </section>
  )
}

export default AddPage