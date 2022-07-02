import { EventRecord } from "../types";

const Record = (data: EventRecord) => {
  return (
    <tr>
      <td>{data.index}</td>
      <td>{data.state}</td>
      <td>{data.date}</td>
      <td>{data.summary}</td>
      <td><button onClick={() => data.handleDelete(data.index)}>Delete</button></td>
    </tr>
  );
}

export default Record;
