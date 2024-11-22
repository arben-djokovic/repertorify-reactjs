import React from "react";
import "./profile.scss";
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem";

export default function FavPlaylists() {
  return (
    <section className="myPlaylists">
      <div className="list">
        {[1, 2, 3, 4, 5, 5 ,5 ,5,5,5,5,5,5,5].map((item, i) => (
          <PlaylistItem className={i} i={i} />
        ))}
      </div>
    </section>
  );
}
