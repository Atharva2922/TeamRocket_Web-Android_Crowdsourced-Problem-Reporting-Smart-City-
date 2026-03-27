import type { ReactNode } from 'react';
import './globals.css';
import 'leaflet/dist/leaflet.css';

export const metadata = {
  title: 'TeamRocket Smart City Reporting',
  description: 'Next.js + Tailwind CDN Smart City issue reporting admin UI',
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
      <body className="min-h-screen bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
