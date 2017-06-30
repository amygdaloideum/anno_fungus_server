import { IGameState, IReducer } from '../state/IState';
import { ICard } from './';

export const sunrise: ICard = {
    id: 1,
    name: 'Sunrise',
    description: 'A very useless card',
    reducer: state => ({ turn: state.turn +1, ...state})
};