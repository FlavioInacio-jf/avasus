import { ICourseCredit } from '.';

export interface ICourse {
  id: number;
  cateroria: string;
  capa: string;
  titulo: string;
  parceiros: string;
  resumo: string;
  duracao: string;
  matriculados: number;
  criado_em: string;
  avaliacao: string;
  numero_avaliacoes: number;
  sobre: string;
  objetivo_geral: string;
  conteudo: string[];
  creditos: ICourseCredit[];
}
