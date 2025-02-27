import { useState } from 'react';
import { NavLink } from 'react-router';
import ReportIcon from '../assets/icons/report.svg?react';
import LogoIcon from '../assets/icons/logo.svg';
import SidebarNavExpandableItem from './SidebarNavExpandableItem';
import { ArrowRightToLine, Grid2x2Plus, House } from 'lucide-react';

const SidebarNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setIsSidebarOpen(true);

  return (
    <div
      className={`relative min-h-screen ${
        !isSidebarOpen ? 'w-20' : 'w-52'
      } col-start-1 col-span-1 row-start-1 row-span-2`}
    >
      <nav
        className={`bg-primary-500 text-white duration-300 px-2 fixed z-50 min-h-screen ${
          !isSidebarOpen ? 'w-20' : 'w-52'
        }`}
      >
        <div className="flex flex-col gap-10 py-4">
          <div className="text-center bg-white max-w-40 w-full mx-auto -translate-y-2">
            <img
              src={LogoIcon}
              alt="logo"
              className="max-w-40 w-full object-cover"
            />
          </div>
        </div>
        <ul className="flex flex-col gap-[10px] py-3 px-2">
          <li
            className={`flex items-center duration-300 hover:bg-secondary-400 hover:text-white rounded-2xl ${
              !isSidebarOpen ? 'justify-center w-max' : ''
            }`}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'bg-secondary-400 flex gap-3 items-center w-full h-full rounded-2xl px-2 py-2'
                  : 'flex gap-3 items-center w-full h-full rounded-2xl px-2 py-2'
              }
            >
              <House className="w-6 h-6 text-white" />
              {isSidebarOpen && (
                <span className="text-sm font-semibold">الرئيسية</span>
              )}
            </NavLink>
          </li>
          <SidebarNavExpandableItem
            title="التقارير"
            icon={<ReportIcon className="fill-white w-6 h-6" />}
            isSidebarOpen={isSidebarOpen}
            routes={[
              { title: 'الإحصائيات', to: '/reports/statistics' },
              { title: 'الدفعات', to: '/reports/installments' },
              { title: 'العقود', to: '/reports/contracts' },
              { title: 'الحسابات', to: '/reports/accounts' },
              { title: 'التحصيل', to: '/reports/collections' },
            ]}
            handleOpenSidebar={handleOpenSidebar}
          />
          <SidebarNavExpandableItem
            beta
            title="الخدمات"
            icon={<Grid2x2Plus className="text-white w-6 h-6" />}
            isSidebarOpen={isSidebarOpen}
            routes={[
              { title: 'ترحيل دفعات', to: '/payments' },
              { title: 'سداد مبكر', to: '/accounts' },
              { title: 'حالة وفاة', to: '/collections' },
              { title: 'حالة تقرير سمه', to: '/simah' },
            ]}
            handleOpenSidebar={handleOpenSidebar}
          />
        </ul>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={` bg-ivory-50 rounded-md text-secondary-400 sm:flex hidden items-center justify-center absolute top-[60px] w-8 h-8 rtl:left-0 ltr:right-0 rtl:-translate-x-1/2 ltr:translate-x-1/2 shadow-sm z-99 p-2 rotate-0 ${
            isSidebarOpen ? '' : '!rotate-180'
          }`}
        >
          {<ArrowRightToLine className="text-base" />}
        </button>
      </nav>
    </div>
  );
};

export default SidebarNav;
