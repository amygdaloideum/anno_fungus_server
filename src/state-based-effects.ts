import { IGameState } from './state';

export default [
  changeTurn,
];

function changeTurn(state: IGameState): IGameState {
  return {
    turn: state.turn + 1,
    ...state
  };
}
