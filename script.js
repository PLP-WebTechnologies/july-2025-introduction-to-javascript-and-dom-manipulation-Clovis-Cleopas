// Part 1: Mastering JavaScript Basics
// Array of medical equipment with name, price, and image URL
const equipment = [
  { name: "Stethoscope", price: 2999, image: "stethoscope.jpg" },
  { name: "Blood Pressure Monitor", price: 5999, image: "bp.jpg" },
  { name: "Thermometer", price: 1999, image: "thermometer.jpg" },
  { name: "Syringe Pack", price: 999, image: "syringe.jpg" }
];

// Display equipment list on page load
document.addEventListener("DOMContentLoaded", () => {
  displayEquipment();
});

// Part 2: JavaScript Functions
// Function 1: Calculate total price based on quantity and item price
function calculateTotal(quantity, price) {
  if (quantity <= 0) {
    return "Please enter a valid quantity.";
  } else if (quantity > 10) {
    return "Maximum quantity is 10.";
  } else {
    const total = (quantity * price).toFixed(2);
    return `Total: ugx${total}`;
  }
}

// Function 2: Format equipment display
function formatEquipmentItem(item) {
  return `
    <div class="equipment-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>Price: ${item.price.toFixed(2)}</p>
      </div>
    </div>
  `;
}

// Function 3: Add new equipment item
function addNewEquipment(name, price, image) {
  equipment.push({ name, price, image });
  displayEquipment();
}

// Function 4: Filter equipment by price
function filterEquipmentByPrice(maxPrice) {
  return equipment.filter(item => item.price <= maxPrice);
}

// Part 3: JavaScript Loops
// Loop 1: forEach to display equipment items
function displayEquipment(filteredEquipment = equipment) {
  const equipmentList = document.getElementById("equipment-list");
  equipmentList.innerHTML = "";
  filteredEquipment.forEach(item => {
    equipmentList.innerHTML += formatEquipmentItem(item);
  });
}

// Loop 2: for loop to log items to console
for (let i = 0; i < equipment.length; i++) {
  console.log(`Item ${i + 1}: ${equipment[i].name} - $${equipment[i].price}`);
}

// Loop 3: while loop to check stock (simulated)
function checkStock() {
  let stock = equipment.length;
  let index = 0;
  while (index < equipment.length) {
    console.log(`${equipment[index].name} is in stock.`);
    index++;
  }
  return stock > 0 ? "Stock available" : "Out of stock";
}
console.log(checkStock());

// Part 4: Mastering the DOM
// DOM Interaction 1: Calculate total on button click
document.getElementById("calculate-btn").addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantity").value);
  const itemIndex = parseInt(document.getElementById("item-select").value);
  const price = equipment[itemIndex].price;
  const result = calculateTotal(quantity, price);
  document.getElementById("total-output").textContent = result;
});

// DOM Interaction 2: Toggle dark/light theme
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// DOM Interaction 3: Filter equipment by price
document.getElementById("filter-btn").addEventListener("click", () => {
  const maxPrice = parseFloat(document.getElementById("price-filter").value);
  if (!isNaN(maxPrice) && maxPrice > 0) {
    const filtered = filterEquipmentByPrice(maxPrice);
    displayEquipment(filtered);
  } else {
    displayEquipment(); // Reset to show all if invalid input
  }
});

// DOM Interaction 4: Dynamically add new equipment item
addNewEquipment("Glucose Meter", 3999, "hb.jpg");
