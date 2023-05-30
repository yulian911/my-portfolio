import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailImage, insta, linke } from '../../assets'
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { username, email, message } = formData

  const handleChangeInput = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.username,
          to_name: 'J4SK13R',
          from_email: formData.email,
          to_email: 'melnychuk.yulian911@gmail.com',
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false)
          setIsFormSubmitted(true)
          // alert('Thank you. I will get back to you as soon as possible.')

          setFormData({
            username: '',
            email: '',
            message: '',
          })
        },
        error => {
          setLoading(false)
          console.error(error)

          alert('Ahh, something went wrong. Please try again.')
        },
      )
  }

  return (
    <div className="contact-container h-[100svh]">
      <h2 className="head-text gradient">Take a coffee & chat with me</h2>
      <div className="contact-cards">
        <div className="contact-card ">
          <img src={emailImage} alt="email" />
          <a href="mailto:melnychuk.yulian911@gmail.com" className="p-text ">
            Email
          </a>
        </div>
        <div className="contact-card">
          <img src={insta} alt="phone" />
          <a
            href="https://www.instagram.com/j4sk13r"
            target="_blank"
            rel="noreferrer"
            className="p-text">
            Instagram
          </a>
        </div>
        <div className="contact-card">
          <img src={linke} alt="phone" />
          <a
            href="https://www.linkedin.com/in/julian-melnychuk-7b3a60135/"
            target="_blank"
            rel="noreferrer"
            className="p-text ">
            Linkedin
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="contact-form app__flex" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center">
            <input
              className="p-text"
              required
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              className="p-text"
              required
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              required
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="submit"
            className="buttonForm p-text bg-[#313bac]"
            //   onClick={handleSubmit}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text gradient">Thank you for getting in touch!</h3>
        </div>
      )}
    </div>
  )
}

export default Contact
