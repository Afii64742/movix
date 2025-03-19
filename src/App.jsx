
import './App.css'
import { useEffect } from 'react'
import {fetchDataFromAPI} from "./utils/api.js"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigurations } from './store/homeSlice.js'
function App() {
  const dispatch = useDispatch();
useEffect(() => {
  fetchDataFromAPI("/movie/popular").then((data) => {
    dispatch(getApiConfigurations(data.results))
    console.log(data)
  }).catch((err) => {
    console.error(err)
  })
}, [])
  return (
    <>
    <h1>App</h1>
    </>
  )
}

export default App
