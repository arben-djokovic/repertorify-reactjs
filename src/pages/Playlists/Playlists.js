import React from 'react'
import "./playlists.scss"
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Playlists() {
  return (
    <div className='playlists page pageContent'>
        <h1>Playlists:</h1>
        <div className="playlistsContent">
        <Link to={"/create-playlist"} className="addItemBtn">
            <img src="assets/plus.png" alt="" />
        </Link>
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        </div>
    </div>
  )
}
