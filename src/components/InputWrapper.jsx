const InputWrapper = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2 sm:bg-primary-50 rounded-lg shadow-custom p-1 sm:p-3">
      <h3 className="title text-ivory-900 font-semibold text-sm">{title}</h3>
      {children}
    </div>
  );
};

export default InputWrapper;
