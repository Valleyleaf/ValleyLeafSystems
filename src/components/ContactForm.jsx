import React from "react";
import { useState } from "react";
import '../assets/css/Contact.css'
// import '../assets/css/Contact.css'

const ContactForm = () => {

    const [formInput, setformInput] = useState({
        subject: '',
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setformInput((prevData) => ({ ...prevData, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      };

      return(
        <div className="mainForm">
            <form
                name='contact'
                method="POST"
                data-netlify="true"
                onSubmit="submit"
                data-netlify-honeypot="bot-field"
            >
            
            <input type="hidden" name="form-name" value="contact"/>

            <div hidden>
                <input name="bot-field"/>
            </div>

                <h1 className="contactTtitle">Contact us</h1>
            <label className="flex-container-column">
                <input 
                className="inputArea"
                type="text" 
                name="name"
                value={formInput.subject}
                onChange={handleChange}
                placeholder="Name"
                />

                <input 
                className="inputArea"
                type="email" 
                name="email"
                value={formInput.subject}
                onChange={handleChange}
                placeholder="Email"
                />

                <input 
                className="inputArea"
                type="phone" 
                name="" 
                value={formInput.subject}
                onChange={handleChange}
                placeholder="Phone Number"
                />

                <textarea
                className="inputArea"
                name="message"
                value={formInput.message}
                onChange={handleChange}
                placeholder="Talk to me"
                />

            </label>
            

            <button className='emailMeButton' type='submit'>Submit</button>
            </form>
        </div>
      );

};

export default ContactForm;