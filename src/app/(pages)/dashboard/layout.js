import { sora } from '../../fonts'

export default function DashboardLayout({ children }) {
  return (
    <div className={`${sora.variable} font-sans min-h-screen bg-gray-100/40`}>
      {children}
    </div>
  )
}
