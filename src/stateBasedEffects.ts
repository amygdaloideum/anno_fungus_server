import { GameState } from './state';

export default [
    changeTurn,
];

function changeTurn(state: GameState): GameState {
    return {
        turn: state.turn + 1,
        ...state
    };
}