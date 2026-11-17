import type { TypeProduct } from "../data/products"

type CardProps = {
  product: TypeProduct;
}

const Card = ({product}: CardProps) => {
  return (
    <div className="card">
      <img src={`../../public/${product.imageUrl}.png`} alt={product.name} />
      <div>
        <p>{product.category}</p>
        <h1>{product.name}</h1>
        <div>
          {
            product.colors.map(color => (
              <div key={color} style={{ backgroundColor: color, width: "15px", height: "15px", borderRadius: "5px" }}></div>
            ))
          }
        </div>
        <p>{product.prices.length > 1 && "da"}{product.prices[0]}</p>
        <p>★{product.rating} ({product.reviews})</p>
      </div>
    </div>
  )
}

export default Card