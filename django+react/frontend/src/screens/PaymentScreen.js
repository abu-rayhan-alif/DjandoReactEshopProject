// import React, { useState } from 'react'
// import { Form, Button, Col } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import FormContainer from '../components/FormContainer'
// import CheckoutSteps from '../components/CheckoutSteps'
// import { savePaymentMethod } from '../actions/cartActions'
// import { useNavigate } from 'react-router-dom'

// function PaymentScreen() {
    
//     const history=useNavigate() 
//     const cart = useSelector(state => state.cart)
//     const { shippingAddress } = cart

//     const dispatch = useDispatch()

//     const [paymentMethod, setPaymentMethod] = useState('PayPal')

//     if (!shippingAddress.address) {
//         history('/shipping')
//     }

//     const submitHandler = (e) => {
//         e.preventDefault()
//         dispatch(savePaymentMethod(paymentMethod))
//         history('/placeorder')
//     }

//     return (
//         <FormContainer>
//             <CheckoutSteps step1 step2 step3 />

//             <Form onSubmit={submitHandler}>
//                 <Form.Group>
//                     <Form.Label as='legend'>Select Method</Form.Label>
//                     <Col>
//                         <Form.Check
//                             type='radio'
//                             label='PayPal or Credit Card'
//                             id='paypal'
//                             name='paymentMethod'
//                             checked
//                             onChange={(e) => setPaymentMethod(e.target.value)}
//                         >

//                         </Form.Check>
//                     </Col>
//                 </Form.Group>

//                 <Button type='submit' variant='primary'>
//                     Continue
//                 </Button>
//             </Form>
//         </FormContainer>
//     )
// }

// export default PaymentScreen

import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import { useNavigate } from 'react-router-dom'

function PaymentScreen() {
    const navigate = useNavigate(); // Rename history to navigate
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        navigate('/shipping') // Use navigate function
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder') // Use navigate function
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
