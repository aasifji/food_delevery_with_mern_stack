import React from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'

const PlaceOrder = () => {
  const{getTotalcartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address'/>
          <input type="text" placeholder='street'/>
          <div className="multi-fields">
            <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalcartAmount().toFixed(2)}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalcartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalcartAmount()===0?0:(getTotalcartAmount() + 2).toFixed(2)};</b>
          </div>
        <button >PROCEED TO PAYMENT</button>
      </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
