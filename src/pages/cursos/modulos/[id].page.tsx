import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import { RenderIf } from '../../../components';
import { COURSE_REVALIDATE } from '../../../constants';
import { displayQuantity, generateStarReviews } from '../../../helpers';
import { ICourse } from '../../../interfaces';
import { coursesService } from '../../../services';
import { CourseCreditCarousel } from './CourseCreditCarousel';
import { Head } from './head';

interface IPageParams extends ParsedUrlQuery {
  id: string;
}
interface IPageProps {
  course: ICourse;
}

const Page: NextPage<IPageProps> = ({ course }) => {
  const {
    titulo,
    parceiros,
    sobre,
    objetivo_geral,
    creditos,
    duracao,
    criado_em,
    matriculados,
    avaliacao,
    numero_avaliacoes,
  } = course;
  return (
    <>
      <Head />
      <div className='w-full'>
        <section className='w-full h-[270px] relative pb-16 pt-8 px-4'>
          <Image
            src={course.capa}
            alt={course.titulo}
            fill
            className='object-cover object-center absolute z-10 brightness-50'
            priority
            quality={100}
          />
          <div className='max-w-[1110px] mx-auto z-20 relative text-white'>
            <span className='font-semibold text-[#E0E0E0] xss:text-sm xs:text-sm'>
              Início / Cursos / Módulos /
              <span className='text-white'>{titulo}</span>
            </span>
            <h2 className='font-bold text-[2.5rem] xss:text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-16 truncate'>
              {titulo}
            </h2>
            <p className='mt-8 font-semibold text-2xl xss:text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl'>
              {parceiros}
            </p>
          </div>
        </section>
        <section className='w-full mt-8 px-4 mb-32'>
          <div className='max-w-[1110px] mx-auto'>
            <article>
              <h3 className='title title-primary title-4xl text-center mb-11'>
                Informações Gerais do Curso
              </h3>
              <ul className='flex xss:flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-col justify-center items-center text-xl xss:text-base xs:text-base sm:text-base md:text-lg lg:text-lg font-bold'>
                <li className='flex items-center mr-[1.75rem] xss:mr-0 xs:mr-0 sm:mr-0 md:mr-0 lg:mr-0 whitespace-nowrap'>
                  <Image
                    src='/icons/time.svg'
                    alt='Icone relacionado ao tempo de curso'
                    width={25}
                    height={25}
                  />
                  <span className='ml-3'>{duracao}</span>
                </li>
                <li className='flex items-center mr-[1.75rem] xss:mr-0 xs:mr-0 sm:mr-0 md:mr-0 lg:mr-0 xss:mt-5 xs:mt-6 sm:mt-6 md:mt-7 lg:mt-7 whitespace-nowrap'>
                  <Image
                    src='/icons/calendar.svg'
                    alt='Icone relacionado a quantidade de pessoas inscritas'
                    width={22}
                    height={22}
                  />
                  <span className='ml-3'> Desde {criado_em}</span>
                </li>
                <li className='flex items-center mr-[1.75rem] xss:mr-0 xs:mr-0 sm:mr-0 md:mr-0 lg:mr-0  xss:mt-5 xs:mt-6 sm:mt-6 md:mt-7 lg:mt-7 whitespace-nowrap'>
                  <Image
                    src='/icons/people.svg'
                    alt='Icone relacionado a quantidade de pessoas inscritas'
                    width={30}
                    height={23}
                  />
                  <span className='ml-3'>
                    {displayQuantity(matriculados)} alunos matriculados
                  </span>
                </li>
                <li className='flex items-center whitespace-nowrap xss:mt-5 xs:mt-6 sm:mt-6 md:mt-7 lg:mt-7'>
                  <span className='flex gap-[0.625rem]'>
                    {generateStarReviews(avaliacao)}
                  </span>
                  <span className='ml-3'>
                    {avaliacao} ({displayQuantity(numero_avaliacoes)}{' '}
                    avaliações)
                  </span>
                </li>
              </ul>
            </article>

            <article className='mt-8'>
              <h4 className='title title-primary title-2xl text-center mb-8'>
                Sobre o curso
              </h4>
              <p className='text-black leading-relaxed text-justify'>{sobre}</p>
            </article>
            <RenderIf
              condition={!!objetivo_geral || !!course?.objetivo_especifico}
            >
              <article className='mt-8'>
                <h4 className='title title-primary title-2xl text-center mb-8'>
                  Objetivos
                </h4>
                <div>
                  <RenderIf condition={!!objetivo_geral}>
                    <div>
                      <span className='inline-block font-bold mb-3'>
                        Objetivos Geral
                      </span>
                      <p className='text-black leading-relaxed text-justify'>
                        {objetivo_geral}
                      </p>
                    </div>
                  </RenderIf>

                  <RenderIf condition={!!course?.objetivo_especifico}>
                    <div className='mt-8'>
                      <span className='inline-block font-bold mb-3'>
                        Objetivos Específicos
                      </span>
                      <ul className='list-disc list-inside'>
                        {course.objetivo_especifico
                          ?.substring(1)
                          .split('-')
                          .map((objective, key) => (
                            <li key={key}>{objective}</li>
                          ))}
                      </ul>
                    </div>
                  </RenderIf>
                </div>
              </article>
            </RenderIf>

            <RenderIf condition={!!course?.recursos_educacionais}>
              <article className='mt-8'>
                <h4 className='title title-primary title-2xl text-center mb-8'>
                  Recursos educacionais
                </h4>
                <p>{course?.recursos_educacionais}</p>
              </article>
            </RenderIf>

            <article className='mt-16'>
              <h4 className='title title-primary title-2xl text-center mb-8'>
                Créditos
              </h4>
              <CourseCreditCarousel credits={creditos} />
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<IPageParams>
> => {
  try {
    const courses = (await coursesService.all()) || [];
    const paths = courses.map((course) => ({
      params: { id: course.id.toString() },
    }));
    return {
      paths,
      fallback: 'blocking',
    };
  } catch {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps = async (
  ctx
): Promise<GetStaticPropsResult<IPageProps>> => {
  try {
    const { id } = ctx.params as IPageParams;
    const course = await coursesService.single(id);
    if (!course) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        course,
      },
      revalidate: COURSE_REVALIDATE,
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Page;
