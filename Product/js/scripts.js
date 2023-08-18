  document.addEventListener("DOMContentLoaded", function() {
    // Array to store current values for each set
    const currentValues = Array.from({ length: 8 }, () => 0);

    // Get all decrease buttons, increase buttons, and input fields
    const decreaseBtns = document.querySelectorAll(".btn-danger");
    const increaseBtns = document.querySelectorAll(".btn-success");
    const inputFields = document.querySelectorAll(".form-control");

    // Get the total price and discount amount elements
    const discountAmountElement = document.querySelector(".discount-amount");
    const totalPriceElement = document.querySelector(".total-price");

    // Product prices (replace with your actual prices)
    const productPrices = [990, 990, 1490, 790, 790, 990, 1290, 990];

    // Get the modal item list
    const modalItemList = document.querySelector("#modalItemList");

    // Add event listeners for decrease buttons
  decreaseBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (currentValues[index] > 0) {
        currentValues[index] -= 1;
        inputFields[index].value = currentValues[index];
        updatePrices();
        
        // Remove the last added item from the modal item list
        const lastItem = modalItemList.lastElementChild;
        if (lastItem) {
          modalItemList.removeChild(lastItem);
        }
      }
    });
  });

    // Add event listeners for increase buttons
    increaseBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        currentValues[index] += 1;
        inputFields[index].value = currentValues[index];
        updatePrices();

        // Create a list item to display the added item
        const productName = `สินค้าที่ ${index + 1}`;
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerHTML = `
          <strong>${productName}</strong>
          <span class="ms-2">${currentValues[index]} ชิ้น</span>
          <span class="ms-2">ราคา: ${productPrices[index] * currentValues[index]} บาท</span>
        `;

        // Append the list item to the modal item list
        modalItemList.appendChild(listItem);
      });
    });

    // Function to update prices
    function updatePrices() {
      let totalNormalPrice = 0;
      let totalPrice = 0;

      for (let i = 0; i < currentValues.length; i++) {
        totalNormalPrice += currentValues[i] * productPrices[i];
        totalPrice += currentValues[i] * productPrices[i];
      }

      // Apply discount if total price exceeds 1000
      if (totalPrice > 1000) {
        totalPrice *= 0.9; // Apply 10% discount
        discountAmountElement.textContent = (totalNormalPrice * 0.1).toFixed(2); // Display discount amount
      } else {
        discountAmountElement.textContent = "0.00"; // Reset discount amount
      }

      totalPriceElement.textContent = totalPrice.toFixed(2); // Display total price
    }

    
    
  });
