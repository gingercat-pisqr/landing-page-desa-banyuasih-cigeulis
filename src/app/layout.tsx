import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Banyuasih Cigeulis",
  description: "Website Profil Desa Banyuasih Cigeulis Pandeglang",
  authors: [{name:"Rakha Mulia Pratama"}],
  creator: "Rakha Mulia Pratama",
  keywords: ["Pantai", "Beach", "Banyuasih", "Cigeulis", "Pandeglang", "Banten", "Wisata", "Karang", "Desa Wisata", "Wonderful Indonesia", ""],
  icons: [{
    url: "/favicon.ico",
    href: "/favicon.ico"
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className+" text-white"}>
        <Navbar/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
