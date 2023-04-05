import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Projects() {
  return (
    <Container id="projects">
      <h2>My Projects</h2>

      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <div>
                  <a
                    href="https://carpenco-store.web.app"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="live-text">Live Link</h4>
                    <img src={externalLinkIcon} alt="Visitor site" />
                  </a>
                  <a
                    href="https://github.com/muhammadnurulahsan/Carpenco-Store-Client-Side"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="client-text">Client Side</h4>
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <div>
                    <a
                      href="https://github.com/muhammadnurulahsan/Carpenco-Store-Server-Side"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-flex"
                    >
                      <h4 className="server-text">Server Side</h4>
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <div className="body">
              <h3>Carpenco Store (Manufacturer Website)</h3>
              <p>
                It is developed for the people who want to buy carpenter tools.
                It shows a dashboard which has different functionality for
                normal Users and Admin.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <div>
                  <a
                    href="https://motors-warehouse.web.app"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="live-text">Live Link</h4>
                    <img src={externalLinkIcon} alt="Visitor site" />
                  </a>
                  <a
                    href="https://github.com/muhammadnurulahsan/Motors-Warehouse-Client-Side"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="client-text">Client Side</h4>
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <div>
                    <a
                      href="https://github.com/muhammadnurulahsan/Motors-Warehouse-Server-Side"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-flex"
                    >
                      <h4 className="server-text">Server Side</h4>
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <div className="body">
              <h3>Motors Warehouse (Warehouse Website)</h3>
              <p>
                That website is mainly built focusing on importers of branded
                cars. As a new importer, his products will be shown on “My
                items”. All the Importers products will be shown on the “Manage
                Inventory”.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>JWT</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <div>
                  <a
                    href="https://eleanor-atwood.web.app"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="live-text">Live Link</h4>
                    <img src={externalLinkIcon} alt="Visitor site" />
                  </a>
                  <a
                    href="https://github.com/muhammadnurulahsan/Eleanor-Atwood"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="client-text">GitHub Link</h4>
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </div>
            </header>
            <div className="body">
              <h3>Eleanor Atwood (React Tutor Website)</h3>
              <p>
                It is mainly built focusing on mathematics tutor services and
                other courses. The user can preview the course details. He can
                buy any kind of course that are available on the site and
                confirming order from that site.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Netlify</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <div>
                  <a
                    href="https://apollo-health-care.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="live-text">Live Link</h4>
                    <img src={externalLinkIcon} alt="Visitor site" />
                  </a>
                  <a
                    href="https://github.com/devmuhammadnurulahsan/apollo-health-care"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="client-text">GitHub Link</h4>
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </div>
            </header>
            <div className="body">
              <h3>Apollo Health Care (React Project)</h3>
              <p>
                It is mainly built focusing on medical services and health care
                products. The user can buy any kind of medicine that are
                available on the site just by pressing some buttons and ordering
                from that site.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>React Bootstrap</li>
                <li>Netlify</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <div>
                  <a
                    href="https://best-travel-webapp.web.app"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="live-text">Live Link</h4>
                    <img src={externalLinkIcon} alt="Visitor site" />
                  </a>
                  <a
                    href="https://github.com/devmuhammadnurulahsan/best-travels-client-side"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="client-text">Client Side</h4>
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <div>
                    <a
                      href="https://github.com/devmuhammadnurulahsan/best-travels-server-side"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-flex"
                    >
                      <h4 className="server-text">Server Side</h4>
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <div className="body">
              <h3>Best Travels (MERN Stack Travel Website)</h3>
              <p>
                That website is mainly built focusing on places for tourists by
                which travelers can book any package of travel-plans and save
                their money and time as well.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <div>
                  <a
                    href="https://rotors-car-website.web.app"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="live-text">Live Link</h4>
                    <img src={externalLinkIcon} alt="Visitor site" />
                  </a>
                  <a
                    href="https://github.com/devmuhammadnurulahsan/rotors-car-client-side"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-flex"
                  >
                    <h4 className="client-text">Client Side</h4>
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <div>
                    <a
                      href="https://github.com/devmuhammadnurulahsan/rotors-car-sever-side"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-flex"
                    >
                      <h4 className="server-text">Server Side</h4>
                      <img src={githubIcon} alt="GitHub" />
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <div className="body">
              <h3>Rotors Car (MERN Stack Car Website)</h3>
              <p>
                It is developed for the people who want to buy a car. It shows a
                dashboard which has different functionality for normal Users and
                Admin.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
