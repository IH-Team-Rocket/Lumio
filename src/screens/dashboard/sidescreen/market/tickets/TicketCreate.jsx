import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../../components/misc/Input';
import { getContracts } from '../../../../../services/ContractService';
import { createTicket } from '../../../../../services/TicketService';
import { getCurrentUser } from '../../../../../services/UserService';
import TicketSchema from './TicketSchema';

const INITIAL_VALUES = {
    price: "",
    quantity: ""
}

function TicketCreate() {
    const [ options, setOptions ] = useState([])

    const {
        values, errors, isSubmitting, setSubmitting, setFieldError, handleSubmit, handleChange, handleBlur,
    } = useFormik({
        initialValues: INITIAL_VALUES,
        onSubmit: onSubmit,
        validationSchema: TicketSchema
    })


    useEffect(() => {
        getCurrentUser()
            .then(user => {
                getContracts(user)
                    .then(contracts => {
                        console.log(contracts);
                        return contracts.map(contract => {
                            return {
                                value: contract.id,
                                name: `${contract.location.street}, ${contract.location.streetNumber}`
                            }
                        })
                    })
                    .then((e) => {
                        if(e.length > 1 ) {
                            setOptions(e)
                        }else {
                            
                        }
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }, [])


    const navigate = useNavigate()

    function onSubmit() {
        console.log(values)
        createTicket(values)
            .then(ticket => {
                navigate('/market')
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
    
    
    return options ? (
        <div>
            <h1>Create Ticket</h1>

            <form onSubmit={handleSubmit}>

                <select name='sellingUserContract'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="select-contract"
                >
                    <option disabled selected>Choose you contract</option>
                    {options?.map(option => {
                        return <option value={option.value}> {option.name}</option>
                    })}
                </select>

                <Input 
                    outputFormat="number"
                    label="Price"
                    step=".01"
                    placeholder="Add price to sell at"
                    name="price"
                    id="price"
                    value={values.price}
                    onChange={handleChange}
                    error={errors.price}
                    onBlur={handleBlur}
                />

                <Input 
                    type='number'
                    label="Quantity"
                    placeholder="Add ammount to sell"
                    name="quantity"
                    id="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                    error={errors.quantity}
                    onBlur={handleBlur}
                />

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Loading' : 'Submit'}
                </button>
            </form>
        </div>
    ) : (
        <p> Loading... </p>
    );

}

export default TicketCreate;