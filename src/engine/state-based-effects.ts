import { IGameState } from './state/state.d';

const changeTurn = (state: IGameState): IGameState => {
  return {
    turn: state.turn + 1,
    ...state
  };
};

export const stateBasedEffects = [
  changeTurn,
];
