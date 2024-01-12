import React, { createContext, useEffect, useState } from 'react'

export const BasketContext = createContext()
function BasketProvider({ children }) {

    const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket))
    }, [basket])


    function handleAddBasket(x) {
        const basketProduct = basket.find((item) => item._id === x._id)
        if (basketProduct) {
            basketProduct.count++
            basketProduct.total=basketProduct.count*basketProduct.price
            setBasket([...basket])
        }
        else {
            const total=x.price
            setBasket([...basket, {...x , count:1, total:total}])
        }
    }
    function handleDeletBasket(_id) {
        setBasket(basket.filter((x) => x._id !== _id))
    }
    function handleAllDetele() {
        setBasket([])
    }
    const data = {
        handleDeletBasket,
        handleAddBasket,
        basket,
        setBasket,
        handleAllDetele
    }

    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider