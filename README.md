### **Reflection Questions**

**1. How did you dynamically create and append new elements to the DOM?**  
I used JavaScript to create new `<li>` elements with child elements like `<span>`, `<input>`, and `<button>` using `document.createElement`, then appended them to the cart using `appendChild()`.

**2. What steps did you take to ensure accurate updates to the total price?**  
I kept track of the total price in a variable and updated it whenever items were added, quantities were changed, or items were removed. The displayed total was refreshed using `toFixed(2)` for currency formatting.

**3. How did you handle invalid input for product name or price?**  
I used input validation to check that the product name wasn’t empty and the price was a valid positive number. If the input was invalid, I displayed an alert and prevented the item from being added.

**4. What challenges did you face when implementing the remove functionality?**  
One challenge was accurately subtracting the item's total (unit price × quantity) from the cart total before removing the element from the DOM. I solved this by storing the necessary data in `dataset` attributes for each cart item.