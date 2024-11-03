import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./header.scss"

export default function Header() {
    const navigate = useNavigate()
    const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  return (
    <header className='header'>
        <section className="top">
            <Link to="/about-us">What is Repertorify? </Link>
            <div className="sign">
                <Link to="/log-in">Log In</Link>
                <span> | </span>
                <Link to="/sign-up">Sign Up</Link>
            </div>
        </section>
        <section className="main">
            <img className='logo' onClick={()=>{navigate("/")}} src="/assets/logo.png" alt="" />
            <form className="search">
                <input type="text" placeholder='Search for songs...' />
                <button className='searchBtn'>Search</button>
            </form>
        </section>
        <section className="abc">
            <div className="letters">
                {letters.map((letter, index) => (
                    <p key={index} className="letter">
                        {letter}
                    </p>
                ))}
            </div>
        </section>
    </header>
  )
}
