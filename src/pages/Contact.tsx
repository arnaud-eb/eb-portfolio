import axios from "axios";
import React, { useState, useEffect } from "react";
import PageHero from "../components/PageHero";
import SocialIcons from "../components/SocialIcons";
import styled from "styled-components";

interface CountactProps {
  text: string;
  next: number;
}

const Contact = ({ text, next }: CountactProps) => {
  const [data, setData] = useState({ email: "", subject: "", message: "" });
  const [redirect, setRedirect] = useState(false);

  const fetchData = async () => {
    axios.defaults.headers.post["Content-Type"] = "application/json";
    try {
      const response = await axios.post(
        "https://formsubmit.co/ajax/2debc7d3d484f2444bcf74c0279b90fa",
        {
          email: data.email,
          subject: data.subject,
          message: data.message,
        }
      );
      if (response.data.success) {
        setRedirect(true);
        setData({ email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (redirect) {
      id = setTimeout(() => {
        setRedirect(false);
      }, 7000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [redirect]);

  return (
    <section className="section">
      <PageHero text={text} next={next} />
      <Wrapper>
        <article>
          <p>
            I strongly believe in open source and I am seeking out opportunities
            to collaborate on interesting projects with passionate people. Have
            an exciting concept where you need some help? Send me over a
            message, and let's chat. If you want to find me elsewhere on the
            web, here’s where I hang out:
          </p>
          <SocialIcons />
        </article>
        <article>
          {redirect ? (
            <div className="thanks">
              <img src="./images/thankyou.avif" alt="thank you page" />
              <h4>I will get back to you shortly.</h4>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">your email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                onBlur={handleChange}
                required
              />
              <label htmlFor="subject">subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={data.subject}
                onChange={handleChange}
                onBlur={handleChange}
                required
              />
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={handleChange}
                onBlur={handleChange}
                cols={30}
                rows={10}
              ></textarea>
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
              ></input>
              <button type="submit">send message</button>
            </form>
          )}
        </article>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 0.875rem;

  article {
    padding: 1rem;
  }

  article:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: var(--clr-pale-spring-bud);
  }

  .social-icons {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    margin: 0 auto;
  }

  .social-icons svg {
    font-size: 1.5rem;
    color: var(--clr-pale-spring-bud);
    opacity: 0.8;
    cursor: pointer;
    transition: var(--transition);
  }

  .social-icons svg:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  .social-icons li:last-of-type {
    display: none;
  }

  article:nth-of-type(2) {
    padding: 0 1rem;
    display: grid;
    place-items: center;
  }

  .thanks {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 60%;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: var(--dark-shadow);
    }
    h4 {
      text-transform: none;
      color: var(--clr-light-blue);
    }
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;

    background-color: var(--clr-melon);
    border-radius: var(--radius);
    padding: 1rem;
    box-shadow: var(--light-shadow);

    label {
      text-transform: capitalize;
      color: var(--clr-puce);
    }

    input,
    textarea {
      background-color: var(--clr-pale-spring-bud);
      border: none;
      border-radius: var(--radius);
      padding: 0.5rem;
      font-family: "Montserrat", sans-serif;
    }

    textarea {
      height: 6rem;
    }

    button {
      background-color: var(--clr-puce);
      color: var(--clr-melon);
      font-family: "Righteous", cursive;
      font-size: 0.875rem;
      font-weight: 800;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      cursor: pointer;
      border: none;
      border-radius: var(--radius);
      padding: 0.2rem 0;
      transition: var(--transition);
      box-shadow: var(--light-shadow);
    }
    button:hover {
      background-color: var(--clr-light-blue);
      color: var(--clr-puce);
      box-shadow: var(--dark-shadow);
    }
  }

  @media screen and (min-width: 950px) {
    font-size: 1.2rem;
    p {
      line-height: 2rem;
    }
    .social-icons svg {
      font-size: 2rem;
    }

    .thanks {
      img {
        width: 40%;
      }
    }

    form {
      grid-template-columns: 120px 1fr;
      gap: 1rem;
      width: 90%;

      textarea {
        height: 10rem;
      }

      button {
        grid-column: 1 / 3;
        font-size: 1rem;
        padding: 0.5rem 0;
      }
    }
  }
`;

export default Contact;
