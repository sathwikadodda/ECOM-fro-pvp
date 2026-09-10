import { useState, useEffect } from 'react'
import Card from './Card'

function Products({ query }) {

  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setproducts(data))
  }, [])

  const filteredProducts = products.filter((n) => {
    return n.title.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px'
        }}
      >
        {
          filteredProducts.map((n) => {
            return (
              <Card
                key={n.id}
                name={n.title}
                image={n.image}
                price={n.price}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default Products