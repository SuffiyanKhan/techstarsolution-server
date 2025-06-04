import express from 'express';
import { stripeCheckoutController } from '../controllers/stripe.conrolers.js';

const stripeRouting = express.Router();

stripeRouting.post('/checkout', stripeCheckoutController);


export default stripeRouting;