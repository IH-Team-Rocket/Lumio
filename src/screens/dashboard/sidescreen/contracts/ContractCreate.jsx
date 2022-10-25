import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../components/misc/Input';
import { createContract } from '../../../../services/ContractService';
import ContractSchema from './ContractSchema';

const INITIAL_VALUES = {
    location: {
        postalCode: undefined,
        city: undefined,
        street: undefined,
        streetNumber: undefined,
    },
    price: undefined,
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
        console.log('entro');
        createContract(values)
        console.log('entro')
            .then(contract => {
                console.log(contract);
                navigate(`/contracts/${contract.id}`)
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
                setSubmitting(false)
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
                    label="City"
                    placeholder="Add your City"
                    name="city"
                    id="city"
                    value={values.location.city}
                    onChange={handleChange}
                    error={errors.city}
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
                    type='number'
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
                    type='number'
                    step=".01"
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
                    type='number'
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
                    type='number'
                    label="Power per Panel"
                    placeholder="Add kwh generated per panel"
                    name="powerPerPanel"
                    id="powerPerPanel"
                    value={values.location.powerPerPanel}
                    onChange={handleChange}
                    error={errors.powerPerPanel}
                    onBlur={handleBlur}
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Loading' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default ContractCreate;