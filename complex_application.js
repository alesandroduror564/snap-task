/*
Filename: complex_application.js
Content: A complex and sophisticated application that simulates an online marketplace for buying and selling products.
*/

// Global variables for the marketplace
var users = [];
var products = [];

// User class with constructor
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = [];
  }
  
  addToCart(product) {
    this.cart.push(product);
    console.log(`${this.name} added ${product.name} to cart.`);
  }
  
  buy() {
    if (this.cart.length > 0) {
      this.cart.forEach(product => {
        console.log(`${this.name} bought ${product.name} for $${product.price}.`);
        products.splice(products.indexOf(product), 1);
      });
      this.cart = [];
      console.log(`${this.name}'s purchase completed.`);
    } else {
      console.log(`${this.name}'s cart is empty.`);
    }
  }
}

// Product class with constructor
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

// Create initial users and products
users.push(new User("John Doe", "john.doe@example.com"));
users.push(new User("Jane Smith", "jane.smith@example.com"));

products.push(new Product("iPhone 12", 999, "The latest iPhone with advanced features."));
products.push(new Product("Samsung Galaxy S21", 899, "Powerful Android phone with stunning display."));
products.push(new Product("MacBook Pro", 1999, "High-performance laptop for professionals."));
products.push(new Product("Dell XPS 15", 1499, "Top-rated Windows laptop for productivity."));

// Simulate user actions
var john = users[0];
var jane = users[1];

john.addToCart(products[0]);
john.addToCart(products[2]);

jane.addToCart(products[1]);

console.log("Current products in the marketplace:\n");
products.forEach(product => {
  console.log(`${product.name} - $${product.price}`);
});

john.buy();

console.log("\nUpdated products in the marketplace:\n");
products.forEach(product => {
  console.log(`${product.name} - $${product.price}`);
});

jane.buy();

console.log("\nFinal products in the marketplace:\n");
products.forEach(product => {
  console.log(`${product.name} - $${product.price}`);
});

// Additional code (more than 200 lines) can be added below...