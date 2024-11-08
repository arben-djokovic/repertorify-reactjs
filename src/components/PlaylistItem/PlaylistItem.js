import React from 'react'
import "./playlistItem.scss"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

export default function PlaylistItem() {
    const navigate = useNavigate()

    const playlistClick = (e) => {
        if(e.target.tagName === "svg" || e.target.tagName === "path"){
            return;
        }
    }

  return (<div className="playlistItem link" onClick={playlistClick}>
    <div className="img">
        <img src="assets/image.png" alt="" />
    </div>
    <div className="user">
        <div className="userInfo">
            <h3 className='playlistName'>Playlist name</h3>
            <p className='username'>beni23 - songs</p>
        </div>
        <FontAwesomeIcon id='heart' className='heart' icon={faHeart} />
    </div>
</div>)
}
