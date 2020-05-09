export default function getPrice(ServiceCart = []) {
    const ServicePrice = [];
    ServiceCart.map((serviceName) => {
        const { price } = serviceName;
        ServicePrice.push({ price });
    });

    const TotalPrice = ServicePrice.reduce((accumulator, currentValue) => {
        accumulator += currentValue["price"]
        return accumulator
    }, 0);
    return TotalPrice;
}