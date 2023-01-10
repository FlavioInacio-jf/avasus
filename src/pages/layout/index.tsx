import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type RootLayout = {
  children: ReactNode;
};
export const RootLayout: FC<RootLayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
