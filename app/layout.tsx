import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        <Navbar />
      <main className='relative overflow-hidden'>
        {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
