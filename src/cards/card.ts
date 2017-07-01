import { IGameState, IReducer } from '../state';
import { ICard } from './';

export const sunrise: ICard = {
    id: 1,
    name: 'Sunrise',
    description: 'A very useless card',
    reducer: (state: IGameState) => ({ ...state, turn: state.turn + 1 })
};