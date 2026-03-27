import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'TeamRocket Smart City Reporting',
  description: 'Next.js + Tailwind CDN frontend reporting issues to Supabase-backed tables.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
        <script
          src="https://cdn.tailwindcss.com?plugins=forms,typography"
          defer
        ></script>
      </head>
      <body className="min-h-screen bg-slate-950 text-white">
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black">
          {children}
        </div>
      </body>
    </html>
  );
}
