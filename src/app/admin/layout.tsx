import type { Metadata } from 'next';

import '../globals.css';
import SessionWrapper from '@/components/SessionWrapper';
import GlobalClickSound from '@/components/GlobalClickSound';
import AnimatedBackground from '@/components/AnimatedBackground';


export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Admin management for Pokémon TCG',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <AnimatedBackground
        variant="default"
        intensity="medium"
        particles={true}
      />
      <GlobalClickSound />
      <SessionWrapper>
        <main className="relative z-10">{children}</main>
      </SessionWrapper>
    </div>
  );
}
