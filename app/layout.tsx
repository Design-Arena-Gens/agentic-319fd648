import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShaktiFlow Motivator',
  description: 'Daily fitness, yogic wisdom, and discipline cues ? crisp and shareable.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="container py-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">ShaktiFlow Motivator</h1>
            <p className="text-slate-600">Uplifting, rooted, disciplined ? modern yogic motivation to share daily.</p>
          </header>
          {children}
          <footer className="mt-12 text-sm text-slate-500">Created by Sheryl ? ShaktiFlow</footer>
        </div>
      </body>
    </html>
  );
}
