import * as yup from "yup";

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required("An email address is required"),
});

export const loginAuthSchema = yup.object().shape({
  email: yup.string().email().required("An email is required"),
  password: yup.string().required("A password is required"),
});
