import { Check, Loader } from 'lucide-react';

const ValidationCheckList = ({ password }) => {
  const validations = [
    {
      check: password.length >= 8,
      text: 'يجب أن تكون مكونة من 8 أحرف على الأقل',
    },
    { check: /[A-Z]/.test(password), text: 'يجب أن تحتوي على حرف واحد كبير' },
    { check: /[a-z]/.test(password), text: 'يجب أن تحتوي على حرف واحد صغير' },
    { check: /\d/.test(password), text: 'يجب أن تحتوي على رقم واحد' },
    { check: /[@$!%*?&#]/.test(password), text: 'يجب أن تحتوي على رمز واحد' },
  ];

  return (
    <ul className="space-y-2 text-sm">
      {validations.map((v, idx) => (
        <li
          key={idx}
          className={`flex items-center gap-2 ${
            v.check ? 'text-secondary-600' : 'text-ivory-900 font-normal'
          }`}>
          {v.check ? (
            <div className="p-1 bg-secondary-600 rounded-full">
              <Check className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="p-1 bg-ivory-300 rounded-full">
              <Loader className="w-4 h-4 text-white" />
            </div>
          )}
          {v.text}
        </li>
      ))}
    </ul>
  );
};

export default ValidationCheckList;
