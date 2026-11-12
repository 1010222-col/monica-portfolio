import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Monica Lasprilla | Creative Project Manager',
  description: 'Bringing people, ideas, and production together. Explore Monica Lasprilla’s work in creative production, media, and project management.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
