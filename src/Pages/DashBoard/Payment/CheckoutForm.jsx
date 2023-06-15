import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useSecureUrl from '../../../hooks/useSecureUrl';
import useAuthContext from '../../../hooks/useAuthContext';

const CheckoutForm = ({ price }) => {
  console.log(price);
  const [secureURL] = useSecureUrl();
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuthContext();
  // useEffect(() => {
  //   secureURL
  //     .post('/create-payment-intent', { price })
  //     .then((res) => setClientSecret(res.data.clientSecret));
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log(paymentIntent);
    }
  };

  return (
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
      <button
        type='submit'
        className='btn-primary my-3'
        disabled={!stripe || clientSecret}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
