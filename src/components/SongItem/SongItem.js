import React from 'react'
import "./songItem.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

export default function SongItem({song, i}) {
  return (<div className={i%2 == 0 ? "songitem link" : "songitem2 link"}>
    <p className="title">Golub - Perper</p>
    <div className="right">
      <p className="username">lazo123</p>
      <FontAwesomeIcon icon={faEllipsis} />
    </div>
  </div>
  )
}
