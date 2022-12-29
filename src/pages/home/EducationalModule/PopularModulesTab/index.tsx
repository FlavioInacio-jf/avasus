import Link from 'next/link';
import { FC } from 'react';
import { CardCourse } from '../../../../components';

const course = {
  id: 1,
  cateroria: 'Especialização',
  capa: 'https://avasus.ufrn.br/pluginfile.php/952815/course/thumbimage//PEPSUS_379x220.jpg',
  titulo: 'Curso de Especialização em Saúde da Família (PEPSUS) Turma 6',
  parceiros: 'UFRN / SEDIS / LAIS / PEPSUS / MS',
  resumo:
    'O curso de Especialização em Saúde da Família possui duração de 48 semanas, com carga horária total de 360h (trezentos e sessenta horas), sendo 345h (trezentos e quarenta e cinco horas) a distância, via Ambiente Virtual de Aprendizagem.  A especiali Ver mais',
  duracao: ' 360h',
  matriculados: 14817,
  criado_em: '16/5/2022',
  avaliacao: '1.6',
  numero_avaliacoes: 5759,
  sobre:
    'O curso de Especialização em Saúde da Família possui duração de 48 semanas, com carga horária total de 360h (trezentos e sessenta horas), sendo 345h (trezentos e quarenta e cinco horas) a distância, via Ambiente Virtual de Aprendizagem. \nA especialização está organizada em três eixos: Eixo I – Investigação em Atenção Primária à Saúde; Eixo II – Itinerários Formativos na Atenção à Saúde; Eixo III – Gestão em Atenção Primária à Saúde. Além disso, o curso possui módulos obrigatórios e módulos optativos, que produzem um itinerário formativo.\nO tempo de dedicação a distância obrigatório é de, no mínimo, 8h (oito horas) semanais, e 15h (quinze horas) presenciais a serem cumpridas no seminário de apresentação do trabalho de conclusão de curso.\nA proposta pedagógica da especialização sustenta-se em uma base clínica e de saúde coletiva e, transversalmente ao curso: promoção da saúde e vigilância à saúde, atenção à demanda espontânea e programada, educação em saúde, gestão do cuidado e controle social, planejamento, monitoramento e avaliação com foco nos indicadores do SUS.\nSaiba mais sobre o PEPSUS em <www.pepsus.lais.ufrn.br>.',
  objetivo_geral:
    'Favorecer a consolidação e aprimoramento da Atenção Primária à Saúde como reorientadora do modelo de Atenção à Saúde por meio da qualificação para a Estratégia de Saúde da Família no cuidado, na gestão e participação popular com base clínica e de saúde coletiva consoante ao perfil de multiplicador de saberes nos egressos do Programa.',
  objetivo_especifico:
    '- Qualificar as equipes da Estratégia de Saúde da Família com foco nas mudanças positivas nas práticas nos territórios do SUS. - Fortalecer a educação permanente enquanto prática transformadora da realidade das equipes de Saúde da Família. - Instrumentalizar as equipes de Saúde da Família em ferramentas de diagnóstico, planejamento, monitoramento e avaliação com fins do aprimoramento da gestão participativa e do cuidado nos territórios. - Implementar intervenções baseadas nas situações de saúde dos territórios. - Promover e reincorporar ações de promoção à saúde e vigilância em saúde na prática diária da Estratégia de Saúde da Família. - Promover e reincorporar o trabalho em equipe e a qualificação das ferramentas de humanização na prática diária da Estratégia de Saúde da Família.',
  conteudo: [
    'Integração ao AVASUS e PEPSUS',
    'Atenção à Saúde Mental na Atenção Primária à Saúde.',
    'Políticas Públicas de Saúde e Reforma Sanitária.',
    'Atenção à Saúde do Idoso na Atenção Primária à Saúde.',
    'Atenção Primária à Saúde, Estratégia de Saúde da Família e Territorialização.',
    'Abordagem do Câncer na Atenção Primária à Saúde.',
    'Controle das Doenças Crônicas Não Transmissíveis na Atenção Primária à Saúde.',
    'Observação na Unidade de Saúde.',
    'Tópicos Especiais em Saúde da Família.',
    'Acolhimento à Demanda Espontânea e Programada.',
    'Monitoramento e Avaliação.',
    'Planejamento Reprodutivo, Pré-natal e Puerpério.',
    'Seminário de Apresentação do TCC.',
    'Atenção à Saúde da Criança: Crescimento e Desenvolvimento.',
  ],
  creditos: [
    {
      capa: 'https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/5/UFRN%202.png',
      titulo: 'Universidade Federal do Rio Grande do Norte',
    },
    {
      capa: 'https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/17/Logotipo%20SEDIS%2015%20anos-01.png',
      titulo: 'Secretaria de Educação a Distância UFRN',
    },
    {
      capa: 'https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/18/coimbra_AVA-03.png',
      titulo: 'Laboratório de Inovação Tecnológica em Saúde',
    },
    {
      capa: 'https://avasus.ufrn.br/pluginfile.php/1/instituicao/foto/39/Pepsus.png',
      titulo: 'Programa de Educação Permanente em Saúde da Família',
    },
    {
      capa: 'https://avasus.ufrn.br/local/avasplugin/cursos/img/MS.png',
      titulo: 'Ministério da Saúde',
    },
  ],
};
export const PopularModulesTab: FC = () => {
  return (
    <>
      <div className='flex flex-col gap-8 mt-8'>
        <CardCourse course={course} />
        <CardCourse course={course} />
        <CardCourse course={course} />
      </div>
      <footer className='w-full flex justify-center mt-16'>
        <Link href='' className='btn btn-secondary btn-xl'>
          Ver mais
        </Link>
      </footer>
    </>
  );
};
