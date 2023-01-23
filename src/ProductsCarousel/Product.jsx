import React from 'react'

const Product = (props) => {
  return (
    <div className='card'>
    <img
        className='product--image'
        src={props.url}
        alt='product image'
    />
    <h2>
        {props.name}
    </h2>
    <p className='price'>
        {props.price}
    </p>
    <p> {props.description} </p>
    <p>
        <button>
            Añadir al carrito
        </button>
    </p>
</div>
  )
}

export default Product
