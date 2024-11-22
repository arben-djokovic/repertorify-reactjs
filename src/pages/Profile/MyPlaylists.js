import React from "react";
import "./profile.scss";
import { Link } from "react-router-dom";
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem";

export default function MyPlaylists() {
  return (
    <section className="myPlaylists">
      <div className="list">
        <Link to={"/create-playlist"} className="addItemBtn">
          <img src="/assets/plus.png" alt="" />
        </Link>
        {[1, 2, 3, 4, 5, 5 ,5 ,5,5,5,5,5,5].map((item, i) => (
          <PlaylistItem className={i} i={i} />
        ))}
      </div>
    </section>
  );
}
