
import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: ' Print Hub Solution',
  description: ' Print Hub Solution',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
        {/* <Navbar /> Navbar should be rendered before children */}
        <Navbar/>
        <main>{children}</main> {/* Main content area for the children */}
        <Footer/> {/* Footer should be at the bottom of the page */}
      </body>
    </html>
  );
}
