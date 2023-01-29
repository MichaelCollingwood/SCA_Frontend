import { useRouter } from 'next/router';
import React from 'react';
import { Header } from '../components/Head';
import { Navbar } from '../components/NavBar';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <Navbar />
      Error!
    </div>
  );
}