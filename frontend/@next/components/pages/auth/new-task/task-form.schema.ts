import * as yup from "yup";

export const TaskSchema = yup
  .object({
    title: yup.string().required("title is required").min(6, "invalid title"),
    description: yup
      .string()
      .required("description is required")
      .min(6, "invalid Description"),
  })
  .required();
