type MessageWithoutData<
  Type extends string,
> = {
  type: Type;
};

type MessageWithData<
  Type extends string,
  Data,
> = MessageWithoutData<Type> & {
  data: Data;
};

export type Message<
  Type extends string,
  Data = void,
> =
  Data extends void
  ? MessageWithoutData<Type>
  : MessageWithData<Type, Data>
;

export type MessageMap<
  Messages extends Message<any, any>,
> = {
  [Type in Messages['type']]:
    Extract<Messages, { type: Type }>
  ;
};

export type ProcessMessage<
  Messages extends Message<any, any>,
> =
  (message: Messages) => void
;

export type ProcessMessageMap<
  Messages extends Message<any, any>,
> = {
  [Type in Messages['type']]:
    ProcessMessage<MessageMap<Messages>[Type]>
  ;
}

export const createMessageHandler = <
  Messages extends Message<any, any>,
>(
  processMessageMap: ProcessMessageMap<Messages>,
): ProcessMessage<Messages> => <
  TMessage extends Messages
>(
  message: TMessage,
): void =>
  processMessageMap[
    message.type as keyof typeof processMessageMap
  ](message as any)
;
