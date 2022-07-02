import Record from "./components/record";

function App() {
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
          <Record />
          <Record />
          <Record />
        </tbody>
      </table>
    </div>
  );
}

export default App;
