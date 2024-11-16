import React from 'react'
import "./profile.scss"
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'

export default function FavPlaylists() {
  return (
    <div className='page2 page pageContent'>
      <ProfileHeader />
      <section className="myPlaylists">
        <div className="myPlaylistsHeader">
          <h2>FAVOURITE PLAYLISTS</h2>
        </div>
        <div className="list">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (<PlaylistItem key={i} className={i} i={i} />))}
        </div>
      </section>
    </div>
  )
}
