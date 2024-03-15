import React, { useEffect } from 'react'
import '../styles/about.css'
import aboutImg from '../assets/aboutImg.png'

export const About = () => {
    return (
        <section className='about'>
            <h2 className='about-subhead'>How it started</h2>
            <div className='about-center'>
                <img src={aboutImg} alt="aboutImg" className='about-center-img' />
                <p className='about-text-quotes'>Welcome to Mr. Health! Your compass for navigating the seas of wellness and safety. Embark on a journey towards a healthier lifestyle, where every step is guided by expert advice and personalized solutions. Join our community and let's chart a course towards a safer, healthier tomorrow, together.</p>

            </div>
        </section>
    )
}
