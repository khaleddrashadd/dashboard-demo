import { Outlet } from 'react-router';
import SidebarNav from './SidebarNav';
import Header from './Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="grid bg-ivory-100 w-full grid-cols-[max-content,minmax(0,1fr)] grid-rows-[max-content,1fr,max-content]">
      <SidebarNav />
      <Header />
      <main>
        <Outlet />
        <Footer className="text-end" />
      </main>
    </div>
  );
};

export default MainLayout;
