import { IReducer } from '../state/IState';

export interface ICard {
    id: number;
    name: string;
    reducer: IReducer;
};