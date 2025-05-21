
import Navbar from './Navbar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <Navbar />
      <main className="p-4 max-w-4xl mx-auto">{children}</main>
    </div>
  );
}
