import React from 'react'

const ProductsList = ({product}) => {
  return (
    <tr>
        <td><img  src='https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?w=996' /></td>
        <td >{product.quantity} </td>
        <td>{product.size}</td>
        <td> <div className='color' style={{backgroundColor:product.color_hex, padding:'0'}}> </div></td>
        <td>{product.unit_price} $</td>

    </tr>
  )
}

export default ProductsList