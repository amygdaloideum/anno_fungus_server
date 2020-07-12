import { Message, ProcessMessageMap, ProcessMessage } from './message';

export type CreateGameClientMessage =
  Message<'create-game'>
;

export type JoinGameClientMessage =
  Message<'join-game'>
;

export type ApplyEffectClientMessage =
  Message<'apply-effect', {
    cardId: number;
  }>
;

export type ClientMessage =
  | CreateGameClientMessage
  | JoinGameClientMessage
  | ApplyEffectClientMessage
;

export type ProcessClientMessageMap = ProcessMessageMap<ClientMessage>;
