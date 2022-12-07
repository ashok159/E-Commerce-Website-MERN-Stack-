import React from 'react'

const ItemComponent = ({title, description, price, image, rating}) => {
  return (
    <div className='card'>
      <img src = {image} className="card__image" alt="card"></img> 
      <div className='card__body'>
        <a className='card__title'>{title}</a>
        <p className='card__description'>{description}</p>
        <h3 className='card__price'>${price}</h3>
        <button className='card__btn'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemComponent
