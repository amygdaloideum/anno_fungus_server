import { IGameState, IReducer } from '../state/IState';
import { ICard } from './ICard';

export const sunrise: ICard = {
    id: 1,
    name: 'Evil Wish',
    reducer: state => ({ turn: state.turn +1, ...state})
};