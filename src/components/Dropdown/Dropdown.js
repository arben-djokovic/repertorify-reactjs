import React, { useEffect, useRef } from 'react'
import "./dropdown.scss"
import {motion} from 'framer-motion'

export default function Dropdown({isEllipsisOpen, setIsEllipsisOpen, children}) {
    const ellipsisRef = useRef(null) 
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if ((ellipsisRef.current && !ellipsisRef.current.contains(event.target))) {
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
  
  return (<>
        {isEllipsisOpen &&  <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} ref={ellipsisRef} id='ellipsisOpen' className="ellipsisOpen">{children}</motion.div>}
  </>)
}
