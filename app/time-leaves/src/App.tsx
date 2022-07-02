import { useEffect, useState } from "react";
import Record from "./components/record";
import { EventData } from "./types";


function App() {
  const [eventlist, setEventlist] = useState<EventData[]>();
  const handleDelete = (index: number) => {
    console.log(index);
    setEventlist(eventlist?.filter((_, i) => i !== index))
  }

  useEffect(() => {
    setEventlist([
      { state: "Todo", date: new Date(), summary: "Event1" },
      { state: "Doing", date: new Date(), summary: "Event2" },
      { state: "Done", date: new Date(), summary: "Event3" }
    ]);
  }, [])

  return (
    <div className="App">
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
