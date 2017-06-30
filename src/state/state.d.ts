export interface IGameState {
  readonly turn: number;
}

export interface IReducer {
    (state: IGameState): IGameState;
}