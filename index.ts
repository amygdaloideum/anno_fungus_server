import { IGameState, initialState } from './src/state';
import GameContainer from './src/game-container';

const gameContainer = new GameContainer(initialState);

console.log(gameContainer.getLatestState());
