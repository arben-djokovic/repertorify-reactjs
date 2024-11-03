import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Routes>
      <Route path="/header" element={<Header/>} />
      <Route path="/*" element={<>404</>} />
    </Routes>
  );
}

export default App;
