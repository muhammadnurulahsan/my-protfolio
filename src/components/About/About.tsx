import { Container } from "./styles";
import cssIcon from "../../assets/css-icon.svg";
import NurulAhsan from "../../assets/about.png";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="aboutme">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            My name is Nurul Ahsan, I'm a computer technician with a great
            passion for programming. I am passionate about delivering solutions
            that add to people's lives and at the same time challenge me.
            Improved my skills as a Front-End and Back-End developer.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I develop websites and applications using HTML, CSS, and JavaScript.
            I am familiar with developing layouts that they provide me. I'm
            always improving myself with each project I get my hands on.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            I am a dedicated person who pursues his dreams, hardworking and
            results oriented, I always seek to achieve my best version.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <p className="title-text">What is my goal objective?</p>
          <p>
            I want to be a Senior Full Stack professional web developer. The
            main objective when working as a developer is to be productive and
            deliver value to the company. To gain confidence and fame using my
            potential in the field of “Web Development”, and express my
            innovative creative skills for self and company growth.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="ability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="ability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>

          <div className="ability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="ability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="ability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="ability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          <div className="ability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={NurulAhsan} alt="Img of Nurul Ahsan" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
