/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51SU7QZCsNDi1hbusluGfBXilJG7LbT0RTtttR0MU7vC0JJ8ygf1E1NLRYdVOR6Mz3wuPKWTsG04UulfLeGd9AnzU00QrkBaf0H'
);

export const bookTour = async tourId => {
  try {
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
