import React from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimanials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'

const App = () => {

  const [playVideo, setPlayVideo] = React.useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title Subtitle="OUR PROGRAM" Title="What we offer"/>
        <Programs />
        <About setPlayVideo={setPlayVideo} />
        <Title Subtitle="Gallery" Title="Campus Photo"/>
        <Campus />
        <Title Subtitle="testimonials" Title="What student say"/>
        <Testimonials />
        <Title Subtitle="Contact Us" Title="Get in Touch"/>
        <Contact />
        <Footer />
      </div>
     <Video playVideo={playVideo} setPlayVideo={setPlayVideo} />
      
    </div>
  )
}

export default App
