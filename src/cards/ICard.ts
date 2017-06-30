import { IReducer } from '../state/IState';

export interface ICard {
    id: number;
    name: string;
    description: string;
    reducer: IReducer;
}