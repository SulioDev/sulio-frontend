// app/(pages)/home/layout.js
import ProductDisplay from "@/components/Home/ProductDisplaySection/ProductDisplay";

export const metadata = {
  title: 'Sulio AI - A Seamless Creative Workflow Powered by AI',
  description: 'Sulio AI helps artists automate follower engagement, get smart art recommendations, track transactions, detect fraud, and streamline client communication.',
}

export default function HomeLayout({ children }) {
  return (
    <ProductDisplayLayout>
      {children}
    </ProductDisplayLayout>
  );
}