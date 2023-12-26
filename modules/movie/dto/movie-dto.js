import * as yup from "yup";

export const movieDto = yup.object().shape({
    name: yup.string().required(),
    releaseDate: yup.string(),
    duration: yup.string().required(),
    description: yup.string()
});
