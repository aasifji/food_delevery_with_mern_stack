import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMunu from '../../components/ExploreMenu/ExploreMunu'
import FoodDispay from '../../components/FoodDisplay/FoodDispay'
const Home = () => {
  const [category,setcategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMunu category={category} setcategory={setcategory}/>
      <FoodDispay category={category}/>
    </div>
  )
}

export default Home
