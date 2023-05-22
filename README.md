# statefulVariable

The statefulVariable Library is a lightweight JavaScript library that provides a simple and efficient way to create and persist data across page refreshes as well as being reactive for use cases such as a shopping cart similar to what state managers do in other libraries and frameworks.

## Installation

You can install the statefulVariable library using npm:

```shell
npm install easystatemanager
```

# Usage

## Basic Usage

```shell
// Import the statefulVariable library
const statefulVariable = require('easystatemanager');

// Create a stateful variable with an initial value
const cart = statefulVariable('cart', []);

// Subscribe to changes in the cart value
const unsubscribe = cart.subscribe((value) => {
  console.log('Cart updated:', value);
});

// Update the cart value
cart.set(['item1', 'item2', 'item3']);

// Access the current value of the cart
console.log('Current cart value:', cart.value);

// Unsubscribe from further changes
unsubscribe();
```

## Shopping Cart Example Usage

```shell
// Import the statefulVariable library
const statefulVariable = require('easystatemanager');

// Create a stateful variable for the shopping cart
const cart = statefulVariable('cart', []);

// Function to add an item to the cart
function addItem(item) {
  cart.update((currentCart) => {
    // Create a new cart array with the added item
    return [...currentCart, item];
  });
}

// Function to remove an item from the cart
function removeItem(item) {
  cart.update((currentCart) => {
    // Filter out the item from the current cart
    return currentCart.filter((cartItem) => cartItem !== item);
  });
}

// Subscribe to changes in the cart value
const unsubscribe = cart.subscribe((value) => {
  console.log('Cart updated:', value);
});

// Add items to the cart
addItem('item1');
addItem('item2');
addItem('item3');

// Remove an item from the cart
removeItem('item2');

// Access the current value of the cart
console.log('Current cart value:', cart.value);

// Unsubscribe from further changes
unsubscribe();
```

## license
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
