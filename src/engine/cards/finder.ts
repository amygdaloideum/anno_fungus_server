import { cards } from './cards';
import { ICard } from './card';

export const findCard = (id: number): ICard | undefined =>
  cards.find(card => card.id === id)
;
