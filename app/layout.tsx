import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LogLift',
  description: '피트니스 센터 회원관리 시스템',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
