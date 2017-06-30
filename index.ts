import { GameContainer } from './src/game-container';
import { IGameState, initialState } from './src/state';

const gameContainer = new GameContainer(initialState);

console.log(gameContainer.getLatestState());
