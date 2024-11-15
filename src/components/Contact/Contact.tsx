import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>
          If you've seen my potential or want to talk to me, don't hesitate to
          send me a message.
        </p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:mdnurulahsanbdbd@gmail.com">
            mdnurulahsanbdbd@gmail.com
          </a>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone" />
          <a href="phone:+8801682413033">(+880) 1682 41 30 33 (Whatsapp)</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
