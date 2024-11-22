import React from "react";
import "./profile.scss";
import SongItem from "../../components/SongItem/SongItem";

export default function MySongs() {
  return (
    <section className="songsHome">
      <div className="listSongs">
        {[1, 2, 3, 4, 5, 5 ,5 ,5,5,5,5,5,5 ].map((song, i) => (
          <SongItem key={i} i={i} />
        ))}
      </div>
      <button className="moreBtn">
        More...
      </button>
    </section>
  );
}
