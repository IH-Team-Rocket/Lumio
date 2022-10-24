import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../components/misc/Input';
import { createContract } from '../../../../services/ContractService';
import { getCurrentUser } from '../../../../services/UserService';
import ContractSchema from './ContractSchema';

const currentUser = getCurrentUser()

const INITIAL_VALUES = {
    location: {
        postalCode: undefined,
        street: undefined,
        streetNumber: undefined,
    },
    price: undefined,
    user: currentUser.id
}

function ContractCreate() {
    const {
        values, errors, isSubmitting, setSubmitting, setFieldError, handleSubmit, handleChange, handleBlur,
    } = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit: onSubmit,
        validationSchema: ContractSchema,
    })

    const navigate = useNavigate()

    function onSubmit(values) {
        createContract(values)
            .then(contract => {
                console.log(contract);
                navigate('/contract/id')
            })
            .catch(err => {
                console.log(err.response.data);

                err.response.data && 
                  Object.keys(err.response.data.errors)
                    .forEach((errorKey) => {
                        setFieldError(errorKey, err.response.data.errors[errorKey])
                    })
            })
            .finally(() => {
                setSubmitting(false )
            })
    }
    return (
        <div>
            <h1>Create contract</h1>

            <form onSubmit={handleSubmit}>
                <Input 
                    type='number'
                    label="Postal Code"
                    placeholder="Add Postal Code"
                    name="postalCode"
                    id="postalCode"
                    value={values.location.postalCode}
                    onChange={handleChange}
                    error={errors.postalCode}
                    onBlur={handleBlur}
                />

                <Input 
                    label="Street Name"
                    placeholder="Add Street Name"
                    name="street"
                    id="street"
                    value={values.location.street}
                    onChange={handleChange}
                    error={errors.street}
                    onBlur={handleBlur}
                />

                <Input 
                    label="Street Number"
                    placeholder="Add Street Number"
                    name="streetNumber"
                    id="streetNumber"
                    value={values.location.streetNumber}
                    onChange={handleChange}
                    error={errors.streetNumber}
                    onBlur={handleBlur}
                />

                <Input 
                    label="Price"
                    placeholder="Add the price of kwh"
                    name="price"
                    id="price"
                    value={values.location.price}
                    onChange={handleChange}
                    error={errors.price}
                    onBlur={handleBlur}
                />

                <Input 
                    label="Solar Panels"
                    placeholder="Do you have solar panels?"
                    name="solarPanels"
                    id="solarPanels"
                    value={values.location.solarPanels}
                    onChange={handleChange}
                    error={errors.solarPanels}
                    onBlur={handleBlur}
                />

                <Input 
                    label="Power per Panel"
                    placeholder="Add kwh generated per panel"
                    name="powerPerPanel"
                    id="powerPerPanel"
                    value={values.location.powerPerPanel}
                    onChange={handleChange}
                    error={errors.powerPerPanel}
                    onBlur={handleBlur}
                />
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Loading' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default ContractCreate;