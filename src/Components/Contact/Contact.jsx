import { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import SubmitSchema from "../ContactSchema/SubmitSchema";
import emailjs from "@emailjs/browser";
import { pinwheel } from "ldrs";

pinwheel.register();

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  async function handleSubmit(values, actions) {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          address: values.address,
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error", error);
    } finally {
      actions.resetForm();
      setShowMessage(true);
    }
  }

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setShowMessage(false);
        setSubmitStatus(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="font-bold text-2xl">Contact Us</h3>
      <div className="flex flex-col justify-start items-start mt-3">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={SubmitSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="flex flex-col w-full max-w-[500px] min-w-[300px] md:min-w-[300px]">
                <label htmlFor="name" className="font-semibold">
                  Name:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border-2 border-primaryBorder rounded p-1 outline-none text-primaryText font-semibold placeholder:font-normal"
                />
                <ErrorMessage
                  id="name"
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col w-full max-w-[500px] mt-3">
                <label htmlFor="email" className="font-semibold">
                  Email:
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border-2 border-primaryBorder rounded p-1 outline-none text-primaryText font-semibold placeholder:font-normal"
                />
                <ErrorMessage
                  id="email"
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col w-full max-w-[500px] mt-3">
                <label htmlFor="message" className="font-semibold">
                  Message:
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full border-2 border-primaryBorder rounded p-1 outline-none text-primaryText font-semibold placeholder:font-normal"
                />
                <ErrorMessage
                  id="message"
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="font-bold text-primaryText bg-primaryBg border-2 border-primaryBorder rounded p-1 pl-5 pr-5 mt-4 hover:text-white hover:bg-primaryBorder transition duration-200 ease-out"
              >
                {isSubmitting ? (
                  <l-pinwheel
                    size="20"
                    stroke="3.5"
                    speed="0.9"
                    color="white"
                  />
                ) : (
                  "SUBMIT"
                )}
              </button>
              {showMessage && submitStatus === "success" && (
                <p className="text-green-500 text-sm mt-2">
                  Message sent successfully!
                </p>
              )}
              {showMessage && submitStatus === "error" && (
                <p className="text-red-500 text-sm mt-2">
                  Failed to send message. Please try again.
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
