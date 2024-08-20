import React from 'react';
import "./Contact.css";
const Contact = () => {
  return (
    <div className='contact container'>
        <form>
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
                <input type="text" placeholder='Subject' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button>Send Message</button>
            </form>
    </div>
  );
}

export default Contact;
