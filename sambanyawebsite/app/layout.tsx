// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: { template: '%s | Acme Dashboard', default: 'Acme Dashboard' },
//   description: 'The official Next.js Course Dashboard, built with App Router',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }

import '@/app/ui/global.css';
import SideNav from '@/app/ui/home/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="greytheme"
      className="flex h-screen flex-col md:flex-row md:overflow-hidden"
    >
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
