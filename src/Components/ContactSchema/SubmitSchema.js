import * as yup from 'yup'

const SubmitSchema = yup.object().shape({
  name: yup
      .string()
      .min(3,"Name must be atleast 3 charecters long")
      .required("Required"),
  
  email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required")
      .min(5, "Email must be at least 5 characters")
      .max(255, "Email can't be longer than 255 characters")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email must follow a valid format"
      )
      .test(
        "notBlockedDomain",
        "This domain is not allowed",
        (value) => !value || !value.endsWith("@example.com")
      ),
  message: yup
      .string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters")
      .max(5000, "Message can't be longer than 500 characters")
  
})

export default SubmitSchema