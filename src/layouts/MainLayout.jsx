import { Outlet } from 'react-router';
import SidebarNav from './SidebarNav';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="grid bg-ivory-100 w-full grid-cols-[max-content,minmax(0,1fr)] grid-rows-[max-content,1fr,max-content]">
      <div className="col-start-1 col-span-1 row-start-1 row-span-2">
        <SidebarNav />
      </div>
      <Header />
      <main className="row-start-2 row-span-1 col-start-2 col-span-1 w-full">
        <Outlet />
        <Footer className="text-end" />
      </main>
    </div>
  );
};

export default MainLayout;
