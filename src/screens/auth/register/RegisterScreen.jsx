import { useFormik } from 'formik';
import RegisterSchema from './RegisterSchema';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/misc/Input';
import { createUser } from '../../../services/UserService';
import './RegisterScreen.scss'

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

function Register() {

  const {
    values, handleChange, handleBlur, handleSubmit, errors,
    isSubmitting, setSubmitting, setFieldError
  } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: onSubmit,
    validationSchema: RegisterSchema,
    validateOnBlur: false,
    validateOnChange: false,
  })

  const navigate = useNavigate();

  function onSubmit(values) {
    createUser(values)
      .then(user => {
        navigate('/login', { state: {
          email: values.email
        } })
      })
      .catch(err => {
        console.log(err.response.data)

        err.response.data &&
          Object.keys(err.response.data.errors)
            .forEach((errorKey) => {
              setFieldError(errorKey, err.response.data.errors[errorKey])
            })
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <div className="signup-container">
      <div className='card'>
        <h1>Sign up</h1>

        <form onSubmit={handleSubmit}>
          <Input
            label="First name"
            placeholder="Add user first name"
            name="firstName"
            id="fistName"
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName}
            onBlur={handleBlur}
          />

          <Input
            label="Last name"
            placeholder="Add user last name"
            name="lastName"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
            error={errors.lastName}
            onBlur={handleBlur}
          />

          <Input
            label="Email"
            placeholder="Add email"
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            onBlur={handleBlur}
          />

          <Input
            label="Password"
            placeholder="Add password"
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            onBlur={handleBlur}
          />

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Loading' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );

};

export default Register;