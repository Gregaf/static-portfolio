import Navbar from "./(components)/navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio | Gregory Freitas",
  description: "Website to showcase the work of Gregory Freitas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
