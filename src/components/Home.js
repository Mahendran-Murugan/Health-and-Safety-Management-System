import React from 'react'
import '../styles/home.css'
import homeImg from '../assets/homeImg.png'
import { About } from './About'

export const Home = () => {
  return (
    <div className='home-container'>
      <section className='home'>
        <div className='home-center'>
          <div className='home-center-tex'>
            <pre className='home-text-quotes'>{
              `No Safety,

Know Pain.

Know Safety,

No Pain.

  – Author unknown`
            }</pre>
          </div>
          <img src={homeImg} alt="homeImg" className='home-center-img' />
        </div>
      </section>
      <About />
    </div>
  )
}
