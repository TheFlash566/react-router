const Contact = () => {
    return (
      <div className="contact">
        <h1 style={{fontSize: '60px',
    marginBottom: '48px', textAlign: "center",}}>Contact Micko!</h1>
        <form action="" className="form">
          <input type="text" placeholder="Type Your Name" style={{height: '45px',
    textIndent: '12px',}}/>
          <input type="email" placeholder="Type Your Email" style={{height: '45px',
    textIndent: '12px',}}/>
          <input type="number" placeholder="Type Your Mobile No." style={{height: '45px',
    textIndent: '12px',}}/>
          <textarea style={{textIndent: '15px', paddingTop: '10px',}} name="message" id="message" cols="30" rows="10" placeholder="Type Your Message"></textarea>
          <button className="button">Submit</button>
        </form>
      </div>
    )
  };
  
  export default Contact;