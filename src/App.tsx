import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
