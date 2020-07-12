import { Message, ProcessMessageMap, ProcessMessage } from './message';

export type UpdateStateServerMessage =
  Message<'update-state'>
;

export type ServerMessage =
  | UpdateStateServerMessage
;

export type ProcessServerMessageMap = ProcessMessageMap<ServerMessage>;
