import { resendOtpService } from '../services/otpService';
import { useMutation } from '@tanstack/react-query';
import { getUsername } from '../store/loginSlice';
import { useSelector } from 'react-redux';
import { FALLBACK_ERR_MSG } from '@/constants/fallbacks';
import { toast } from 'react-toastify';
import { CircleCheck } from 'lucide-react';
import useOTP from '../hooks/useOTP';

const OTPCounter = () => {
  const { formattedTime, isExpired, resetTimer } = useOTP();

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
      resetTimer();
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
            isExpired && !isResendPending
              ? 'cursor-pointer underline'
              : ' cursor-not-allowed'
          }`}
        >
          إعادة الإرسال
        </span>
        {!isExpired && (
          <>
            <span className="text-ivory-900">خلال</span>
            <span className="text-secondary-400">{`\u202A${formattedTime}`}</span>
          </>
        )}
      </div>
      {reqErr && <p className="text-danger-200 text-sm block">{errorMsg}</p>}
    </>
  );
};

export default OTPCounter;
