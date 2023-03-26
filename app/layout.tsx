import { Inter, Roboto_Flex, Roboto_Mono } from "next/font/google";
import Footer from "./(components)/footer";
import Navbar from "./(components)/navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio | Gregory Freitas",
  description: "Website to showcase the work of Gregory Freitas",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Establish the memory map for projects
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
