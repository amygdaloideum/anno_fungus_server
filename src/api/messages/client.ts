import { Message } from "./message";

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

export type ClientMessageType = ClientMessage['type'];

export type ClientMessageMap = {
  [Type in ClientMessageType]: Extract<ClientMessage, { type: Type }>;
};

export type ProcessClientMessage<TClientMessage extends ClientMessage> =
  (clientMessage: TClientMessage) => void
;

export type ProcessClientMessageMap = {
  [Type in ClientMessageType]:
    ProcessClientMessage<ClientMessageMap[Type]>
  ;
};

export const createClientMessageHandler = (
  processClientMessageMap: ProcessClientMessageMap,
): ProcessClientMessage<ClientMessage> => (
  clientMessage: ClientMessage,
) =>
  (processClientMessageMap[clientMessage.type])(clientMessage as any)
;
