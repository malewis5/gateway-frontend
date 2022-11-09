import { Banner } from '../components/Banner';
import Hero from '../components/Hero';
import { LoginModal } from '../components/LoginModal';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Banner />
        <LoginModal />
      </main>
    </>
  );
}
