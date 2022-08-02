import React, {useRef} from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // const handleName = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleSubject = (e) => {
  //   setSubject(e.target.value);
  // };

  // const handleMessage = (e) => {
  //   setMessage(e.target.value);
  // };

  // const sendEmail = async (e) => {
  //   e.preventDefault();
  //   // send email functionality
  //     setName("");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //   };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r9sxzjd', 'template_r2as221', form.current, 'nMnrLLdsoNIyQquxC')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent Successfully!")
      }, (error) => {
          console.log(error.text);
      });
  };




  return (
    <div>
      <h1>Contact</h1>
      <h2>
        If you have any inquiries or opportunities to work together, please
        reach out to me with the form below. I respond to all inquiries in a
        timely fashion.
      </h2>
      <br />
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

      {/* <form onSubmit={sendEmail}>
      <input
          placeholder="Name"
          value={name}
          onChange={handleName}
          required
        ></input>
        <hr />
        <input
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        ></input>
        <hr />
        <input
          placeholder="Subject"
          value={subject}
          onChange={handleSubject}
          required
        ></input>
        <hr />
        <input
          placeholder="Message"
          value={message}
          onChange={handleMessage}
          required
        ></input>
        <hr />
        <button>Submit</button>
      </form> */}

      {/* contact form
        requires name, email, subject, and message fields
        emails to jakedoan3@gmail.com */}
    </div>
  );
};

export default Contact;
