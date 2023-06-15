import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';
import usePaymentPrice from '../../../hooks/usePaymentPrice';
import Checkout from './Checkout';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHER_KEY);
const Payment = () => {
  const [price] = usePaymentPrice();
  console.log(price);
  console.log(import.meta.env.VITE_PUBLISHER_KEY);
  return (
    <section className='allContainer'>
      <h2>taka o taka</h2>
      <div className='md:w-1/4 mx-auto'>
        <Elements stripe={stripePromise}>
          <Checkout price={price} />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
