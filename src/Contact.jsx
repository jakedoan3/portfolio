import React, {useState} from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubject = (e) => {
    setSubject(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    // send email functionality
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
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
      <form onSubmit={sendEmail}>
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
      </form>

      {/* contact form
        requires name, email, subject, and message fields
        emails to jakedoan3@gmail.com */}
    </div>
  );
};

export default Contact;
