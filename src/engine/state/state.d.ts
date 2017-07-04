export interface IGameState {
  readonly turn: number;
  readonly time: 'day' | 'night';
  readonly season: 'summer' | 'autumn' | 'winter' | 'spring';
  readonly players: IPlayer[];
}

export interface IPlayerAssets {
  deckList: string[];
}

export interface IPlayer {
  readonly factions: string[];
  readonly deckList: string[];
  readonly deck: string[];
  readonly tower: number;
  readonly hand: string[];
  readonly rooms: (string | null)[];
  readonly triggers: string[];
}

export interface IReducer {
  (state: IGameState): IGameState;
}