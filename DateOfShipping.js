let shippingDateElement = document.querySelector("#shippingDate");
let today = new Date();

let estimatedShippingDate = calculateShippingDate(today);

let options = { year: 'numeric', month: 'long', day: 'numeric' };
let formattedShippingDate = estimatedShippingDate.toLocaleDateString('ru-RU', options);//lang
shippingDateElement.textContent = formattedShippingDate;

function calculateShippingDate(currentDate) {
    let dayOfWeek = currentDate.getDay();
    let hours = currentDate.getHours();

    let estimatedDate = new Date(currentDate);

    if ((dayOfWeek === 1 && hours >= 12) || dayOfWeek === 3 || dayOfWeek === 5) {
        estimatedDate.setDate(currentDate.getDate() + 1);//day to shipping from today
    } else if ((dayOfWeek === 2 || dayOfWeek === 4) && hours >= 12) {
        estimatedDate.setDate(currentDate.getDate() + 3);//day to shipping from today
    } else if (dayOfWeek === 5 && hours < 12) {
        estimatedDate.setDate(currentDate.getDate() + 4);
    } else if (dayOfWeek === 0 || dayOfWeek === 6 || (dayOfWeek === 5 && hours >= 12)) {
        estimatedDate.setDate(currentDate.getDate() + 5);//day to shipping from today
    }

    return estimatedDate;
    
}
//For use you need add span (<p>Estimated Shipping: <span id="shippingDate"></span></p>) in your product card.
//Please note that when forming the date of shipment of orders, the time the order was created is also taken into account.
//Sorry for my english.
