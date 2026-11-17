import type { TypeCartItem } from "../../data/products"

type CartItemProps = {
  cartItem: TypeCartItem
  handleRemove: (idProduct: string) => void
  handleAdd: (idProduct: string) => void
}

const CartItem = ({ cartItem, handleAdd, handleRemove }: CartItemProps) => {
  return (
    <div>
      <p>{cartItem.product.name}</p>
      <p>Qty: {cartItem.qty}</p>
      <p>Prezzo: {cartItem.product.prices[0] * cartItem.qty}</p>
      <button onClick={() => handleRemove(cartItem.product.id)}>🗑️</button>
      <button onClick={() => handleAdd(cartItem.product.id)}>+</button>
    </div>
  )
}

export default CartItem