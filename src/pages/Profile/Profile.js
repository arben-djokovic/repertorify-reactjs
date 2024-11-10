import React from 'react'
import "./profile.scss"
import { Link } from 'react-router-dom'
import PlaylistItem from './../../components/PlaylistItem/PlaylistItem';
import SongItem from '../../components/SongItem/SongItem'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';

export default function Profile() {
  return (
    <div className='page profile pageContent'>
      <ProfileHeader />
      <section className="myPlaylists">
        <div className="myPlaylistsHeader">
          <h2>MY PLAYLISTS</h2>
          <p className='link'>see all {">>"}</p>
        </div>
        <div className="list">
          <Link to={"/create-playlist"} className="addItemBtn">
            <img src="assets/plus.png" alt="" />
          </Link>
          {[1, 2, 3].map((item, i) => (<PlaylistItem className={i} i={i} />))}
        </div>
      </section>
      <section className="myPlaylists">
        <div className="myPlaylistsHeader">
          <h2>FAVOURITE PLAYLISTS</h2>
          <p className='link'>see all {">>"}</p>
        </div>
        <div className="list">
          <Link to={"/create-playlist"} className="addItemBtn">
            <img src="assets/plus.png" alt="" />
          </Link>
          {[1, 2, 3].map((item, i) => (<PlaylistItem className={i} i={i} />))}
        </div>
      </section>
      <section className="myPlaylists">
        <div className="myPlaylistsHeader">
          <h2>FAVOURITE PLAYLISTS</h2>
          <p className='link'>see all {">>"}</p>
        </div>
        <div className="listSongs">
          {[1, 2, 3, 4, 5].map((item, i) => (<SongItem song={item} i={i} />))}
        </div>
      </section>
    </div>
  )
}
