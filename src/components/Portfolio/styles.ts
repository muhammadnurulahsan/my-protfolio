import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;
      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        img {
          width: 2.6rem;
          margin-left: 1rem;
        }
      }

      .client-text {
        margin-right: 0.4rem;
        color: white;
      }
      .server-text {
        color: white;
      }
      .live-text {
        color: white;
        margin-right: 1.8rem;
      }

      .icon-flex {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
      }

      h3 {
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a {
          color: #ffff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
