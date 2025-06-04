import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Pon tu clave secreta en .env
export default stripe;