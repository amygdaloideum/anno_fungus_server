import { IGameState } from "./game-state";

export interface IReducer {
  (state: IGameState): IGameState;
}
