import { cn } from '@/lib/utils';

const DataCard = ({
  variant = 'default',
  children,
  wrapperClass,
  title,
  subtitle,
}) => {
  const dataCardVariants = {
    default: {
      bgColor: 'bg-secondary-400/10',
      textColor: 'text-secondary-400',
      borderColor: 'border-secondary-400/60',
    },
    warn: {
      bgColor: 'bg-extended-300/10',
      textColor: 'text-extended-300',
      borderColor: 'border-extended-300/60',
    },
    danger: {
      bgColor: 'bg-danger-200/10',
      textColor: 'text-danger-200',
      borderColor: 'border-danger-200/60',
    },
  };
  return (
    <div
      className={cn(
        `flex items-center gap-3 py-2 px-3 border ${dataCardVariants[variant].borderColor} rounded-md ${dataCardVariants[variant].bgColor}`,
        wrapperClass
      )}>
      {children}
      <div className="flex flex-col">
        <h3
          className={`font-bold text-nowrap text-base xl:text-lg ${dataCardVariants[variant].textColor}`}>
          {title}
        </h3>
        <span className="text-ivory-900 text-nowrap text-sm xl:text-base">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default DataCard;
