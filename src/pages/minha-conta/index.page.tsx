import Link from 'next/link';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from '../../components';
import { Routes } from '../../enums';
import { NextPageWithLayout } from '../../types';
import { Head } from './head';
import { LoginLayout } from './layout';

type SignInCredentials = {
  user: string;
  password: string;
};

const Page: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<SignInCredentials>({
    mode: 'onChange',
  });

  const onSubmit = (data: SignInCredentials) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <>
      <Head />
      <h4 className='font-raleway font-bold text-2xl xss:text-xl xs:text-xl mt-8'>
        Seja bem-vindo!
      </h4>
      <p className='font-raleway font-medium text-base xss:text-sm leading-tight muted mt-2'>
        Por favor, insirá seus dados para entrar na sua conta.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
        <TextInput
          register={register}
          label='Usuário'
          name='user'
          type='text'
          errors={errors}
          placeholder='Entre com seu e-mail ou telefone'
          rules={{ required: 'E-mail ou Telefone são Inválidos' }}
          className='mt-8'
        />

        <TextInput
          register={register}
          label='Senha'
          name='password'
          type='password'
          errors={errors}
          maxLength={40}
          rules={{ required: 'Informe uma senha' }}
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
        href={`/${Routes['Minha conta']}/${Routes['Criar conta']}`}
        prefetch={false}
        className='block font-montserrat font-semibold text-gray-700 text-center mt-8 cursor-pointer'
      >
        Não possui um conta?&nbsp;
        <span className='font-semibold text-primary'>
          Crie sua conta agora mesmo
        </span>
      </Link>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
};

export default Page;
