import { IGameState } from './state';

const changeTurn = (state: IGameState): IGameState => ({
  ...state,
  turn: state.turn + 1,
});

export const stateBasedEffects = [
  changeTurn,
];
