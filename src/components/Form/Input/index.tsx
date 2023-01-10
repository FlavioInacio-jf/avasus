import csn from 'classnames';
import { InputHTMLAttributes } from 'react';
import {
  DeepMap,
  FieldError,
  get,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import { ErrorField } from '../ErrorField';
import { Label } from '../Label';

type TextInputProps<T> = Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> & {
  label: string;
  name: Path<T>;
  register?: UseFormRegister<T>;
  errors?: Partial<DeepMap<T, FieldError>>;
  rules?: RegisterOptions;
};

// eslint-disable-next-line react/function-component-definition
export function TextInput<FormValuesType>({
  label,
  name,
  register,
  rules,
  errors,
  className,
  ...props
}: TextInputProps<FormValuesType>) {
  const errorMessage = get(errors, name);
  const hasError = !!(errors && errorMessage);

  return (
    <div className={`relative ${className}`}>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        {...(register && register(name as any, rules))}
        {...props}
        className={csn(
          'font-montserrat w-full h-[45px] bg-white border border-gray-300 text-left px-3 py-5 placeholder:text-sm placeholder:font-medium read-only:opacity-50 rounded-2xl',
          {
            'border-[rgba(230, 57, 70, 0.4)] shadow-[0_0_5px_rgba(230, 57, 70, 0.4)]':
              hasError,
            'border [&:not(:read-only)]:focus:border-secondary': !hasError,
          }
        )}
      />

      <ErrorField errors={errors} name={name as any} />
    </div>
  );
}
