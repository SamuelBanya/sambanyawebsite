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
        <div data-theme="greytheme">
          <div>
            <TopNav />
          </div>
          <div className="h-screen pt-40 md:flex md:justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
