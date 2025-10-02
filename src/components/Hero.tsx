// src/components/Hero.tsx

import Link from "next/link";
import Image from "next/image";
import logo from '../public/logo2.png';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <header className="py-6 md:py-12 bg-chess-black shadow-md">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <nav className="flex items-center justify-start space-x-4 md:space-x-8">
                <Link href="/">
                  <a className="text-chess-white hover:text-chess-green p-2 transition text-lg">Home</a>
                </Link>
                <Link href="/#products">
                  <a className="text-chess-white hover:text-chess-green p-2 transition text-lg">Furniture</a>
                </Link>
                <Link href="/about">
                  <a className="text-chess-white hover:text-chess-green p-2 transition text-lg">About</a>
                </Link>
                <Link href="/terms-of-sale">
                  <a className="text-chess-white hover:text-chess-green p-2 transition text-lg">Terms of Sale</a>
                </Link>
              </nav>
              <Link href="/">
                <a className="flex items-center text-chess-white">
                  <Image src={logo} width={50} height={50} alt={"Furniture Store Logo"} title={`Furniture Store Logo`} />
                  <span className="text-lg font-medium ml-2">Premium Furniture</span>
                </a>
              </Link>
            </div>
          </div>
        </header>
        <main className="py-8 md:py-16 bg-chess-white">
          <div className="max-w-6xl mx-auto px-6">{children}</div>
        </main>
        <footer className="max-w-6xl mx-auto px-6 bg-chess-black">
          <div className="py-8 border-t border-chess-brown text-center flex flex-col md:flex-row items-center justify-between">
            <p className="text-chess-white text-sm">
              Premium Furniture Store
              <a href="https://headlessdropshipping.com" title="Learn more about how this site was made" target="_blank" rel="noopener noreferrer" className="ml-0.5 text-chess-green hover:text-chess-brown">Powered by Headless Commerce</a>
              , Built by <a title="Follow the creator on Twitter" target="_blank" rel="noopener noreferrer" className="ml-0.5 text-chess-green hover:text-chess-brown">moonpi</a>
            </p>
            <nav className="flex items-center justify-end space-x-4 md:space-x-8">
              <Link href="/about">
                <a className="text-chess-white hover:text-chess-green p-2 transition text-sm">FAQS</a>
              </Link>
              <Link href="/terms-of-sale">
                <a className="text-chess-white hover:text-chess-green p-2 transition text-sm">Terms of Sale</a>
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;