import localFont from 'next/font/local';

export const sora = localFont({
  src: [
    {
      path: '../../public/fonts/Sora-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sora-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sora-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sora-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    // Add more weights if needed
  ],
  variable: '--font-sora',
  display: 'swap',
})

