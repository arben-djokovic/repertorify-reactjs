import React, { useEffect, useRef, useState } from 'react'
import "./songItem.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function SongItem({song, i}) {

  const navigate = useNavigate()
  const [isEllipsisOpen, setIsEllipsisOpen] = useState(false)
  const ellipsisRef = useRef(null) 

  const songClick = (e) => {
    if(e.target.id === "icon" || e.target.id === "ellipsisItem" || e.target.id === "ellipsisOpen" || e.target.tagName  === "path") return
    navigate("/songs/"+i)  
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ellipsisRef.current && !ellipsisRef.current.contains(event.target)) {
        setIsEllipsisOpen(false)
      }
    }

    if (isEllipsisOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isEllipsisOpen])


  return (<div onClick={songClick} 
    className={`${i % 2 === 0 ? "songitem" : "songitem2"} ${isEllipsisOpen ? "active " : "link"}`}>
    <p className="title">Golub - Perper</p>
    <div className="right">
      <p className="username">(lazo123)</p>
      <FontAwesomeIcon id='icon' onClick={(e) => setIsEllipsisOpen(!isEllipsisOpen)} icon={faEllipsis} />
        {isEllipsisOpen && <div ref={ellipsisRef} id='ellipsisOpen' className="ellipsisOpen">
          <p id='ellipsisItem' className="ellipsisItem link">Add to playlist</p>
          <p id='ellipsisItem' className="ellipsisItem link">Edit</p>
          <p id='ellipsisItem' onClick={()=>{setIsEllipsisOpen(false)}} className="ellipsisItem link">Delete</p>
        </div>}
    </div>
  </div>
  )
}
