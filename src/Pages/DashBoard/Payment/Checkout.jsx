import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAuthContext from '../../../hooks/useAuthContext';
import useSecureUrl from '../../../hooks/useSecureUrl';
import useBooked from '../../../hooks/useBooked';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = ({ price }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const { user } = useAuthContext();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClienSecret] = useState('');
  const [secureURL] = useSecureUrl();
  const [processing, setProcessing] = useState(false);
  const [transctionId, setTranscrtionId] = useState('');
  const { booking } = useBooked();

  useEffect(() => {
    secureURL.post('/create-payment-intent', { price }).then((res) => {
      setClienSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log(card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      console.log('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
      console.log('payment', paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    if (paymentIntent.status === 'succeeded') {
      const transcId = paymentIntent.id;
      setTranscrtionId(transcId);
      const paymentInfo = {
        email: user?.email,
        transctionId: transcId,
        price,
        classesQuantity: booking.length,
        classIdes: booking.map((c) => c.classId),
      };

      secureURL.post('/paymentHistory', paymentInfo).then(() => {});

      secureURL
        .delete(`/deleteBookedClass/${user?.email}`, booking)
        .then(() => {});
      booking.forEach((book) => {
        delete book['_id'];
        delete book['count'];
      });
      secureURL.post('/enrolledMany', booking).then((res) => {
        if (res.data.insertedCount > 0) {
          toast('WoW! your payment completed successfully');
          navigate('/dashboard/studentEnrollClasses');
        }
      });
    }
  };

  return (
    <div>
      <form className='m-10 w-96' onSubmit={handleSubmit}>
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
          className='btn btn-primary btn-xs'
          type='submit'
          disabled={!stripe || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className='text-red-600 text-lg ml-10'>{cardError}</p>}
      {transctionId && (
        <p className='text-green-600 text-lg ml-10'>
          {' '}
          Your Transction is Complete TransctionId: {transctionId}
        </p>
      )}
    </div>
  );
};

export default Checkout;
