import * as yup from "yup";

export const authInfoSchema = yup.object().shape({
  email: yup.string().required("An email is required"),
  username: yup.string().required("A username is required"),
});
