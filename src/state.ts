export interface IGameState {
  readonly turn: number;
}

export const initialState: IGameState = {
  turn: 0,
};
