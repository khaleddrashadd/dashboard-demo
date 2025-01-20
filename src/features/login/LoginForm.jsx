import { Button } from '@/components/ui/button';
import logo from '@/assets/images/logo.png';

const LoginForm = ({ onShowTerms }) => {
  const handleLogin = () => {
    console.log('Login with Azure AD');
  };

  return (
    <div className="flex items-center justify-center flex-col px-3">
      <div className="mb-16 xs:w-[343px] h-[66px] w-full">
        <img
          src={logo}
          alt="logo"
          className="h-full"
        />
      </div>
      <div className="text-center flex flex-col">
        <h2 className="mb-8 font-semibold text-ivory-950 text-xl">
          تسجيل الدخول إلى حسابك في نظام ملاك المحافظ
        </h2>
        <Button
          onClick={handleLogin}
          className="mb-4">
          سجل دخول بإستخدام Windows Azure AD
        </Button>
        <span
          className="text-sm font-semibold text-ivory-900 cursor-pointer"
          onClick={onShowTerms}>
          تفقد الشروط والأحكام
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
