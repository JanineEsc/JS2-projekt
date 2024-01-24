function Contact() {

  
  return (
    <form className="contact-container">
      <div className="contact-card">
      <h1> Contact Us </h1>
        <label for="fname"> Name</label>
        <input type="text" placeholder="Write your name" />

        <label htmlFor="email"> Email</label>
        <input type="text" placeholder="Write your email" />

        <label for="message"> Message </label>
        <textarea id="subject" name="subject" placeholder=""></textarea>
      <button className="contact-btn"> Send </button>
      </div>

    </form>
  )
}
export default Contact