import Navbar from './Navbar';
import { UserModal } from '../components/UserModal';
import Footer from './Footer';

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <UserModal />
    </>
  );
}
