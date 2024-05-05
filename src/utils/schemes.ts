import * as Yup from "yup";

export const usernameSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, "usernameNotAllowedLegth")
    .max(20, "usernameNotAllowedLegth")
    .matches(/^[aA-zZ]+$/, "usernameNotAllowedSymbols")
    .required("usernameNotFilled"),
});
export const emailSchema = Yup.object().shape({
  email: Yup.string()
    .email("emailNotMasked")
    .matches(/\./, "emailNotMasked")
    .required("emailNotFilled"),
});

export const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "passwordNotAllowedLegth")
    .max(15, "passwordNotAllowedLegth")
    .matches(/[a-z]/, "passwordNotAllowedSymbols")
    .matches(/[A-Z]/, "passwordNotAllowedSymbols")
    .matches(/\d/, "passwordNotDigitRequire")
    .matches(/[!@#$%^&*()_=+-]/, "passwordNotSpecSymbolRequire")
    .matches(/^[aA-zZ\d!@#$%^&*()_=+-]+$/, "passwordNotAllowedSymbols")
    .required("passwordNotFilled"),
});
export const confirmPasswordSchema = Yup.object().shape({
  confirmPassword: Yup.string()
    .required("confirmPasswordNotFilled")
    .oneOf([Yup.ref("password"), null], "confirmPasswordNotEqual"),
});
