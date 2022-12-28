import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import Image from 'next/image';
import { ITransparency } from '../../interfaces';
import { transparencyService } from '../../services';
import { displayQuantity } from '../../utils';
import { Box } from './Box';

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
    <main className='w-full mb-[196px]'>
      <section className='w-full px-4'>
        <div className='max-w-[1110px] mx-auto'>
          <h2 className='title title-4xl title-primary text-center mb-8'>
            Transparência
          </h2>
          <div className='grid grid-cols-2 gap-8'>
            <div className='col-span-2 h-80'>
              <Box>
                <h3 className='title title-primary title-2xl text-center font-bold'>
                  Dados Gerais
                </h3>
                <div className='mt-[30px]'>
                  <ul className='flex flex-wrap gap-y-[42px] justify-between'>
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
                    <li className='w-full flex justify-center'>
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
