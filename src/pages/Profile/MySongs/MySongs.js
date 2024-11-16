import React from 'react'
import "../profile.scss"
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader'
import SongItem from '../../../components/SongItem/SongItem'

export default function MySongs() {
  return (
    <div className='page2 page pageContent'>
      <ProfileHeader />
      <section className="songsHome">
        <h1>My Songs</h1>
        <div className="listSongs">
          {[1,2,3,4,5,6,7,8,9,10].map((song, i) => <SongItem key={i} i={i} />)}
        </div>
      </section>
    </div>
  )
}
