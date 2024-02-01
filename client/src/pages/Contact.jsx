import React, { useState } from 'react'


function Contact() {
  const [user,setUser]=useState({
    username:"",
    email:"",
    message:"",
  });

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(user);
  }
  return (
    <section>
        <main>
          <div className="section-contact">
            <div className="section-contact-container grid grid-two-cols">
              <div className="contact-img">
                <img src="../../public/Images/contact.webp" alt="Login" width="500" height="500" className='contact-img-img'></img>
              </div>
              <div className="section-from">
                <h1 className="main-heading mb-3">Contact Us</h1>
                <br/>

                <form onSubmit={handleSubmit} className='section-form-main'>
                  <div>
                    <label htmlFor='username' className='section-form-label'>Username</label>
                    <input type="text" name='username' placeholder='enter your username' id='username' required autoComplete='off' value={user.username} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor='email' className='section-form-label'>Email</label>
                    <input type="text" name='email' placeholder='enter your email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}/>
                  </div>
                  <div>
                    <label htmlFor='message' className='section-form-label'>Message</label>
                    <textarea name='message' placeholder='enter your message' id='message' required autoComplete='off' value={user.message} onChange={handleInput} cols={30} rows={5}/>
                  </div>
                  <br/>
                  <button type='submit' className="btn btn-submit">Submit</button>
                </form>
              </div>
            
            </div>
          </div>
          
        </main>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2444402252904!2d72.83852328625264!3d21.142668330347114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051ce30709eaf%3A0x47deb6872d7bb25e!2sAgarwal%20Engineering!5e0!3m2!1sen!2sin!4v1706773434111!5m2!1sen!2sin" width="600"  height="450"   allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
  )
}

export default Contact