import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Sidebar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<>404</>} />
          </Routes>
        </div>
        <RightSidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
