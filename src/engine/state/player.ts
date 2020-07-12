export interface IPlayer {
  readonly factions: string[];
  readonly deckList: string[];
  readonly deck: string[];
  readonly tower: number;
  readonly hand: string[];
  readonly rooms: (string | null)[];
  readonly triggers: string[];
}
