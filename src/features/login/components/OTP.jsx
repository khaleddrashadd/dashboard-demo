import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS } from 'input-otp';

const OTP = ({ field, errors }) => {
  return (
    <InputOTP
      {...field}
      maxLength={6}
      pattern={REGEXP_ONLY_DIGITS}>
      <InputOTPGroup
        dir="ltr"
        className="gap-2">
        <InputOTPSlot
          index={0}
          className={errors.otp ? 'border-danger-200' : ''}
        />
        <InputOTPSlot
          index={1}
          className={errors.otp ? 'border-danger-200' : ''}
        />
        <InputOTPSlot
          index={2}
          className={errors.otp ? 'border-danger-200' : ''}
        />
        <InputOTPSlot
          index={3}
          className={errors.otp ? 'border-danger-200' : ''}
        />
        <InputOTPSlot
          index={4}
          className={errors.otp ? 'border-danger-200' : ''}
        />
        <InputOTPSlot
          index={5}
          className={errors.otp ? 'border-danger-200' : ''}
        />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default OTP;
