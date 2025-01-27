import Footer from '@/components/Footer';
import LoginForm from '@/features/login/LoginForm';
import LoginImage from '@/features/login/LoginImage';
import logo from '@/assets/images/logo.png';

const Login = () => {
  return (
    <div className="grid place-items-center min-h-[max(100vh,30rem)] md:grid-cols-2 relative">
      <div className="flex flex-col h-full justify-center">
        <div className="flex items-center justify-center flex-col px-3">
          <div className="mb-6 xs:w-full h-[66px] w-full">
            <img
              src={logo}
              alt="logo"
              className="h-full"
            />
          </div>
          <div className="text-center flex flex-col w-full">
            <h2 className="mb-6 font-semibold text-ivory-950 text-xl">
              تسجيل الدخول إلى حسابك
            </h2>
            <LoginForm />
          </div>
        </div>

        <div className="text-xs absolute bottom-0 rtl:right-0 ltr:left-0">
          <Footer />
        </div>
      </div>

      <div className="h-full">
        <LoginImage />
      </div>
    </div>
  );
};

export default Login;
