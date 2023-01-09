import Link from 'next/link';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from '../../../components';
import { Routes } from '../../../enums';
import { NextPageWithLayout } from '../../../types';
import { LoginLayout } from '../layout';
import { Head } from './head';

type RegisterFormType = {
  user: string;
  password: string;
};

const Page: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<RegisterFormType>({
    mode: 'onChange',
  });

  const onSubmit = (data: RegisterFormType) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <>
      <Head />
      <h4 className='font-raleway font-bold text-2xl xss:text-xl xs:text-xl mt-8'>
        Crie sua cont agora mesmo!
      </h4>
      <p className='font-raleway font-medium text-base xss:text-sm leading-tight muted mt-2'>
        Por favor, insirá seus dados para criar sua conta.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
        <TextInput
          register={register}
          label='Nome completo'
          name='user'
          type='text'
          errors={errors}
          placeholder='Entre com seu e-mail ou telefone'
          rules={{ required: 'E-mail ou Telefone são Inválidos' }}
          className='mt-8'
        />

        <TextInput
          register={register}
          label='Nome social'
          name='password'
          type='password'
          errors={errors}
          maxLength={40}
          rules={{ required: false }}
          className='mt-8'
        />

        <TextInput
          register={register}
          label='CPF'
          name='password'
          type='password'
          errors={errors}
          maxLength={40}
          rules={{ required: false }}
          className='mt-8'
        />

        <TextInput
          register={register}
          label='Data de Nascimento'
          name='password'
          type='password'
          errors={errors}
          maxLength={40}
          rules={{ required: false }}
          className='mt-8'
        />

        <TextInput
          register={register}
          label='Senha'
          name='password'
          type='password'
          errors={errors}
          maxLength={40}
          rules={{ required: false }}
          className='mt-8'
        />

        <TextInput
          register={register}
          label='Confirmação de senha'
          name='password'
          type='password'
          errors={errors}
          maxLength={40}
          rules={{ required: false }}
          className='mt-8'
        />

        <button
          type='submit'
          className='btn btn-xl btn-secondary w-full mt-8'
          disabled={!isDirty || !isValid || isSubmitting}
        >
          Entrar
        </button>
      </form>

      <Link
        href={`/${Routes['Minha conta']}`}
        prefetch={false}
        className='block font-montserrat font-semibold text-gray-700 text-center mt-8 cursor-pointer'
      >
        Já possui um conta?&nbsp;
        <span className='font-semibold text-primary'>Acesse agora mesmo</span>
      </Link>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
};

export default Page;
