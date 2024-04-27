import "./FormStyles.css";
import emailjs from "emailjs-com";
import React from "react";


const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();


    const formData = new FormData(e.target);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const message = formData.get("message");

    const serviceId = "service_e9wor7c";
    const templateId = "template_ousmvq4";
    const userId = "yhEFN-jazDuxG5O7u";

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        // Reset the form after successful submission
        e.target.reset();

        // Optionally, you can add a success message or redirect the user
      }, (error) => {
        console.error('Email sending failed:', error.text);
        // Optionally, you can add an error message
      });
  };


  return <div className="form">
    <form onSubmit={handleSubmit}>
      <label>Your Name :</label>
      <input type="text" placeholder="Type Your Name" name="user_name" />
      <label>Email :</label>
      <input type="email" placeholder="Type Your Email" name="user_email" />
      <label>Message :</label>
      <textarea rows="6" placeholder="Type Your Message" name="message"></textarea>
      <button className="btn">Submit</button>
    </form>
  </div>;
};

export default Form;
