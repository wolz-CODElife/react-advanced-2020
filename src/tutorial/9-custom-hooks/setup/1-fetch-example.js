import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'
 
const Example = () => {
  const {loading, products} = useFetch(url)
  console.log(products)
  return (
    <>
      <h3>Products</h3>
      {loading ? <h4>loading...</h4> : 
        <article className="users">
          {products.map((product) => {
            const {name, company, image, price} = product.fields
            return(
              <section key={product.id} className="item">
                {image.map((img) => {
                  const {id, thumbnails, filename, url} = img
                  return (
                    <a key={id} href={url} target="_blank" rel="noopener noreferrer">
                      <img src={thumbnails.small.url} alt={filename} />
                    </a>
                  )
                })}
                <div>                  
                  <h4>
                    {name}
                    <p>${price}</p>
                  </h4>
                  <p>{company}</p>
                </div>
              </section>  
            )}
          )}
        </article>
      }
    </>
  )
}

export default Example
