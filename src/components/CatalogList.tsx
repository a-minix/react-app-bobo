import type { TypeProduct } from "../data/products"
import Card from "./Card"

type CatalogListProps = {
  products: TypeProduct[]
}

const CatalogList = ({ products }: CatalogListProps) => {
  return (
     <div className="cards-container">
      {
        products.map((product) => (
          <Card key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default CatalogList