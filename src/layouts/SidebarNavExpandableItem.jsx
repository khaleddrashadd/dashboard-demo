import { NavLink } from 'react-router';
import ChevronIcon from '../assets/icons/chevron.svg?react';
import { useState } from 'react';

const SidebarNavExpandableItem = ({
  isSidebarOpen,
  routes,
  title,
  beta,
  Icon,
}) => {
  const [isListExpanded, setIsListExpanded] = useState(false);
  const handleExpandList = () => {
    setIsListExpanded(!isListExpanded);
  };
  return (
    <li
      tabIndex={1}
      className={`rounded-2xl duration-300 relative ${
        !isSidebarOpen ? 'justify-center group' : ''
      } ${isListExpanded && isSidebarOpen ? 'bg-primary-600 p-2' : ''}`}
    >
      <div
        onClick={handleExpandList}
        className={`flex group-focus:bg-secondary-400 group-focus:text-white items-center px-2 py-2 cursor-pointer duration-300 rounded-2xl  ${
          !isSidebarOpen ? 'w-max' : ''
        }`}
      >
        <div className="flex gap-3 items-center w-full h-full rounded-2xl">
          <Icon className="fill-white w-6 h-6" />
          {isSidebarOpen && (
            <span className="text-sm font-semibold select-none">{title}</span>
          )}
          {beta && isSidebarOpen && (
            <span className="text-xs font-semibold text-[#D7B40B] rounded-full px-1 bg-[#FFF8D4] rtl:-mr-2 ltr:-ml-2">
              قريبا
            </span>
          )}
        </div>
        {isSidebarOpen && (
          <ChevronIcon
            className={`fill-white ${isListExpanded ? '-scale-y-100' : ''}`}
          />
        )}
      </div>
      {(isListExpanded || !isSidebarOpen) && (
        <div
          className={`flex-col w-max ${
            !isSidebarOpen
              ? 'hidden group-focus:flex absolute rtl:right-full ltr:left-full bg-primary-600 rounded-2xl top-0 before:absolute before:border-[10px] rtl:before:border-l-primary-600 ltr:before:border-l-transparent ltr:before:border-r-primary-600 rtl:before:border-r-transparent before:border-r-transparent before:border-t-transparent before:border-b-transparent rtl:before:left-[calc(100%-3px)] ltr:before:right-[calc(100%-3px)] before:top-4 before:rounded-lg'
              : 'flex'
          } ${routes.length ? 'p-2' : ''}`}
        >
          {routes.map((route) => (
            <NavLink
              key={route?.to}
              to={route?.to}
              className=" px-6 py-[10px] duration-300 hover:text-secondary-200 text-xs select-none"
            >
              {route?.title}
            </NavLink>
          ))}
        </div>
      )}
    </li>
  );
};

export default SidebarNavExpandableItem;
