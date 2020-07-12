import { IReducer } from '../state';

export interface ICard {
  id: number;
  name: string;
  description: string;
  reducer: IReducer;
}
