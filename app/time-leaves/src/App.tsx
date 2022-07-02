import { useEffect, useState } from "react";
import Record from "./components/record";
import { EventData } from "./types";
import { useForm, SubmitHandler } from "react-hook-form";

const sortEvent = (a: EventData, b: EventData) => {
  return a.date.localeCompare(b.date)
}

function App() {
  const [eventlist, setEventlist] = useState<EventData[]>();
  const handleDelete = (index: number) => {
    console.log(index);
    setEventlist(eventlist?.filter((_, i) => i !== index))
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm<EventData>();

  const handleCreate: SubmitHandler<EventData> = (event) => {
    setEventlist([event, ...eventlist ?? []].sort(sortEvent));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(handleCreate)}>
        <input {...register("summary")} />
        <input type="datetime-local" {...register("date")} />
        <input type="submit" />
      </form>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>State</th>
            <th align='left'>Date</th>
            <th align='left'>Event</th>
          </tr>
        </thead>
        <tbody>
          {eventlist?.map((v, i) => <Record {...v} index={i} handleDelete={handleDelete} />)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
