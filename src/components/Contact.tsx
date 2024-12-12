// import React, { useRef, useState } from "react";
// import "../assets/styles/Contact.scss";
// // import emailjs from '@emailjs/browser';
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";
// import TextField from "@mui/material/TextField";
// import emailjs from "@emailjs/browser";
// // import { emailjs } from "emailjs";
// function Contact() {
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const [nameError, setNameError] = useState<boolean>(false);
//   const [emailError, setEmailError] = useState<boolean>(false);
//   const [messageError, setMessageError] = useState<boolean>(false);

//   const form = useRef();

//   const sendEmail = (e: any) => {
//     e.preventDefault();

//     // Check for errors
//     const isNameValid = name.trim() !== "";
//     const isEmailValid = email.trim() !== "" && /\S+@\S+\.\S+/.test(email);
//     const isMessageValid = message.trim() !== "";

//     setNameError(!isNameValid);
//     setEmailError(!isEmailValid);
//     setMessageError(!isMessageValid);

//     if (isNameValid && isEmailValid && isMessageValid) {
//       // Prepare email parameters
//       const templateParams = {
//         name: name,
//         email: email,
//         message: message,
//       };

//       // Use EmailJS to send the email
//       emailjs
//         .send(
//           "service_fhtr5nb", // Replace with your EmailJS service ID
//           "template_p8f0ig3", // Replace with your EmailJS template ID
//           templateParams,
//           "kfcGokqGACqpDqCd2" // Replace with your EmailJS user ID (API key)
//         )
//         .then(
//           (response) => {
//             console.log(
//               "Email sent successfully:",
//               response.status,
//               response.text
//             );
//             alert("Thank you for reaching out! I'll get back to you shortly.");

//             // Clear form fields after successful submission
//             setName("");
//             setEmail("");
//             setMessage("");
//           },
//           (error) => {
//             console.error("Failed to send email:", error);
//             alert("Something went wrong. Please try again later.");
//           }
//         );
//     }
//   };

//   return (
//     <div id="contact">
//       <div className="items-container">
//         <div className="contact_wrapper">
//           <h1>Contact Me</h1>
//           <p>
//             Got a project waiting to be realized? Let's collaborate and make it
//             happen!
//           </p>
//           <Box
//             ref={form}
//             component="form"
//             noValidate
//             autoComplete="off"
//             className="contact-form"
//           >
//             <div className="form-flex">
//               <TextField
//                 required
//                 id="outlined-required"
//                 label="Your Name"
//                 placeholder="What's your name?"
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//                 error={nameError}
//                 helperText={nameError ? "Please enter your name" : ""}
//               />
//               <TextField
//                 required
//                 id="outlined-required"
//                 label="Email / Phone"
//                 placeholder="How can I reach you?"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 error={emailError}
//                 helperText={
//                   emailError ? "Please enter your email or phone number" : ""
//                 }
//               />
//             </div>
//             <TextField
//               required
//               id="outlined-multiline-static"
//               label="Message"
//               placeholder="Send me any inquiries or questions"
//               multiline
//               rows={10}
//               className="body-form"
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//               }}
//               error={messageError}
//               helperText={messageError ? "Please enter the message" : ""}
//             />
//             <Button
//               variant="contained"
//               endIcon={<SendIcon />}
//               onClick={sendEmail}
//             >
//               Send
//             </Button>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const isNameValid = name.trim() !== "";
    const isEmailValid = email.trim() !== "" && /\S+@\S+\.\S+/.test(email);
    const isMessageValid = message.trim() !== "";

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    if (isNameValid && isEmailValid && isMessageValid) {
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(
          "service_fhtr5nb", // Replace with your EmailJS service ID
          "template_p8f0ig3", // Replace with your EmailJS template ID
          templateParams,
          "kfcGokqGACqpDqCd2" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log(
              "Email sent successfully:",
              response.status,
              response.text
            );
            alert("Thank you for reaching out! I'll get back to you shortly.");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.error("Failed to send email:", error);
            alert("Something went wrong. Please try again later.");
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-flex">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={nameError ? "error" : ""}
                />
                {nameError && (
                  <span className="error-message">Please enter your name</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={emailError ? "error" : ""}
                />
                {emailError && (
                  <span className="error-message">
                    Please enter a valid email
                  </span>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Send me any inquiries or questions"
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={messageError ? "error" : ""}
              ></textarea>
              {messageError && (
                <span className="error-message">Please enter the message</span>
              )}
            </div>
            <button type="submit" className="submit-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
