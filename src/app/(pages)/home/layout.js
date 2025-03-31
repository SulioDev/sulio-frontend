import Navbar from '@/components/Navbar/Navbar'

export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
