import { cn } from '@/lib/utils';

const AppHeading = ({ title, className }) => {
  return (
    <h1 className={cn('text-2xl text-ivory-950 font-bold', className)}>
      {title}
    </h1>
  );
};

export default AppHeading;
