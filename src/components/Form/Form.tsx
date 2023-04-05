import { Container, ContainerSuccess } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";

export function Form() {
  const [state, handleSubmit] = useForm("myForm");
  const [validEmail, setValidEmail] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Email Sent Successfully", {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  });
  if (state.succeeded) {
    return (
      <ContainerSuccess>
        <h3>Thank you for Contacting US!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back To The Top
        </button>
        <ToastContainer />
      </ContainerSuccess>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form below</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Leave Your Message Here"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <ReCAPTCHA
          sitekey="6LcnkmUgAAAAAAGaeh2j7xVjG5Xu6BcRHvKFsEZv"
          onChange={(e) => {
            setIsHuman(true);
          }}
        ></ReCAPTCHA>
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
