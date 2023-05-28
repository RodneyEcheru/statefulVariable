# statefulVariable

### description
A simple and efficient way to manage state

The statefulVariable Library is lightweight and provides a simple and efficient way to create and persist data across page refreshes

currently working on making it reactive to show updates in real time 

this can be used for use cases such as a shopping cart and user states similar to what state managers do in other libraries and frameworks. 

## Installation

You can install the statefulVariable library using npm:

```shell
npm install easystatemanager
```

# Usage

## Basic Usage

### example 1

```shell
// Import the statefulVariable library
import statefulVariable from "easystatemanager";

// store initial value in a variable
const myStatefulVariable = statefulVariable("initial value");

// get the current value
console.log(myStatefulVariable.value); // "initial value"

// change value
myStatefulVariable.set("new value");

// get the new value
console.log(myStatefulVariable.value); // "new value"
```
### Example 2
```shell
// Import the statefulVariable library
import statefulVariable from "easystatemanager";

// create the stateful variable with an initial value of an empty array
const myarray = statefulVariable("myarray", []);

// subscribe to the variable and log the value whenever it changes
myarray.subscribe((value) => {
  console.log(value);
});

// add an item to the cart
myarray.update((value) => [...value, "item 1"]);

// add another item to the myarray
myarray.update((value) => [...value, "item 2"]);
```

### example 3
```shell
// Import the statefulVariable library
import statefulVariable from "easystatemanager";

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

## Basic Shopping Cart Example

```shell
// Import the statefulVariable library
import statefulVariable from "easystatemanager";

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

### inspiration
This library was inspired by svelte but with persistence added and freedom to use across other different frameworks as well as when not using any javascript framework or library

## license
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
