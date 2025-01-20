import { memo } from 'react';
import cityImg from '@/assets/images/city.jpeg';
const LoginImage = () => {
  return (
    <div className="h-full hidden md:block">
      <img
        src={cityImg}
        alt="city"
        className="h-full object-cover"
      />
    </div>
  );
};

export default memo(LoginImage);
