/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)
const StoreContextProvider = (props) =>{
    const [cartitems,setcarditems ] = useState({})
    const addTocart = (itemid)=>{
        if(!cartitems[itemid]){
            setcarditems((pre)=>({...pre,[itemid]:1}))
        }else{
            setcarditems((pre)=>({...pre,[itemid]:pre[itemid]+1}))
        }
    }
    const removeFromCart = (itemid)=>{
        setcarditems((pre)=>({...pre,[itemid]:pre[itemid]-1}))
    }
    const contextValue = {
        food_list,
        cartitems,
        setcarditems,
        addTocart,
        removeFromCart
    }
    useEffect(()=>{
console.log(cartitems);

    },[cartitems])
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider