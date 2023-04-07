import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Footer />
    </>
  )
}
