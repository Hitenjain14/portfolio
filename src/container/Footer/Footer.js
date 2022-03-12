import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

init('qsnHPyw_9iZhfhlPi');

function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    emailjs
      .send('service_yb10tjq', 'template_1gtlayp', {
        name: name,
        email: email,
        message: message,
      })
      .then(
        function (response) {
          console.log('SUCCESS!');
        },
        function (error) {
          console.log(error.message);
        }
      );

    setLoading(false);
  };

  return (
    <>
      <h2 className="head-text">Take a coffee and & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hitenjain146@gmail.com" className="p-text">
            hitenjain146@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a
            href="https://api.whatsapp.com/send?phone=917009142930"
            target="_blank"
            rel="noopener noreferrer"
            className="p-text"
          >
            Whatsapp
          </a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            required={true}
            className="p-text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            required={true}
            className="p-text"
            placeholder="Your Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="app__flex">
          <textarea
            className="p-text"
            required={true}
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          {loading ? 'Sending..' : 'Send Message'}
        </button>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
