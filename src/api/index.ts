import * as socketIo from 'socket.io';
import * as uuid from 'uuid/v1';
import * as cards from '../engine/cards';
import { find as findCard } from '../engine/cards/finder';
import { GameContainer } from '../engine/game-container';
import { getInitialState } from '../engine/state/state';
import { IClient, IGameInstance, ITicket } from './index.d';

const PORT = 8098;

const games: IGameInstance[] = [];
const connections: IClient[] = [];

const io = socketIo.listen(PORT);
console.log(`server listening at port ${PORT}`);

io.sockets.on('connection', socket => {
  const client: IClient = {
    id: uuid(),
    socket,
  };
  let game: IGameInstance;

  console.log(`client with id ${client.id} has connected`);

  socket.on('CREATE_GAME', createGame);
  socket.on('JOIN_GAME', joinGame);
  socket.on('APPLY_EFFECT', applyEffect);

  function applyEffect(id: number): void {
    if (!game.container) { return; }
    const card = findCard(id);
    const nextState = game.container.next(card.reducer);
    emitToGameClients(game, 'NEW_STATE', nextState);
    console.log(`client ${client.id} played card ${card.name}`);
  }

  function joinGame(ticket: ITicket): void {
    const foundGame = games.find(e => e.id === ticket.gameId);
    if (!ticket.deck) { return; }  // No deck
    if (!foundGame) { return; } // Game does not exist
    client.deck = ticket.deck;
    game = foundGame;
    if (game.clients.length >= game.capacity) { return; } // Game is full
    game.clients.push(client);
    console.log(`client ${client.id} joined game ${game.id}`);
    if (game.clients.length === game.capacity) {
      startGame(game);
    }
  }

  function startGame(game: IGameInstance): void {
    // TODO: initialize decks etc.
    const playerAssets = game.clients.map(client => ({deckList: client.deck || []}));
    const initialGameState = getInitialState(playerAssets);
    game.container = new GameContainer(initialGameState);
    emitToGameClients(game, 'GAME_STARTED', game.container.getLatestState());
    console.log(`game ${game.id} has been started`);
  }

  function createGame(id: string): void {
    const game: IGameInstance = {
      id,
      capacity: 2,
      clients: [],
    };
    games.push(game);
    io.emit('GAME_CREATED_CONFIRM', id);
    console.log(`game ${id} created`);
  }

  function emitToGameClients(game: IGameInstance, event: string, data: any): void {
    game.clients.forEach(client => client.socket.emit(event, data));
  }
});