import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Header } from '../components/Head';
import { Navbar } from '../components/NavBar';

export default function Home() {
  const router = useRouter();

  const [peerId, setPeerId] = useState<string>();

  return (
    <div>
      <Header />
      <Navbar />
      <input
        placeholder='peer id'
        onChange={(e) => setPeerId(e.target.value)}
      />
      {peerId}
      <button
        className='bg-slate-200 p-2'
        onClick={() => router.push(`messages/${peerId}`)}
      >
        View messages
      </button>
    </div>
  );
}