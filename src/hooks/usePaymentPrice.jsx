import { useState } from 'react';
import useBooked from './useBooked';

const usePaymentPrice = () => {
  //TODO: PRICE WILL BE DYNAMIC
  const { bookingClass } = useBooked();
  const totalPrice = bookingClass.reduce((sum, item) => item?.price + sum, 0);
  const [price, setPrice] = useState(totalPrice);
  return [price, setPrice];
};

export default usePaymentPrice;
