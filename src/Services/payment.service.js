import stripe from "../Utils/stripe.js";

export const processStripePayment = async (amount, currency = "eur", paymentMethodId) => {
    // Stripe espera el amount en céntimos
    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency,
        payment_method: paymentMethodId,
        confirm: true,
    });
    return paymentIntent;
};