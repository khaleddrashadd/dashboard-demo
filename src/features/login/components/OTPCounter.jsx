import { useEffect, useState } from 'react';
import { resendOtpService } from '../services/otpService';
import { useMutation } from '@tanstack/react-query';
import { getUsername } from '../store/loginSlice';
import { useSelector } from 'react-redux';
import { FALLBACK_ERR_MSG } from '@/constants/fallbacks';
import { toast } from 'react-toastify';
import { CircleCheck } from 'lucide-react';

const INTITIAL_TIME = 299; // 5 minutes
const OTPCounter = () => {
  const [time, setTime] = useState(INTITIAL_TIME);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
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

  const username = useSelector(getUsername);

  const handleResend = async () => {
    return await resendOtpService(username);
  };

  const handleToast = () =>
    toast('تم إعادة إرسال OTP بنجاح', {
      type: 'success',
      icon: <CircleCheck className="text-secondary-300" />,
    });
  const {
    isPending: isResendPending,
    mutate,
    error: reqErr,
  } = useMutation({
    mutationFn: handleResend,
    onSuccess() {
      setTime(INTITIAL_TIME);
      handleToast();
    },
  });

  const errorMsg = reqErr?.response?.data?.message || FALLBACK_ERR_MSG;

  return (
    <>
      <div className="text-sm flex items-center gap-1">
        <span className="text-ivory-950">ألم تصلك رسالة؟</span>
        <span
          onClick={mutate}
          className={`"text-ivory-  " ${
            !time && !isResendPending
              ? 'cursor-pointer underline'
              : ' cursor-not-allowed'
          }`}
        >
          إعادة الإرسال
        </span>
        {!!time && (
          <>
            <span className="text-ivory-900">خلال</span>
            <span className="text-secondary-400">{`\u202A${modifedTime}`}</span>
          </>
        )}
      </div>
      {reqErr && <p className="text-danger-200 text-sm block">{errorMsg}</p>}
    </>
  );
};

export default OTPCounter;
