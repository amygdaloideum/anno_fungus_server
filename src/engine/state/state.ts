import { IGameState } from "./game-state";
import { IPlayerAssets } from "./player-assets";

const HANDSIZE = 4;
const TOWERSIZE = 25;
const ROOMSIZE = 10;
const ROOMS = Math.floor(TOWERSIZE/ROOMSIZE);

export const getInitialState = (playerAssets: IPlayerAssets[]): IGameState => {
  const state: IGameState = {
    turn: 0,
    time: 'day',
    season: 'summer',
    players: [],
  };

  playerAssets.forEach(pa => {
    const deckAndHand = drawInitialHand(shuffleArray<string>(pa.deckList), HANDSIZE);
    state.players.push({
      ...pa,
      deck: deckAndHand.deck,
      factions: [],
      tower: TOWERSIZE,
      hand: deckAndHand.hand,
      rooms: Array.from(Array(ROOMS)).map(x => null),
      triggers: [],
    });
  });

  return state;
};

export const validatePlayerAssets = (playerAssets: IPlayerAssets): boolean => {
  // TODO: Real validation
  return true;
}

const drawInitialHand = (
  deckRef: string[],
  handSize: number,
): {deck: string[]; hand: string[]} => {
  const deck = deckRef.slice(0);
  const hand: string[] = [];
  while (handSize--) {
    const lastCard = deck.pop();
    if (lastCard) {
      hand.push(lastCard);
    }
  }

  return {deck, hand};
}

const shuffleArray = <T>(array: T[]): T[] => {
  const copy = array.slice(0);

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }

  return copy;
}
