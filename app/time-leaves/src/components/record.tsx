import { EventData } from "../types";

const Record = (data: EventData) => {
  return (
    <tr>
      <td>{data.state}</td>
      <td>{data.date.toISOString()}</td>
      <td>{data.summary}</td>
    </tr>
  );
}

export default Record;
