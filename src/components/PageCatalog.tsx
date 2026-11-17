import { useState } from "react";
import type { TypeProduct } from "../data/products";
import Card from "./Card";
import OrderProducts from "./OrderProducts";
import Searchbar from "./Searchbar";

const products: TypeProduct[] = [
  {
    id: 'aria-runner',
    name: 'Aria Runner',
    category: 'Running',
    colors: ['#ebe7e0', '#243366', '#c9b088'],
    accent: '#2f4fe0',
    prices: [119, 129, 139],
    rating: 4.6,
    reviews: 128,
    limited: true,
    imageUrl: "aria"
  },
  {
    id: 'vento-trail',
    name: 'Vento Trail',
    category: 'Trail',
    colors: ['#5d6e3f', '#7b746a'],
    accent: '#e6d8b2',
    prices: [139],
    rating: 4.4,
    reviews: 76,
    imageUrl: "vento"
  },
  {
    id: 'lago-low',
    name: 'Lago Low',
    category: 'Lifestyle',
    colors: ['#f1efe9', '#1f1f22', '#9bb39b'],
    accent: '#1d1d1f',
    prices: [89, 99, 109],
    rating: 4.8,
    reviews: 214,
    limited: true,
    imageUrl: "lago"
  },
  {
    id: 'cima-pro',
    name: 'Cima Pro',
    category: 'Trail',
    colors: ['#d9692b', '#2b3a4a'],
    accent: '#f3e4c8',
    prices: [159],
    rating: 4.7,
    reviews: 58,
  },
  {
    id: 'brezza-flex',
    name: 'Brezza Flex',
    category: 'Running',
    colors: ['#cfe0f0', '#1f1f22', '#e8b4a0'],
    accent: '#e45d4b',
    prices: [94.5, 104.5, 114.5],
    rating: 4.2,
    reviews: 96,
  },
  {
    id: 'piazza-classic',
    name: 'Piazza Classic',
    category: 'Lifestyle',
    colors: ['#e9dfcf'],
    accent: '#8a5a3c',
    prices: [79],
    rating: 4.5,
    reviews: 302,
  },
];

export type TypeGroupByOpts = "none" | "price-asc" | "price-desc" | "name-asc" | "name-desc"

const PageCatalog = () => {

  const [orderBy, setOrderBy] = useState<TypeGroupByOpts>("none")
  const [search, setSearch] = useState("")


  const handleOrderBy = (opt: TypeGroupByOpts) => {
    setOrderBy(opt)
  }

  const handleSearch = (input: string) => {
    setSearch(input)
  }

  let productsToShow = products

  if (orderBy === "price-asc") {
    productsToShow = products.sort((a, b) => a.prices[0] - b.prices[0])
  }

  if (orderBy === "price-desc") {
    productsToShow = products.sort((a, b) => b.prices[0] - a.prices[0])
  }

  if (orderBy === "name-asc") {
    productsToShow = products.sort((a, b) => a.name.localeCompare(b.name))
  }
  if (orderBy === "name-desc") {
    productsToShow = products.sort((a, b) => b.name.localeCompare(a.name))
  }

  if(search !== "") {
    productsToShow = products.filter(product => {
      return product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  }

  return (
    <div>
      <h2>{orderBy}</h2>
      <Searchbar handleSearch={handleSearch} />
      <div className="flexsb">
        <h1>Sneakers {products.length} Modelli</h1>
        <OrderProducts handleOrderBy={handleOrderBy} />
      </div>
      <div className="cards-container">
        {
          productsToShow.map((product, index) => (
            <Card key={product.id} product={product} bgColor={index % 2 ? "red" : "blue"} />
          ))
        }
      </div>
    </div>
  )
}

export default PageCatalog