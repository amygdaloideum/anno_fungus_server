import { ICard } from './card';
import { IGameState } from '../state';

export const cards: ICard[] = [
  {
    id: 1,
    name: 'Sunrise',
    description: 'A very useless card',
    reducer: (state: IGameState) => ({ ...state, turn: state.turn + 1 })
  },
];
