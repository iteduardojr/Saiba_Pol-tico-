import Carousel from '../components/Carousel'
import CarouselSmall from '../components/CarouselSmall'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Wellcome from '../components/Wellcome'


export default function Home() {
  return (
    <>
      <Header />
      
        <Wellcome />
        <Carousel />
        <CarouselSmall />
      
      <Footer />
    </>
  )
}
