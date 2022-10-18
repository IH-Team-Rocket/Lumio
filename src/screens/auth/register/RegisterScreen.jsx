import { useFormik } from 'formik';
import RegisterSchema from './RegisterSchema';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/misc/Input';
import { createUser } from '../../../services/UserService';

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
        console.log(user);
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
    <div className="Signup container">
      <h1>Sign up</h1>

      <form onSubmit={handleSubmit}> {/* Si el onSubmit esta en el form, se puede hacer submit con el Enter o con un button de type submit(valor por defecto) */}
        <Input
          label="First name"
          placeholder="Add user first name"
          name="firstName"
          id="fistName"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName}
          onBlur={handleBlur} // Cuando dejas de hacer focus en un input
        />

        <Input
          label="Last name"
          placeholder="Add user last name"
          name="lastName"
          id="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName}
          onBlur={handleBlur} // Cuando dejas de hacer focus en un input
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
  );

};

export default Register;