import * as Yup from 'yup'
import ERRORS from '../../../constants/formErrors';

const RegisterSchema = Yup.object().shape({
  firstName: Yup
    .string()
    .required(ERRORS.ERROR_REQUIRED)
    .min(3, ERRORS.ERROR_FIRSTNAME_LENGTH),
  
  lastName: Yup
    .string()
    .required(ERRORS.ERROR_REQUIRED)
    .min(3, ERRORS.ERROR_LASTNAME_LENGTH),

  email: Yup
    .string()
    .required(ERRORS.ERROR_REQUIRED)
    .email(ERRORS.ERROR_VALID_EMAIL),

  password: Yup
    .string()
    .min(8, ERRORS.ERROR_PASSWORD_LENGTH)
    .required(ERRORS.ERROR_REQUIRED)
})

export default RegisterSchema