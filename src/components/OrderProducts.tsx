import type { TypeGroupByOpts } from "./PageCatalog"

type OrderProductsProps = {
  handleOrderBy: (opt: TypeGroupByOpts) => void
}

const OrderProducts = ({ handleOrderBy }: OrderProductsProps) => {
  return (
    <div style={{ "display": "flex", gap: "5px" }}>
      <p>Ordina per: </p>
      <select name="orderproducts" id="orderproducts" onChange={(e) => handleOrderBy(e.target.value as TypeGroupByOpts)}>
        <option value="none">Nessun ordinamento</option>
        <option value="price-asc">Prezzo ↑</option>
        <option value="price-desc">Prezzo ↓</option>
        <option value="name-asc">Nome A:Z</option>
        <option value="name-desc">Nome Z:A</option>
      </select>
    </div>
  )
}

export default OrderProducts