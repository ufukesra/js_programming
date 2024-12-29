
/**
 * Create a Custom class Product with the following requirements:
 *      Attributes: name, price, quantity, description, productId
 *      Actions: Constructor to initialize the attributes,
 *      method displayProductInfo() to print the product information,
 */

class Product {
    constructor(name, price, quantity, description, productId) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.productId = productId;
    }

    displayProductInfo() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price}`);
        console.log(`Product Quantity: ${this.quantity}`);
        console.log(`Product Description: ${this.description}`);
        console.log(`Product ID: ${this.productId}`);
    }

}

// test the product object
let product1 = new Product("Apple", 1.5, 100, "Red Delicious apple", "A001");
product1.displayProductInfo();

console.log("-----------------------------------");
let product2 = new Product("Banana", 0.8, 200, "Yellow banana", "B002");
product2.displayProductInfo();


/**
 * Create a Animal custom parent class wit the following requirements:
 * Attributes: name, age, gender, breed
 * Actions: Constructor to initialize the attributes,
 * method eat() that displays a message saying the name is eating,
 * method  sleep() that displays a message saying the name is sleeping,
 */

class Animal {
    constructor(name, age, gender, breed) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

/**
 * Create a Dog custom child class that inherits from the Animal class.
 *  Action: bark() that displays a message saying the name is barking,
 * 
 * Create a Cat custom child class that inherits from the Animal class.
 * Action: meow() that displays a message saying the name is meowing,
 */

class Dog extends Animal {
    

    bark() {
        console.log(`${this.name} is barking`);
    }
}

class Cat extends Animal { 
    meow() {
        console.log(`${this.name} is meowing.`);
    }
}

// Create a loop which counts from 0 to 100.
