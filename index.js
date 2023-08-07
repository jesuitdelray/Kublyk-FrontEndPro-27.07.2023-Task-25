class Hamburger {
    static SIZE_SMALL = { price: 50, calories: 20 }
    static SIZE_LARGE = { price: 100, calories: 40 }
    static STUFFING_CHEESE = { price: 10, calories: 20 }
    static STUFFING_SALAD = { price: 20, calories: 5 }
    static STUFFING_POTATO = { price: 15, calories: 10 }

    static TOPPING_SPICE = { price: 15, calories: 0 }
    static TOPPING_MAYO = { price: 20, calories: 5 }

    constructor(size, stuffing) {
        this.size = size
        this.stuffing = stuffing
        this.toppings = []
    }

    addTopping(topping) {
        this.toppings.push(topping)
    }

    calculateCalories() {
        const totalCalories = this.size.calories + this.stuffing.calories
        return this.toppings.reduce((acc, topping) => acc + topping.calories, totalCalories)
    }

    calculatePrice() {
        const totalPrice = this.size.price + this.stuffing.price
        return this.toppings.reduce((acc, topping) => acc + topping.price, totalPrice)
    }
}

// Приклад використання програми
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE)
hamburger.addTopping(Hamburger.TOPPING_MAYO)

console.log("Calories: " + hamburger.calculateCalories())
console.log("Price: " + hamburger.calculatePrice())

hamburger.addTopping(Hamburger.TOPPING_SPICE)

console.log("Price with sauce: " + hamburger.calculatePrice())
