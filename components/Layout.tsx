import Navbar from './Navbar';
import { UserModal } from '../components/UserModal';

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <UserModal />
    </>
  );
}
