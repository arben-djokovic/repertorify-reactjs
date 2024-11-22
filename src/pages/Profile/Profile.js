import React, { useState } from "react";
import "./profile.scss";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import MySongs from "./MySongs";
import MyPlaylists from "./MyPlaylists";
import FavPlaylists from "./FavPlaylists";

export default function Profile() {

  const [selected, setSelected] = useState("mySongs");

  return (
    <div className="page profile pageContent">
      <ProfileHeader />
      <div className="profileMain">
        <nav className="profileNav">
          <ul>
            <li onClick={() => setSelected("mySongs")} className={selected === "mySongs" ? "active" : ""}>My Songs</li>
            <li onClick={() => setSelected("myPlaylists")} className={selected === "myPlaylists" ? "active" : ""}>My Playlists</li>
            <li onClick={() => setSelected("favPlaylists")} className={selected === "favPlaylists" ? "active" : ""}>Favourite Playlists</li>
          </ul>
        </nav>
        {selected === "mySongs" && <MySongs />}
        {selected === "myPlaylists" && <MyPlaylists />}
        {selected === "favPlaylists" && <FavPlaylists />}
        </div>
    </div>
  );
}
