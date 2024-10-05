
import './App.css'
import { Card } from './Components/Card'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import NumberCard from './Components/NumberCard'
import { Projects } from './Components/Projects'
import Review from './Components/Review'
import Service from './Components/Service'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Hero/>
      <Service />
      <NumberCard />
      <Projects />
      {/* <Review/> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
