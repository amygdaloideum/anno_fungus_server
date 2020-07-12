import { IPlayer } from './player';

export interface IGameState {
  readonly turn: number;
  readonly time: 'day' | 'night';
  readonly season: 'summer' | 'autumn' | 'winter' | 'spring';
  readonly players: IPlayer[];
}
