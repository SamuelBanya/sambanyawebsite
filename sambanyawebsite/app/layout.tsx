import '@/app/ui/global.css';
import TopNav from '@/app/ui/home/top-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div
          data-theme="greytheme"
          className="flex h-screen flex-col md:flex-row md:overflow-hidden"
        >
          <div className="w-full flex-none md:w-64">
            <TopNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
