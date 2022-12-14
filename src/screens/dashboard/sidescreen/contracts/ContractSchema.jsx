import * as Yup from 'yup';
import ERRORS from '../../../../constants/formErrors';

const ContractSchema = Yup.object().shape({
    location: Yup.object({
        postalCode: Yup
            .number()
            .required(ERRORS.ERROR_REQUIRED)
            .min(5),
        city: Yup
            .string()
            .required(ERRORS.ERROR_REQUIRED)
            .min(3),
        street: Yup
            .string()
            .required(ERRORS.ERROR_REQUIRED),
        streetNumber: Yup
            .number()
            .required(ERRORS.ERROR_REQUIRED),
    }),
    price: Yup
        .number()
        .required(ERRORS.ERROR_REQUIRED),
    solarPanel: Yup
        .number()
        .min(0),
    powerPerPanel: Yup
        .number()
        .min(0),
})

export default ContractSchema