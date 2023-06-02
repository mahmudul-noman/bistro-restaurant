import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);
const Payment = () => {
    return (
        <>
            <SectionTitle heading='Payment' subHeading='Pay Your Cost'></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </>
    );
};

export default Payment;