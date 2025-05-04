function calculateMortgage(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
    const years = parseInt(document.getElementById("years").value);
    const n = years * 12;

    const monthly = (amount * rate) / (1 - Math.pow(1 + rate, -n));
    const result = isFinite(monthly) ? `$${monthly.toFixed(2)}` : "Invalid input";

    document.getElementById("monthlyPayment").textContent = "Monthly Payment: " + result;
}

function calculateMortgage(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("amount").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100 / 12;
    const years = parseFloat(document.getElementById("years").value) * 12;

    if (!amount || !rate || !years) {
        document.getElementById("monthlyPayment").textContent = "Please fill in all fields correctly.";
        return;
    }

    const x = Math.pow(1 + rate, years);
    const monthly = (amount * x * rate) / (x - 1);
    const payment = monthly.toFixed(2);

    document.getElementById("monthlyPayment").textContent = `Estimated Monthly Payment: $${payment}`;
}

const properties = [
    {
        title: "3 BHK Villa",
        price: "$250,000",
        description: "Serene neighborhood with modern amenities and a private garden.",
        image: "public/house1.jpg"
    },
    {
        title: "2 BHK Apartment",
        price: "$180,000",
        description: "Close to city center with great view and security.",
        image: "public/house2.jpg"
    },
    {
        title: "Luxury Penthouse",
        price: "$450,000",
        description: "Rooftop access, smart features, skyline views.",
        image: "public/house3.jpg"
    }
];

const container = document.getElementById("propertyContainer");

properties.forEach(prop => {
    const card = document.createElement("div");
    card.className = "property-card";
    card.innerHTML = `
      <img src="${prop.image}" alt="${prop.title}" loading="lazy">
      <div class="property-info">
        <h3>${prop.title} - ${prop.price}</h3>
        <p>${prop.description}</p>
        <a href="#" class="btn">View Details</a>
      </div>`;
    container.appendChild(card);
});