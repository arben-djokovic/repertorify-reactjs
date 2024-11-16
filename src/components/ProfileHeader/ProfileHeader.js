import React from 'react'
import "./profileHeader.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPen } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function ProfileHeader() {
  const navigate = useNavigate() 

  return (<section className="profileHeader">
    <FontAwesomeIcon className='userIcon link' icon={faUser} onClick={()=>{navigate("/profile")}} />
    <div className="userInfo">
      <div className="username">
        <h1 onClick={()=>{navigate("/profile")}} className='link'>lazov123</h1>
        <FontAwesomeIcon className='userPenIcon link' icon={faUserPen} />
      </div>
      <div className="info">
        <p>8 playlists</p>
        <span>-</span>
        <p>3 songs</p>
        <span>-</span>
        <p>12 favourites</p>
      </div>
    </div>
  </section>
  )
}
