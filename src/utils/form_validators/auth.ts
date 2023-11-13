import * as yup from "yup";

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required("An email address is required"),
});
