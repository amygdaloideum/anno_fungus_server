import { IClient } from './client';
import { GameContainer } from '../engine/game-container';

export interface IGameInstance {
    id: string;
    capacity: number;
    clients: IClient[];
    container?: GameContainer;
}
