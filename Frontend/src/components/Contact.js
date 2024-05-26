import React from 'react'
import '../styles/contact.css'
import contactImg from '../assets/contactImg.png'

export const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact-center'>
                <div>
                    <form className="contact-form">
                        <input type="user" placeholder="Name" id="user" />
                        <input type="user" placeholder="Email" id="user" />
                        <textarea className='contact-area' placeholder='Message'>
                        </textarea>
                        <button type="submit" id="contact-btn">Send Message</button>
                    </form>
                </div>
                <img src={contactImg} alt="contactImg" className='contact-center-img' />
            </div>
        </section>
    )
}
