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
import { motion } from "framer-motion";

export default function Sidebar() {
  let [isOpenUser, setIsOpenUser] = React.useState(false);

  return (
    <nav className="sidebar">
      <Link onClick={() => setIsOpenUser(false)} to="/songs" className="navlink link">
        <FontAwesomeIcon icon={faMusic} />
        <p>Songs</p>
      </Link>

      <Link onClick={() => setIsOpenUser(false)} to="/playlists" className="navlink link">
        <FontAwesomeIcon icon={faList} />
        <p>Playlists</p>
      </Link>
      <div className="openUser">
        <div
          onClick={() => setIsOpenUser(!isOpenUser)}
          className="navlink link"
        >
          <FontAwesomeIcon className="userIcon" icon={faUser} />
          <p className="usernameCarpet">
            <span className="username">Lazo123</span>
            {isOpenUser ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretRight} />
            )}
          </p>
        </div>
        {isOpenUser && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            className="dropdown"
          >
          <Link onClick={() => setIsOpenUser(false)} to="/add-song" className="openUserlink link">
            <p>Add song</p>
          </Link>
          <Link onClick={() => setIsOpenUser(false)} to="/create-playlist" className="openUserlink link" >
            <p>Create Playlist</p>
          </Link>
            <p onClick={() => setIsOpenUser(false)} className="openUserlink link">Profile</p>
            <p onClick={() => setIsOpenUser(false)} className="openUserlink link">Edit Profile</p>
            <p onClick={() => setIsOpenUser(false)}  className="openUserlink delete link">Log out</p>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
