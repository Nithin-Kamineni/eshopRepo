redirectToCheckout = function (sessionId) {
    var stripe = Stripe("pk_test_51NXVWqJ4eTuMqTYnNLTKlYgMqaAYYMcNY4wvJC2BQLC5wQcBcvVMGBrze0oDOoQ1oN9OUBJolJ5Pbp0Isp4XnTNC00BRg94Xur");
    stripe.redirectToCheckout({ sessionId: sessionId });
}