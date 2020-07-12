export interface IClient {
  id: string;
  socket: SocketIO.Socket;
  deck?: string[];
  name?: string;
}
