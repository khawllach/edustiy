import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3dab174e-e3d0-4e85-a764-42c70abcc2cd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us A Message <img src={msg_icon}  /></h3>
        <p>Feel free to reach out to us with any questions or feedback!</p>
        <ul>
            <li><img src={mail_icon} alt="Mail Icon" /> Contact@edusity.com</li>
            <li><img src={phone_icon} alt="Phone Icon" /> +1 (555) 123-4567</li>
            <li><img src={location_icon} alt="Location Icon" /> 123 Education Street, Learning City, LC 12345</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >You Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label >Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" required />
            <label >Write Your Message here</label>
            <textarea name="message" rows="5" placeholder="Type your message..." required></textarea>
            <button type="submit" className='btn dark-btn'>Send Message <img src={white_arrow} alt="White Arrow Icon" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
