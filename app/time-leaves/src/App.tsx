import Record from "./components/record";
import { EventData } from "./types";

function App() {
  const eventlist: EventData[] = [
    { state: "Todo", date: new Date(), summary: "Event1" },
    { state: "Doing", date: new Date(), summary: "Event2" },
    { state: "Done", date: new Date(), summary: "Event3" }
  ]
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th align='left'>Date</th>
            <th align='left'>Event</th>
          </tr>
        </thead>
        <tbody>
          {eventlist.map(v => <Record {...v} />)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
