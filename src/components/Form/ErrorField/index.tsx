import { ErrorMessage } from '@hookform/error-message';
import { DeepMap, FieldError } from 'react-hook-form';
import { BsInfoCircleFill } from 'react-icons/bs';

type ErrorFieldProps<T> = {
  name: string;
  errors?: Partial<DeepMap<T, FieldError>>;
};
export const ErrorField = <T,>({ errors, name }: ErrorFieldProps<T>) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name as any}
      render={({ message }) => (
        <span className='absolute left-0 bottom-[-1.4rem] font-montserrat flex text-sm text-red-700'>
          <BsInfoCircleFill className='mr-2' />
          {message}
        </span>
      )}
    />
  );
};
