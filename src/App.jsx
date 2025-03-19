
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {fetchDataFromAPI} from "./utils/api.js"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigurations } from './store/homeSlice.js'

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home"
import Explore from "./pages/explore/Explore"
import Details from "./pages/details/Details"
import SearchResult from "./pages/searchResult/SearchResult"
import PageNotFound from "./pages/404/PageNotFound"

function App() {
  const dispatch = useDispatch();
  const {totalPages} = useSelector((state) => state.home)
  
useEffect(() => {
  fetchDataFromAPI("/movie/popular").then((data) => {
    dispatch(getApiConfigurations(data))
    console.log(data)
  }).catch((err) => {
    console.error(err)
  })
}, [])
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />  
    <Route path='/explore' element={<Explore />} />
    <Route path='/details/:id' element={<Details />} />
    <Route path='/search/:searchQuery' element={<SearchResult />} />
    <Route path='*' element={<PageNotFound />} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
