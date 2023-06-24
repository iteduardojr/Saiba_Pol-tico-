import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='end-0 w-full py-16 text-gray-400 px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px] flex justify-between items-center flex-wrap gap-6 sm:gap-0 bg-gradient-to-r from-blue-700 via-sky-700 to-green-700'>
        <div className='flex gap-6 mt-auto'>
          <Link className='text-gray-400 text-current hover:text-white' href='#'><FaYoutube className='w-4 h-4 cursor-pointer' /></Link>
          <Link className='text-gray-400 text-current hover:text-white' href='#'><FaTwitter className='w-4 h-4 cursor-pointer' /></Link>
          <Link className='text-gray-400 text-current hover:text-white' href='#'><FaFacebookF className='w-4 h-4 cursor-pointer' /></Link>
          <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='https://www.instagram.com/markin36/'><FaInstagram className='w-4 h-4 cursor-pointer' /></Link>
          <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='https://github.com/MarcosSkL'><FaGithub className='w-4 h-4 cursor-pointer' /></Link>
        </div>
        <div>
          <p className='mb-2 md:mb-1'>©2023 SaibaPolitico - Todos os direitos reservados.</p>

          <div className='flex md:justify-end justify-start gap-4'>
            <Link href={'#'} className='no-underline text-current hover:text-white'>Privacidade</Link>
            <Link href={'#'} className='no-underline text-current hover:text-white'>Ajuda</Link>
        

          </div>
        </div>
        <p className='text-current hover:text-white pb-8 '>Desenvolvido por <Link className='no-underline font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500' target='_blank' rel="noreferrer" href="https://github.com/MarcosSkL">Marcos Bezerra</Link></p>
      </footer>
    </>
  );
};

export default Footer;