import { GameContainer } from '../engine/game-container';

export interface IGameInstance {
    id: string;
    capacity: number;
    clients: IClient[];
    container?: GameContainer;
}

export interface IClient {
  id: string;
  socket: SocketIO.Socket;
  deck?: string[];
  name?: string;
}

export interface ITicket {
    gameId: string;
    deck: string[];
}