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
import Login from "./pages/Registration/Login";
import Signup from "./pages/Registration/Signup";
import CreatePlaylist from "./pages/PlaylistForm/CreatePlaylist";
import AddSong from "./pages/SongForm/AddSong";
import Song from "./pages/Song/Song";
import Playlist from "./pages/Playlists/Playlist";

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
        <form className="mobile-search">
            <input type="text" placeholder='Search for songs...' />
            <button className='searchBtn'>Search</button>
        </form>
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/create-playlist" element={<CreatePlaylist />} />
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/songs/:id" element={<Song />} />
            <Route path="/playlists/:id" element={<Playlist />} />
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
