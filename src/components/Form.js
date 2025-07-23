import "./FormStyles.css";
import React, {useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Form = () => {
   const form = useRef();
   const [isLoading, setIsLoading] = useState(false);
   
   const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm(
      "service_9jd67bt",
      "template_4y6rpjp",
      form.current,
      "aUWCVKvsQRaFaf4Qj"
    ).then(
      (result) => {
        toast.success("Message sent.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          pauseOnHover: true,
          theme: "light",
        });
        form.current.reset();
      },
      (error) => {
        toast.error("Failed to send message.");
        console.error(error);
      }
    ).finally(() => {
      setIsLoading(false);
    });
   };

    return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input name="name" type="text" required />

        <label>Email</label>
        <input name="email" type="email" required />

        <label>Subject</label>
        <input name="subject" type="text" required />

        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type your message here" required />
        <button className="btn" type="submit" disabled={isLoading}>
          
          {isLoading ? (
            <>
              sending <span className="spinner"/>
            </> ) :  
                       ("Send")  
          }
          </button>
      </form>
    </div>
  );
};

export default Form
