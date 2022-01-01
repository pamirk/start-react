import { stripe } from './';
import Stripe from 'stripe';

export async function createStripeCheckoutSession(line_items: Stripe.Checkout.SessionCreateParams.LineItem[]) {
  // Example Item
  // {
  //   name: 'T-shirt',
  //   description: 'Comfortable cotton t-shirt',
  //   images: ['https://example.com/t-shirt.png'],
  //   amount: 500,
  //   currency: 'usd',
  //   quantity: 1,
  // }

  const url = 'http://localhost:3000/#';

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    success_url: `${url}/account`,
    cancel_url: `${url}/account`,
  });

  return session;
}
