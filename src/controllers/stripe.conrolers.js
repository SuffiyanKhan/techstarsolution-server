import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Ensure your Stripe secret key is in env

export const stripeCheckoutController = async (req, res) => {
  const {
    address,
    city,
    country,
    currency = 'aed', // default to AED
    email,
    fullName,
    phone,
    price,
    serviceName,
    zipCode,
  } = req.body;

  try {
    if (!price || !email || !serviceName) {
      return res.status(400).json({ error: 'Missing required fields: price, email or serviceName' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: serviceName,
              description: `Service in ${city}, ${country}`,
            },
            unit_amount: Math.round(Number(price) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `https://techstarsolution.net/success`,
      cancel_url: `https://techstarsolution.net/payment-cancelled`,
      metadata: {
        fullName,
        phone,
        address,
        zipCode,
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    res.status(500).json({ error: err.message });
  }
};
