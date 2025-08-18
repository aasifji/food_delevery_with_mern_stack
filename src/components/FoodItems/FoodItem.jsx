import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {
  // const [itemcount ,setitemcount] = useState(0)
  const {cartitems, addTocart, removeFromCart} = useContext(StoreContext);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {
          !cartitems[id] ?
          <img src={assets.add_icon_white} alt="" className='add' onClick={()=>addTocart(id)}/>
          :
          <div className="food-item-counter">
            <img src={assets.remove_icon_red} alt="" onClick={()=>removeFromCart(id)}/>
            <p>{cartitems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={()=>addTocart(id)}/>
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
      
    </div>
  )
}

export default FoodItem
