import Navbar from "../components/Home/Navbar/Navbar";
import './globals.css';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-l from-black/50 to-black text-white">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
