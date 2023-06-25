import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/Logo.png'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className='items-baseline py-16 text-gray-400 px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px] flex-wrap gap-6 sm:gap-0 bg-gradient-to-r from-blue-800 via-sky-800 to-green-700'>

        <div className='flex justify-between'>
          <div className=''>
            <Image src={Logo} width={90} />
          </div>
          <div className=''>
            <span className='text-current hover:text-white pb-8 '>Desenvolvedores </span>
          </div>
          <div className=''>
            <span className='text-current hover:text-white pb-8 '>©2023 SaibaPolitico</span>
          </div>
        </div>

        <div className='flex gap-5 justify-center'>
          <span className='flex gap-1 items-center'><Link className='no-underline font-bold bg-clip-text text-transparent hover:text-white bg-gradient-to-r from-slate-200 to-green-400' target='_blank' rel="noreferrer" href="https://github.com/MarcosSkL">Marcos Bezerra 211142900-26</Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='https://www.instagram.com/markin36/'><FaInstagram className='w-4 h-4 cursor-pointer' /></Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='https://github.com/MarcosSkL'><FaGithub className='w-4 h-4 cursor-pointer' /></Link></span>

          <span className='flex gap-1 items-center'><Link className='no-underline font-bold bg-clip-text text-transparent hover:text-white bg-gradient-to-r from-slate-200 to-green-400' target='_blank' rel="noreferrer" href="https://github.com/MarcosSkL">Brenno Alves 212142900-11</Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='#'><FaInstagram className='w-4 h-4 cursor-pointer' /></Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='#'><FaGithub className='w-4 h-4 cursor-pointer' /></Link></span>
        </div>

        <div className='flex gap-5 justify-center'>
          <span className='flex gap-1 items-center'><Link className='no-underline font-bold bg-clip-text text-transparent hover:text-white bg-gradient-to-r from-slate-200 to-green-400' target='_blank' rel="noreferrer" href="https://github.com/MarcosSkL">Eduardo José 221142900-38</Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='#'><FaInstagram className='w-4 h-4 cursor-pointer' /></Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='#'><FaGithub className='w-4 h-4 cursor-pointer' /></Link></span>

          <span className='flex gap-1 items-center'><Link className='no-underline font-bold bg-clip-text text-transparent hover:text-white bg-gradient-to-r from-slate-200 to-green-400' target='_blank' rel="noreferrer" href="https://github.com/MarcosSkL">Renato Ostemberg 211142900-27</Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='#'><FaInstagram className='w-4 h-4 cursor-pointer' /></Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='#'><FaGithub className='w-4 h-4 cursor-pointer' /></Link></span>
        </div>

        <div className='flex gap-5 justify-center'>
          <span className='flex gap-1 items-center'><Link className='no-underline font-bold bg-clip-text text-transparent hover:text-white bg-gradient-to-r from-slate-200 to-green-400' target='_blank' rel="noreferrer" href="https://github.com/MarcosSkL">Felipe Vieira 221142900-38</Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='#'><FaInstagram className='w-4 h-4 cursor-pointer' /></Link>
            <Link className='text-gray-400 text-current hover:text-white' target='_blank' href='#'><FaGithub className='w-4 h-4 cursor-pointer' /></Link></span>
        </div>

        <div className='flex gap-3 justify-stretch'>
          <span className='mb-2 md:mb-1'>©2023 - Todos os direitos reservados.</span>
          <Link href={'#'} className='no-underline text-current hover:text-white'>Privacidade</Link>
          <Link href={'#'} className='no-underline text-current hover:text-white'>Ajuda</Link>
        </div>

      </footer >
    </>
  );
};

export default Footer;