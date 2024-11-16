import React from 'react'
import "./playlists.scss"
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Playlists() {
  return (
    <div className='playlists page pageContent'>
        <h1>Playlists:</h1>
        <div className="playlistsContent">
        <Link to={"/create-playlist"} className="addItemBtn">
            <img src="/assets/plus.png" alt="" />
        </Link>
        {[1,2,3,4,5,6,7,8,9].map((item, i) => (<PlaylistItem i={i} />))}
        <div className="arrows">
        <FontAwesomeIcon className="arrow moreBtn link" icon={faArrowLeft} />
        <FontAwesomeIcon className="arrow moreBtn link" icon={faArrowRight} />
      </div>
        </div>
    </div>
  )
}
