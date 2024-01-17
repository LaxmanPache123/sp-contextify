import logo from "./logo.svg";
import "./App.css";
import Table from "./Components/Table";

function App() {
  const sampleData = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Doe", age: 30 },
    // Add more data as needed
  ];
  return (
    <div className="App">
      <h1>React Table Example</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          // height: "100vh",
        }}
      >
        <Table data={sampleData} />
      </div>
    </div>
  );
}

export default App;
