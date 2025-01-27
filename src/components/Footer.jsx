import { memo } from 'react';

const Footer = () => {
  return (
    <span className="block mr-auto font-semibold text-xs sm:text-sm md:text-end leading-6 px-4 py-3 text-ivory-800">
      @{new Date().getFullYear()} جميع الحقوق محفوظة للشركة الوطنية المساندة
      لخدمات التمويل
    </span>
  );
};

export default memo(Footer);
