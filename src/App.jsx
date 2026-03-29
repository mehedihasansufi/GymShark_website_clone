import { Suspense } from "react"
import Hero from "./components/hero/Hero"
import Mens from "./components/mens/Mens"
import Navbar from "./components/navbar/Navbar"
import WelcomeToYourEdit from "./components/welcomeToYourEdit/WelcomeToYourEdit"
import Popular from './components/popular/Popular'


const MensApi = fetch("mens.json").then(res => res.json())
const welcomeToYourEditApi=fetch("wclcomeToYourEdit.json").then(res=> res.json())


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<p>Loading...</p>}>
        <Mens MensApi={MensApi}></Mens>
      </Suspense>

      <Suspense fallback={<p>loading...</p>}>
         <WelcomeToYourEdit welcomeToYourEditApi={welcomeToYourEditApi}></WelcomeToYourEdit>
      </Suspense>

      <Popular></Popular>

      <div className=" mb-10"></div>
    </>
  )
}

export default App
