import { useSession } from '@supabase/auth-helpers-react';
import { Banner } from '../components/Banner';
import Hero from '../components/Hero';

export default function Home() {
  const session = useSession();
  return (
    <>
      <main>
        <Hero />
        {!session && <Banner />}
      </main>
    </>
  );
}
