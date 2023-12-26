import * as yup from "yup";

export const authDto = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().required()
});
