const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

// Update the total price display
function updateTotalDisplay() {
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Handle adding a new product
addProductButton.addEventListener("click", () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  if (!name || isNaN(price) || price <= 0) {
    alert("Please enter a valid product name and price.");
    return;
  }

  const quantity = 1;
  const item = document.createElement("li");
  item.className = "cart-item";
  item.dataset.unitPrice = price.toFixed(2);
  item.dataset.quantity = quantity;

  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;

  const priceSpan = document.createElement("span");
  priceSpan.textContent = `$${(price * quantity).toFixed(2)}`;
  priceSpan.classList.add("item-total");

  const qtyInput = document.createElement("input");
  qtyInput.type = "number";
  qtyInput.value = quantity;
  qtyInput.min = 1;
  qtyInput.addEventListener("change", () => updateQuantity(item, priceSpan, qtyInput));

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => removeItem(item));

  item.append(nameSpan, qtyInput, priceSpan, removeBtn);
  cart.appendChild(item);

  totalPrice += price * quantity;
  updateTotalDisplay();

  productNameInput.value = "";
  productPriceInput.value = "";
});

// Handle quantity change
function updateQuantity(item, priceSpan, qtyInput) {
  const oldQty = parseInt(item.dataset.quantity);
  const newQty = parseInt(qtyInput.value);
  const unitPrice = parseFloat(item.dataset.unitPrice);

  if (isNaN(newQty) || newQty <= 0) {
    qtyInput.value = oldQty;
    return;
  }

  const oldTotal = oldQty * unitPrice;
  const newTotal = newQty * unitPrice;

  item.dataset.quantity = newQty;
  priceSpan.textContent = `$${newTotal.toFixed(2)}`;

  totalPrice += newTotal - oldTotal;
  updateTotalDisplay();
}

// Handle item removal
function removeItem(item) {
  const quantity = parseInt(item.dataset.quantity);
  const unitPrice = parseFloat(item.dataset.unitPrice);
  const total = quantity * unitPrice;

  totalPrice -= total;
  updateTotalDisplay();

  item.remove();
}
