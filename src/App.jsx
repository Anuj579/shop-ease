import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Category from './components/Category'
import TrendingProducts from './components/TrendingProducts'
import NearbyStores from './components/NearbyStores'

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <Category />
      <TrendingProducts/>
      <NearbyStores />
    </>
  )
}

export default App
