import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ReeOrg - Transform Your Workforce with Skills Intelligence',
  description: 'ReeOrg gives you the power to analyze skills, design optimal org structures, and make data-driven talent decisions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}