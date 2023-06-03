import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
// import './CheckoutForm.css'

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const element = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')


    useEffect(() => {
        console.log(price);
        axiosSecure.post('/create-payment-intent', { price })
            .then((res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)

            }))
    }, [price, axiosSecure])




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !element) {
            return;
        }
        const card = element.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Error', error);
            setCardError(error.message)
        }
        else {
            setCardError('');
            // console.log('Payment Method', paymentMethod);
        }
        setProcessing(true)


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'Anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)

        console.log('Payment Intent', paymentIntent);

        if (paymentIntent.status = "succeeded") {
            setTransactionId(paymentIntent.id);
            const transactionId = paymentIntent.id;
            // Save payments data to DB
            const payment = {
                user: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // display confirm
                    }
                })
        }
    }





    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-wide mx-auto mt-10 flex" type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600 flex items-center mt-5"><FaInfoCircle className="mr-2"></FaInfoCircle> {cardError}</p>
            }
            {
                transactionId && <p className="text-green-600 flex items-center mt-5"><FaInfoCircle className="mr-2"></FaInfoCircle> Transaction Complete from this ID: {transactionId}</p>
            }
        </>
    );
};

export default CheckoutForm;