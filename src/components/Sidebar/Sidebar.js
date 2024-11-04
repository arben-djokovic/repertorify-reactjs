import React from "react";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretRight,
  faFolderPlus,
  faList,
  faMusic,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  let [isOpenUser, setIsOpenUser] = React.useState(false);

  return (
    <nav className="sidebar">
      <Link to="/songs" className="navlink link">
        <FontAwesomeIcon icon={faMusic} />
        <p>Songs</p>
      </Link>

      <Link to="/playlists" className="navlink link">
        <FontAwesomeIcon icon={faList} />
        <p>Playlists</p>
      </Link>
      <Link to="/add-song" className="navlink link">
        <FontAwesomeIcon icon={faPlus} />
        <p>Add song</p>
      </Link>
      <Link to="/create-playlist" className="navlink link">
        <FontAwesomeIcon icon={faFolderPlus} />
        <p>Create Playlist</p>
      </Link>
      <div className="openUser">
        <div
          onClick={() => setIsOpenUser(!isOpenUser)}
          className="navlink link"
        >
          <FontAwesomeIcon icon={faUser} />
          <p>
            lazo123{" "}
            {isOpenUser ? (
              <FontAwesomeIcon icon={faCaretRight} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </p>
        </div>
        {isOpenUser && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            className="dropdown"
          >
            <Link className="openUserlink">Profile</Link>
            <p className="openUserlink">Edit Profile</p>
            <p className="openUserlink logout">Log out</p>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
