import * as Yup from 'yup';
import ERRORS from '../../../../../constants/formErrors';

const TicketSchema = Yup.object().shape({
    price: Yup
        .number()
        .required(ERRORS.ERROR_REQUIRED)
        .min(0.13)
        .max(0.17),
    quantity: Yup
        .number()
        .required(ERRORS.ERROR_REQUIRED)
        .positive(),
})

export default TicketSchema