import { useState } from 'react';

import redfLogo from '../assets/images/redf-logo.jpeg';
import LogoutModal from '@/features/login/LogoutModal';
import { Bell, ChevronDownIcon, CircleArrowOutDownLeft } from 'lucide-react';

const Header = () => {
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  return (
    <header className="px-6 py-3 shadow-sm flex items-center w-full top-0 justify-end bg-white gap-x-3 z-10">
      <section className="flex items-center gap-x-4 bg-secondary-100 p-1 rounded-full">
        <div className="flex items-center gap-x-1">
          <div className="rounded-full border border-secondary-50">
            <img
              src={redfLogo}
              alt="user photo"
              className="text-2xs object-cover w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xs text-ivory-900">مرحباً</span>
            <h4 className="font-semibold text-sm text-ivory-950">REDF</h4>
          </div>
        </div>
        <div>
          <button className="rounded-full bg-secondary-400 p-[0.625rem]">
            <ChevronDownIcon className="text-white" />
          </button>
        </div>
      </section>
      <ul className="flex items-center gap-x-3">
        <li>
          <button className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
            <Bell className="text-primary-500 w-5 h-5" />
          </button>
        </li>
        <li>
          <button
            className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center"
            onClick={() => setIsLogoutModalVisible(true)}
          >
            <CircleArrowOutDownLeft className="text-white w-5 h-5 rotate-45" />
          </button>
        </li>
      </ul>
      <LogoutModal
        isVisible={isLogoutModalVisible}
        onClose={() => setIsLogoutModalVisible(false)}
      />
    </header>
  );
};

export default Header;
