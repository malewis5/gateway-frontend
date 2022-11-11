import { useSession } from '@supabase/auth-helpers-react';
import { Banner } from '../components/Banner';
import Hero from '../components/Hero';
import { UserModal } from '../components/UserModal';
import Navbar from '../components/Navbar';

export default function Home() {
  const session = useSession();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {!session && <Banner />}

        <UserModal />
      </main>
    </>
  );
}
