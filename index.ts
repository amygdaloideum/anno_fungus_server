import { sunrise } from './src/engine/cards/card';
import { GameContainer } from './src/engine/game-container';
import { initialState } from './src/engine/state/state';

const gameContainer = new GameContainer(initialState);

console.log(gameContainer.getLatestState());
console.log(gameContainer.next(sunrise.reducer));
