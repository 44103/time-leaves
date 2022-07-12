import { useEffect, useState } from "react";
import Record from "./components/record";
import { EventData } from "./types";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocalStorage } from "usehooks-ts";
import "./App.scss";
import { FaLeaf } from "react-icons/fa";

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
  const [eventData, setEventData] = useLocalStorage<EventData[]>("event_data", []);
  useEffect(() => {
    setEventData(eventlist ?? []);
  }, [eventlist]);
  useEffect(() => {
    setEventlist(eventData);
  }, [])

  const handleCreate: SubmitHandler<EventData> = (event) => {
    setEventlist([event, ...eventlist ?? []].sort(sortEvent));
  }

  return (
    <div className="App">
      <FaLeaf className="title" size={50} color="329374" />
      <h1 className="title">Time Leaves</h1>
      <form onSubmit={handleSubmit(handleCreate)}>
        <input type="text" {...register("summary", { required: true })} />
        <input type="time" {...register("date", { required: true })} />
        <input className="submit" type="submit" />
      </form>
      <table>
        <thead>
          <tr>
            <th className="state">State</th>
            <th className="date" align='left'>Date</th>
            <th className="summary" align='left'>Event</th>
            <th className="del-btn"></th>
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
