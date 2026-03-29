import { Suspense } from "react"
import Hero from "./components/hero/Hero"
import Mens from "./components/mens/Mens"
import Navbar from "./components/navbar/Navbar"


const MensApi = fetch("mens.json").then(res => res.json())


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<p>Loading...</p>}>
        <Mens MensApi={MensApi}></Mens>
      </Suspense>
    </>
  )
}

export default App
