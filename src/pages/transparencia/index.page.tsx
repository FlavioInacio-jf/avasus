import {
  ArcElement,
  Chart as ChartJS,
  ChartData,
  Legend,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';
import Image from 'next/image';
import { ReactElement } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart } from 'react-google-charts';
import { displayQuantity } from '../../helpers';
import { ITransparency } from '../../interfaces';
import { transparencyService } from '../../services';
import { NextPageWithLayout } from '../../types';
import { BreadCrumbs } from '../layout/BreadCrumbs';

import { Box } from './Box';
import { Head } from './head';

interface PageProps {
  transparency: ITransparency;
}
const colorsheme = ['#FFFFFF', '#D2202C', '#707070', '#2F2E41'];

ChartJS.register(ArcElement, Tooltip, Legend);

const Page: NextPageWithLayout<PageProps> = ({ transparency }) => {
  const { dados_gerais, usuarios_por_curso, usuarios_por_estado } =
    transparency;
  const {
    usuarios_registrados,
    incricoes_realizadas,
    cursos_ativos,
    direito_certificacao,
    investimento_medio_aluno,
    investimento_medio_curso,
  } = dados_gerais;

  const pieChartOptions: ChartData<'pie', number[], string> = {
    labels: usuarios_por_curso.map(({ curso }) => curso),
    datasets: [
      {
        label: '# Usuários por curso',
        data: usuarios_por_curso.map(({ usuarios }) => usuarios),
        backgroundColor: colorsheme,
        borderWidth: 1,
      },
    ],
  };
  const geoChartData = usuarios_por_estado.map(
    ({ estados, usuarios_totais }) => [`BR-${estados}`, usuarios_totais]
  );
  return (
    <>
      <Head />
      <div className='w-full mb-[196px] xss:mb-16 xs:mb-28 sm:mb-28 md:mb-28'>
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
                      <li className='md:col-span-2 w-full flex xss:grid xs:grid sm:grid md:grid xss:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1  md:grid-cols-2 flex-wrap gap-y-[42px] justify-center'>
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
              <div className='col-span-1 h-[667px] xss:h-full xs:h-full sm:h-full md:h-full'>
                <Box>
                  <h3 className='title title-primary title-2xl text-center'>
                    Usuários por curso
                  </h3>
                  <div className='w-fit h-fit mt-4 mx-auto'>
                    <Pie
                      data={pieChartOptions}
                      className='w-[500px] xss:w-full xs:w-full sm:w-full md:w-full mx-auto'
                      plugins={[ChartDataLabels]}
                      options={{
                        responsive: true,
                        plugins: {
                          datalabels: {
                            offset: 150,
                            display: false,
                          },
                          tooltip: {
                            enabled: true,
                          },
                          legend: {
                            display: true,
                            position: 'bottom',
                            textDirection: 'left',
                            fullSize: true,
                            align: 'start',
                            title: { position: 'end' },
                            labels: {
                              font: { weight: '700', size: 16 },
                              padding: 15,
                              color: '#2F2E41',
                              textAlign: 'left',
                              pointStyle: 'circle',
                              usePointStyle: true,
                              boxHeight: 20,
                              boxWidth: 20,
                              filter: (legendItem, data) => {
                                const label = legendItem.text;
                                const labelIndex = data.labels?.findIndex(
                                  (labelName) => labelName === label
                                );
                                const qtd =
                                  data.datasets[0].data[labelIndex as number];

                                legendItem.text = `${
                                  legendItem.text
                                }: ${displayQuantity(qtd as number)}`;

                                return true;
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </Box>
              </div>
              <div className='col-span-1 h-[667px]'>
                <Box>
                  <h3 className='title title-primary title-2xl text-center '>
                    Usuários por Estado
                    <div className='w-fit h-fit mt-4 mx-auto flex items-center'>
                      <Chart
                        chartType='GeoChart'
                        data={[['State', 'Usuários totais'], ...geoChartData]}
                        options={{
                          responsive: true,
                          backgroundColor: 'transparent',
                          region: 'BR',
                          displayMode: 'markers',
                          colorAxis: {
                            colors: colorsheme,
                          },
                          sizeAxis: {
                            minSize: 10,
                            maxSize: 15,
                          },
                          resolution: 'provinces',
                          datalessRegionColor: '#E8E8E8',
                          defaultColor: '#f5f5f5',
                          zoomFactor: 0,
                          legend: true,
                          forceIFrame: true,
                          enableRegionInteractivity: true,
                          tooltip: {
                            isHtml: true,
                          },
                        }}
                        mapsApiKey={process.env.MAPS_API_KEY}
                        chartLanguage='pt-BR'
                      />
                    </div>
                  </h3>
                </Box>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BreadCrumbs>{page} </BreadCrumbs>;
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<PageProps>
> => {
  const transparency = await transparencyService.single();
  if (!transparency) return { notFound: true };

  return { props: { transparency } };
};

export default Page;
