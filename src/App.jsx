
import './App.css'
import { useEffect } from 'react'
import {fetchDataFromAPI} from "./utils/api.js"
function App() {
useEffect(() => {
  fetchDataFromAPI("/movie/popular").then((data) => {
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
