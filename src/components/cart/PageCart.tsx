import { useState } from "react"
import type { TypeCartItem } from "../../data/products"
import CartItem from "./CartItem"

const cartItems: TypeCartItem[] = [
  {
    product: {
      id: 'aria-runner',
      name: 'Aria Runner',
      category: 'Running',
      colors: ['#ebe7e0', '#243366', '#c9b088'],
      accent: '#2f4fe0',
      prices: [119, 129, 139],
      rating: 4.6,
      reviews: 128,
      limited: true,
    },
    qty: 1
  },
  {
    product: {
      id: 'vento-trail',
      name: 'Vento Trail',
      category: 'Trail',
      colors: ['#5d6e3f', '#7b746a'],
      accent: '#e6d8b2',
      prices: [139],
      rating: 4.4,
      reviews: 76,
    },
    qty: 2
  },
  {
    product: {
      id: 'lago-low',
      name: 'Lago Low',
      category: 'Lifestyle',
      colors: ['#f1efe9', '#1f1f22', '#9bb39b'],
      accent: '#1d1d1f',
      prices: [89, 99, 109],
      rating: 4.8,
      reviews: 214,
      limited: true,
    },
    qty: 3
  },
  {
    product: {
      id: 'cima-pro',
      name: 'Cima Pro',
      category: 'Trail',
      colors: ['#d9692b', '#2b3a4a'],
      accent: '#f3e4c8',
      prices: [159],
      rating: 4.7,
      reviews: 58,
    },
    qty: 4
  }
]

const PageCart = () => {

  const [cart, setCart] = useState(cartItems)

  const handleAdd = (idProduct: string) => {
    const item = cart.find((i) => i.product.id === idProduct)
    console.log(item);

    setCart([...cart.filter(i => i.product.id !== idProduct), { ...item, qty: item!.qty + 1 } as TypeCartItem])
    console.log("CART: ", cart)
  }

  const handleRemove = (idProduct: string) => {
    const item = cart.find((i) => i.product.id === idProduct)

    if (item?.qty === 1)
      setCart([...cart.filter(i => i.product.id !== idProduct)])
    else
      setCart([...cart.filter(i => i.product.id !== idProduct), { ...item, qty: item!.qty - 1 } as TypeCartItem])
  }


  return (
    <div>
      <h1>
        {cart.reduce((total, acc) => 
          total + acc.product.prices[0] * acc.qty, 0) 
        }</h1>
      <div>
        {cart.sort((a, b) => a.product.id.localeCompare(b.product.id)).map(item => (
          <CartItem key={item.product.id} cartItem={item} handleAdd={handleAdd} handleRemove={handleRemove} />
        ))}
      </div>
    </div>
  )
}

export default PageCart