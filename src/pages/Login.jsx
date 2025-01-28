import Footer from '@/components/Footer';
import LoginForm from '@/features/login/components/LoginForm';
import OTPForm from '@/features/login/components/OTPForm';
import LoginImage from '@/features/login/components/LoginImage';
import ChangePasswordForm from '@/features/login/components/ChangePasswordForm';
import { useState } from 'react';
import { STEPS } from '@/constants/steps';

const Login = () => {
  const [step, setStep] = useState(STEPS.LOGIN);
  return (
    <div className="grid place-items-center min-h-[max(100vh,35rem)] md:grid-cols-2 relative">
      <div className="grid grid-cols-12 h-full place-content-center w-full">
        <div className="col-span-10 col-start-2 lg:col-start-3 lg:col-span-8">
          {step === STEPS.LOGIN && <LoginForm setStep={setStep} />}
          {step === STEPS.OTP && <OTPForm setStep={setStep} />}
          {step === STEPS.CHANGE_PASSWORD && (
            <ChangePasswordForm setStep={setStep} />
          )}
        </div>
        <div className="text-xs absolute bottom-0 rtl:right-0 ltr:left-0">
          <Footer />
        </div>
      </div>

      <div className="h-full">{<LoginImage />}</div>
    </div>
  );
};

export default Login;
