type EventData = {
  state: string;
  date: string;
  summary: string;
};

type EventRecord = {
  index: number;
  handleDelete: Function;
} & EventData;

export type { EventData, EventRecord };
