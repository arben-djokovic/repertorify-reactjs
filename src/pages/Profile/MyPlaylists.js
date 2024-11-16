import React from 'react'
import "./profile.scss"
import { Link } from 'react-router-dom'
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'

export default function MyPlaylists() {
  return (
    <div className='page2 page pageContent'>
      <ProfileHeader />
      <section className="myPlaylists">
        <div className="myPlaylistsHeader">
          <h2>MY PLAYLISTS</h2>
        </div>
        <div className="list">
          <Link to={"/create-playlist"} className="addItemBtn">
            <img src="/assets/plus.png" alt="slika" />
          </Link>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (<PlaylistItem key={i} className={i} i={i} />))}
        </div>
      </section>
    </div>
  )
}