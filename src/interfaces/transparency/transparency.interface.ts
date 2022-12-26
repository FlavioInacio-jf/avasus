import { IGeneralData, IUserByState, IUserPerCouse } from '.';

export interface ITransparency {
  dados_gerais: IGeneralData;
  usuarios_por_curso: IUserPerCouse[];
  usuarios_por_estado: IUserByState[];
}
