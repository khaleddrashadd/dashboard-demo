const InputWrapper = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2 bg-primary-50 rounded-lg shadow-md p-3">
      <h3 className="title text-ivory-900 text-sm">{title}</h3>
      {children}
    </div>
  );
};

export default InputWrapper;
