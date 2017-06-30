import { GameState, initialState } from './src/state';
import GameContainer from './src/gamecontainer';

const gameContainer = new GameContainer(initialState);

console.log(gameContainer.getLatestState());