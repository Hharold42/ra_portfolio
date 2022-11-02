import React from 'react'
import { Link } from 'react-router-dom'
import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__mask'></div>
        <div className='hero__content'>
            <p>Hello, I Am</p>
            <h1>React Developer.</h1>
            <div>
                <Link className='btn' to='/project'>
                    Projects
                </Link>
                <Link className='btn-light' to='/contact'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
