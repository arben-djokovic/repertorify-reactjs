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
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  let [isOpenUser, setIsOpenUser] = React.useState(false);
  const navigate = useNavigate()

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
      <Link onClick={() => setIsOpenUser(false)} to="/add-song" className="navlink link">
        <FontAwesomeIcon icon={faPlus} />
        <p>Add song</p>
      </Link>
      <Link onClick={() => setIsOpenUser(false)} to="/create-playlist" className="navlink link">
        <FontAwesomeIcon icon={faFolderPlus} />
        <p>Create Playlist</p>
      </Link>
      <div className="openUser">
        <div
          onClick={() => setIsOpenUser(!isOpenUser)}
          className="navlink link"
        >
          <FontAwesomeIcon icon={faUser} />
          <p className="usernameCarpet">
            <span className="username">lazo123</span>
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
            <p onClick={() => setIsOpenUser(false)} className="openUserlink link">Profile</p>
            <p onClick={() => setIsOpenUser(false)} className="openUserlink link">Edit Profile</p>
            <p onClick={() => setIsOpenUser(false)}  className="openUserlink logout link">Log out</p>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
