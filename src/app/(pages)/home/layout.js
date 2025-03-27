import Navbar from "@/components/Home/Navbar/Navbar"

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
