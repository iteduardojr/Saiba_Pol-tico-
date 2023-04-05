import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// import '../styles/Variaveisreset.module.css'

export default function Home() {
  return (
    <>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap');

            :root {
              --White: #ffffff;
              --DarkBlue: #0041B2;
              --Green: #00FF15;

              // SPACING

              --addingGeneral: 15px 110px;
            }

            * {
              margin: 0;
              padding: 0;
              font-family: 'Jura', sans-serif;
              font-weight: 500;
              font-size: 16px;
            }
    `}</style>

      <Header />
      <Footer />
      
    </>
  )
}
