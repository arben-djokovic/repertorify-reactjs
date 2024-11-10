import React from "react";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretRight,
  faList,
  faMusic,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

export default function Sidebar() {
  let [isEllipsisOpen, setIsEllipsisOpen] = React.useState(false);

  return (
    <nav className="sidebar">
      <Link onClick={() => setIsEllipsisOpen(false)} to="/songs" className="navlink link">
        <FontAwesomeIcon icon={faMusic} />
        <p>Songs</p>
      </Link>

      <Link onClick={() => setIsEllipsisOpen(false)} to="/playlists" className="navlink link">
        <FontAwesomeIcon icon={faList} />
        <p>Playlists</p>
      </Link>
      <div className="openDropdown">
        <div
          onClick={() => setIsEllipsisOpen(true)}
          className="navlink link"
          id="dropdownLink"
        >
          <FontAwesomeIcon className="userIcon" icon={faUser} />
          <p className="usernameCarpet">
            <span className="username">Lazo123</span>
            {isEllipsisOpen ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretRight} />
            )}
          </p>
        </div>
        <Dropdown isEllipsisOpen={isEllipsisOpen} setIsEllipsisOpen={setIsEllipsisOpen}>
            <Link to="/profile" className="ellipsisItem link">Profile</Link>
            <Link to="/add-song" className="ellipsisItem link">Add Song</Link>
            <Link to="/create-playlist" className="ellipsisItem link">Create Playlist</Link>
            <p className="ellipsisItem link" >Log out</p>
        </Dropdown>
      </div>
    </nav>
  );
}
