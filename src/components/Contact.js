import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('XjmXlshX', 'template_xzz76cg', form.current, '_tu_G-ou654LRC72-')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          alert("Message send");
      }, (error) => {
          console.log(error.text);
          console.log("message failed");
      })}

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  return (
    <section className="contact" id="connect">
      <Container className="mx-auto">
      <h2 className="text-4xl font-medium text-white ml-10 -ml-2 mb-5 border-b-[10px] w-[180px] border-lime-400 pb-2 ">
                        Reach Me
                        {/* here */}
                    </h2>
        <Row className="md:flex items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                // <img className={`w-full ${isVisible ? "animate__animated animate__zoomIn" : ""}`} src={contactImg} alt="Contact Us" />
                <iframe src="https://lottie.host/embed/2ebd2c47-2ce1-46b5-8f92-15fcf99102e9/1EK2oTb6oV.json" title="contact-bot" className=" w-[400px] h-[200px] md:w-[700px] md:h-[700px]"></iframe>
              )}
            </TrackVisibility>
            
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`flex flex-col ${isVisible ? "" : ""}`} >
                  {/* animate__animated animate__fadeIn */}
                  
                  <form ref={form} onSubmit={sendEmail} className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                      <input type="text" value={formDetails.firstName} name="firstName" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                      <input type="text" value={formDetails.lasttName} name="lastName" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                      <input type="email" value={formDetails.email} name="email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                      <input type="tel" value={formDetails.phone} name="phone" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="w-full px-2 mb-4">
                      <textarea rows="6" value={formDetails.message} name="message" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} className="w-full p-2 border border-gray-300 rounded"></textarea>
                      <button type="submit" className="bg-greengradient text-white p-2 rounded"><span>Send</span></button>
                    </div>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
