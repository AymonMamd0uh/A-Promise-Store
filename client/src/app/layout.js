import "./globals.css";

import { Playfair_Display, Poppins } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "A Promise Store",
  description: "Luxury modest fashion store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable}`}>
        <CartProvider>
          <Navbar />

          {children}

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
