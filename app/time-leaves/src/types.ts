type EventData = {
  state: string;
  date: Date;
  summary: string;
};

type EventRecord = {
  index: number;
  handleDelete: Function;
} & EventData;

export type { EventData, EventRecord };
