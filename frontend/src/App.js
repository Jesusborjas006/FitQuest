import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <div className="pages">
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
