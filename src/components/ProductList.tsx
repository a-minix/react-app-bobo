import { useEffect, useState } from "react"

type Props = {}

type TypeProduct = {
  id: number
  title: string
}

const ProductList = (props: Props) => {

  const [product, setProduct] = useState<TypeProduct | null>(null)

  const [idProduct, setIdProduct] = useState(0)
  const [pippo, setPippo] = useState(false)
  useEffect(() => {
    const getProducts = async () => {
      console.log("pippo");

      const response = await fetch(`https://fakestoreapi.com/products/${idProduct}`)
      const data = await response.json()
      setProduct(data)
    }

    getProducts()
  }, [])

  return (
    <div>
      <button onClick={() => setIdProduct(idProduct + 1)}>Effect! {idProduct}</button>
      <button onClick={() => setPippo(!pippo)}>Effect! {pippo}</button>
      {
        <p>{product?.title ?? "Nessun prodotto"}</p>
      }
    </div>
  )
}

export default ProductList