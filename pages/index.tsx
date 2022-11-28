import { useSession } from '@supabase/auth-helpers-react';
import { Banner } from '../components/Banner';
import Hero from '../components/Hero';
import Menu from '../components/Menu';

export default function Home() {
  const session = useSession();
  return (
    <>
      <main>
        <Hero />
        {/* {!session && <Banner />} */}
        <div className="p-10" id={'menu'}>
          <Menu />
        </div>
      </main>
    </>
  );
}
