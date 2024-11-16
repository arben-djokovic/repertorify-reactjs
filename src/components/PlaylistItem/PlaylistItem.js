import React from 'react'
import "./playlistItem.scss"
import { faHeart,  } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion} from 'framer-motion'

export default function PlaylistItem({i}) {
    let [isLiked, setIsLiked] = React.useState(false);
    // const navigate = useNavigate()

    const playlistClick = (e) => {
        if(e.target.tagName === "svg" || e.target.tagName === "path"){
            return;
        }
    }

  return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12, duration: 0.3 }} className="playlistItem link" onClick={playlistClick}>
    <div className="img">
        <img src="/assets/image.png" alt="" />
    </div>
    <div className="user">
        <div className="userInfo">
            <h3 className='playlistName'>Playlist name</h3>
            <p className='username'>beni23 - songs</p>
        </div>
        {isLiked ? <FontAwesomeIcon onClick={() => setIsLiked(!isLiked)} id='heart' className='heart' icon={faHeart} /> :
        <FontAwesomeIcon onClick={() => setIsLiked(!isLiked)} id='heart' className='heart' icon={faRegularHeart} />}
    </div>
</motion.div>)
}
