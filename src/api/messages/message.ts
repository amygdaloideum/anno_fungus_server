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
