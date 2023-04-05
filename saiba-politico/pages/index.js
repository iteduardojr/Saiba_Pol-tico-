import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// import '../styles/Variaveisreset.module.css'

export default function Home() {
  return (
    <>
    <style jsx global>{`
            body {
              margin: 0;
              padding: 0;
            }
    `}</style>
    
      <Header />
      <Footer />
    </>
  )
}
