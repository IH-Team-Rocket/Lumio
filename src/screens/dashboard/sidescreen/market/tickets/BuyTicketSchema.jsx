import * as Yup from 'yup';
import ERRORS from '../../../../../constants/formErrors';

const BuyTicketSchema = Yup.object().shape({
  buyingUserContract: Yup
        .string()
        .required(ERRORS.ERROR_REQUIRED)
})

export default BuyTicketSchema