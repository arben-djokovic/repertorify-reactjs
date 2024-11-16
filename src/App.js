import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Songs from "./pages/Songs/Songs";
import Playlists from "./pages/Playlists/Playlists";
import { useEffect } from "react";
import Profile from "./pages/Profile/Profile";
import MyPlaylists from "./pages/Profile/MyPlaylists";
import FavPlaylists from "./pages/Profile/FavPlaylists";
import MySongs from "./pages/Profile/MySongs";
import Login from "./pages/Registration/Login";
import Signup from "./pages/Registration/Signup";
import CreatePlaylist from "./pages/PlaylistForm/CreatePlaylist";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Sidebar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/my-playlists" element={<MyPlaylists />} />
            <Route path="/profile/favourite-playlists" element={<FavPlaylists />} />
            <Route path="/profile/my-songs" element={<MySongs />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/create-playlist" element={<CreatePlaylist />} />
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
