/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, LabelHTMLAttributes, ReactNode } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

export const Label: FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label
      {...props}
      className='block font-montserrat font-semibold text-base text-left whitespace-nowrap mb-1'
    >
      {children}
    </label>
  );
};
