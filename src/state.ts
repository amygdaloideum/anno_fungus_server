export interface GameState {
    readonly turn: number;
};

export const initialState: GameState = {
    turn: 0,
};
