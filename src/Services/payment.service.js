import stripe from "../Utils/stripe.js";

export const processStripePayment = async (amount, currency = "eur", paymentMethodId) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency,
        payment_method: paymentMethodId,
        confirm: true,
        automatic_payment_methods: {
            enabled: true,
            allow_redirects: "never"
        }
    });
    return paymentIntent;
};