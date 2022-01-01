import Stripe from 'stripe';
import { app, } from './api';

// Environment Variables (Stripe API Key)
import { config } from "dotenv"
if (process.env.NODE_ENV !== 'production') {
    config();
}

// Initialize Stripe
export const stripe = new Stripe(process.env.STRIPE_SECRET, {
    apiVersion: '2020-03-02',
});


// Start the API with Express
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`API available on http://localhost:${port}`));
