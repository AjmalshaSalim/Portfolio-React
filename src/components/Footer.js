import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer w-full">
      <Container className="w-full mx-auto">
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social flex flex-auto social-icon">
              <a href="https://www.linkedin.com/in/ajmalsha-salim-349162253/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php/?id=100093266584023"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/xj_m_xl?igshid=OGQ5ZDc2ODk2ZA=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;