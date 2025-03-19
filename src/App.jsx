
import './App.css'
import { useEffect } from 'react'
import {fetchDataFromAPI} from "./utils/api.js"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigurations } from './store/homeSlice.js'
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
  <h1>{totalPages || "Not Available"}</h1>
    </>
  )
}

export default App
