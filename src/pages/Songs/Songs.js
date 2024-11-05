import React from "react";
import "./songs.scss";
import SongItem from "../../components/SongItem/SongItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Songs() {
  return (
    <section className="songs page">
      <div className="songsHeader">
        <h1>Songs:</h1>
        <div className="genres">
          <label htmlFor="genres">Genre:</label>
          <select name="genres" id="genres">
            <option value=""></option>
            <option value="Pop">Pop</option>
            <option value="Rok">Rok</option>
            <option value="ExYu">ExYu</option>
          </select>
        </div>
      </div>
      <div className="songsList">
        {[
          1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        ].map((song, i) => (
          <SongItem song={song} i={i} />
        ))}
      </div>
      <div className="arrows">
        <FontAwesomeIcon className="arrow moreBtn link" icon={faArrowLeft} />
        <FontAwesomeIcon className="arrow moreBtn link" icon={faArrowRight} />
      </div>
    </section>
  );
}
