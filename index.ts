import { GameContainer } from './src/game-container';
import { initialState } from './src/state/state';

const gameContainer = new GameContainer(initialState);

console.log(gameContainer.getLatestState());
