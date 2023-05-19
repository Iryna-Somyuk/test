import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <>
    <div className='mx-auto min-h-screen flex flex-col'>
      <AppBar />
      <main className='container bg-hero-pattern bg-cover bg-center flex md:flex-grow justify-center w-full py-4  md:justify-between items-center'>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
      <Footer />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
