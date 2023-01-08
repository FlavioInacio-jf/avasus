import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import Image from 'next/image';
import { displayQuantity } from '../../helpers';
import { ITransparency } from '../../interfaces';
import { transparencyService } from '../../services';
import { Box } from './Box';
import { Head } from './head';

interface PageProps {
  transparency: ITransparency;
}
const Page: NextPage<PageProps> = ({ transparency }) => {
  const { dados_gerais } = transparency;
  const {
    usuarios_registrados,
    incricoes_realizadas,
    cursos_ativos,
    direito_certificacao,
    investimento_medio_aluno,
    investimento_medio_curso,
  } = dados_gerais;
  return (
    <>
      <Head />
      <main className='w-full mb-[196px] xss:mb-16 xs:mb-28 sm:mb-28 md:mb-28'>
        <section className='w-full px-4 mt-8'>
          <div className='max-w-[1110px] mx-auto'>
            <h2 className='title title-4xl title-primary text-center mb-8'>
              Transparência
            </h2>
            <div className='grid grid-cols-2 xss:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-8'>
              <div className='col-span-2 xss:col-span-1 xs:col-span-1 sm:col-span-1 md:col-span-1 h-80 xss:h-auto xs:h-auto sm:h-auto md:h-auto'>
                <Box>
                  <h3 className='title title-primary title-2xl text-center font-bold'>
                    Dados Gerais
                  </h3>
                  <div className='mt-[30px]'>
                    <ul className='flex xss:grid xs:grid sm:grid md:grid xss:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1  md:grid-cols-2 flex-wrap gap-y-[42px] justify-between'>
                      <li className='flex flex-col items-center'>
                        <div className='flex items-center font-bold'>
                          <Image
                            src='/icons/people.svg'
                            alt='Icone relacionado a quantidade de usuários registrados'
                            width={25}
                            height={20}
                            className='mr-[10px]'
                          />
                          Total de usuários registrados
                        </div>
                        <span className='text-primary font-semibold text-[1.875rem] mt-[13px]'>
                          {displayQuantity(usuarios_registrados)}
                        </span>
                      </li>
                      <li className='flex flex-col items-center'>
                        <div className='flex items-center font-bold'>
                          <Image
                            src='/icons/registrations-made.svg'
                            alt='Icone relacionado a quantidade de usuários registrados'
                            width={16}
                            height={17}
                            className='mr-[10px]'
                          />
                          Inscrições realizadas
                        </div>
                        <span className='text-primary font-semibold text-[1.875rem] mt-[13px]'>
                          {displayQuantity(incricoes_realizadas)}
                        </span>
                      </li>
                      <li className='flex flex-col items-center'>
                        <div className='flex items-center font-bold'>
                          <Image
                            src='/icons/active-courses.svg'
                            alt='Icone relacionado a quantidade de usuários registrados'
                            width={23}
                            height={18}
                            className='mr-[10px]'
                          />
                          Cursos ativos
                        </div>
                        <span className='text-primary font-semibold text-[1.875rem] mt-4'>
                          {displayQuantity(cursos_ativos)}
                        </span>
                      </li>
                      <li className='flex flex-col items-center'>
                        <div className='flex items-center font-bold'>
                          <Image
                            src='/icons/right-certification.svg'
                            alt='Icone relacionado a quantidade de usuários registrados'
                            width={18}
                            height={20}
                            className='mr-[10px]'
                          />
                          Direito à Certificação
                        </div>
                        <span className='text-primary font-semibold text-[1.875rem] mt-[13px]'>
                          {displayQuantity(direito_certificacao)}
                        </span>
                      </li>
                      <li className='md:col-span-2 w-full flex xss:grid xs:grid sm:grid md:grid xss:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1  md:grid-cols-2 flex-wrap gap-y-[42px] justify-between'>
                        <div className='flex flex-col items-center mr-[39px]'>
                          <div className='flex items-center font-bold'>
                            <Image
                              src='/icons/average-investment.svg'
                              alt='Icone relacionado a quantidade de usuários registrados'
                              width={26}
                              height={25}
                              className='mr-[10px]'
                            />
                            Investimento médio por curso
                          </div>
                          <span className='text-primary font-semibold text-[1.875rem] mt-4'>
                            {investimento_medio_aluno}
                          </span>
                        </div>
                        <div className='flex flex-col items-center'>
                          <div className='flex items-center font-bold'>
                            <Image
                              src='/icons/average-investment-student.svg'
                              alt='Icone relacionado a quantidade de usuários registrados'
                              width={18}
                              height={20}
                              className='mr-[10px]'
                            />
                            Investimento médio por aluno
                          </div>
                          <span className='text-primary font-semibold text-[1.875rem] mt-[13px]'>
                            {investimento_medio_curso}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Box>
              </div>
              <div className='col-span-1 h-[667px]'>
                <Box>
                  <h3 className='title title-primary title-2xl text-center'>
                    Usuários por curso
                  </h3>
                </Box>
              </div>
              <div className='col-span-1 h-[667px]'>
                <Box>
                  <h3 className='title title-primary title-2xl text-center'>
                    Usuários por Estado
                  </h3>
                </Box>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<PageProps>
> => {
  const transparency = await transparencyService.single();
  if (!transparency) return { notFound: true };

  return { props: { transparency } };
};

export default Page;
