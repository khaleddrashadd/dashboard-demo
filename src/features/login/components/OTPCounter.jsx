import { useEffect, useState } from 'react';

const INTITIAL_TIME = 300; // 5 minutes
const OTPCounter = ({ onResend }) => {
  const [time, setTime] = useState(INTITIAL_TIME);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  // conver time to be min:sec

  const modifedTime = `${
    Math.floor(time / 60) ? Math.floor(time / 60) + ':' : ''
  } ${time % 60}`;

  return (
    <div className="text-sm flex items-center gap-1">
      <span className="text-ivory-950">ألم تصلك رسالة؟</span>
      <span
        onClick={onResend}
        className={`"text-ivory-900" ${
          !time ? 'cursor-pointer underline' : ' cursor-not-allowed'
        }`}>
        إعادة الإرسال خلال
      </span>
      {!!time && (
        <span className="text-secondary-400">{`\u202A${modifedTime}`}</span>
      )}
    </div>
  );
};

export default OTPCounter;
