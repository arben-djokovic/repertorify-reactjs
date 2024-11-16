import React from 'react'
import "./profile.scss"
import { Link } from 'react-router-dom'
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem'
import SongItem from '../../components/SongItem/SongItem'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
export default function Profile() {
  return (
    <div className='page profile pageContent'>
      <ProfileHeader />
      <section className="myPlaylists">
        <div className="myPlaylistsHeader">
          <h2>MY PLAYLISTS</h2>
          <Link to="/profile/my-playlists" className='link'>see all {">>"}</Link>
        </div>
        <div className="list">
          <Link to={"/create-playlist"} className="addItemBtn">
            <img src="/assets/plus.png" alt="" />
          </Link>
          {[1, 2, 3].map((item, i) => (<PlaylistItem className={i} i={i} />))}
        </div>
      </section>
      <section className="myPlaylists">
        <div className="myPlaylistsHeader">
          <h2>FAVOURITE PLAYLISTS</h2>
          <Link to="/profile/favourite-playlists" className='link'>see all {">>"}</Link>
        </div>
        <div className="list">
          {[1, 2, 3, 4].map((item, i) => (<PlaylistItem className={i} i={i} />))}
        </div>
      </section>
      <section className="songsHome">
        <h1>My Songs</h1>
        <div className="listSongs">
          {[1,2,3,4,5].map((song, i) => <SongItem key={i} i={i} />)}
        </div>
          <Link to="/profile/my-songs" className="moreBtn">More...</Link>
      </section>
    </div>
  )
}
