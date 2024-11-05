import React from 'react'
import "./songItem.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function SongItem({song, i}) {
  const navigate = useNavigate()
  const songClick = (e) => {
    if(e.target.id === "icon" || e.target.tagName  === "path") return
    navigate("/songs/"+i)  
  }
  return (<div onClick={songClick} className={i%2 === 0 ? "songitem link" : "songitem2 link"}>
    <p className="title">Golub - Perper</p>
    <div className="right">
      <p className="username">(lazo123)</p>
      <FontAwesomeIcon id='icon' onClick={(e) => console.log(e.target)} icon={faEllipsis} />
    </div>
  </div>
  )
}
