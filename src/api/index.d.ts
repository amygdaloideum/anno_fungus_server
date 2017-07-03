import { GameContainer } from '../engine/game-container';

export interface IGameInstance {
    id: string;
    container: GameContainer;
    capacity: number;
    clients: IClient[];
}

export interface IClient {
  id: string;
  socket: SocketIO.Socket;
  name?: string;
}