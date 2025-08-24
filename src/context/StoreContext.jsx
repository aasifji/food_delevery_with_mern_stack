/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const [cartitems, setcarditems] = useState({})
    const addTocart = (itemid) => {
        if (!cartitems[itemid]) {
            setcarditems((pre) => ({ ...pre, [itemid]: 1 }))
        } else {
            setcarditems((pre) => ({ ...pre, [itemid]: pre[itemid] + 1 }))
        }
    }
    const removeFromCart = (itemid) => {
        setcarditems((pre) => ({ ...pre, [itemid]: pre[itemid] - 1 }))
    }
    const getTotalcartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartitems){
            if(cartitems[item]>0){
            let itemInfo = food_list.find((product)=>product._id===item);
            totalAmount += itemInfo.price* cartitems[item]
            }
        }
        return totalAmount;

    }
    const contextValue = {
        food_list,
        cartitems,
        setcarditems,
        addTocart,
        removeFromCart,
        getTotalcartAmount
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider