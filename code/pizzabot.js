const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

function checkOrderName(orderName) {
  return (
    orderName === vegetarian.toLowerCase() ||
    orderName === hawaiian.toLowerCase() ||
    orderName === pepperoni.toLowerCase()
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTimeCalc(orderQuantity) {
  if (orderQuantity < 3) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity < 6) {
    return 15;
  } else {
    return 20;
  }
}

//Put your Javscript code here:

alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    " and " +
    pepperoni +
    "."
);
let orderName = prompt(
  "Enter the name of the pizza you want to order today."
).toLowerCase();
//const validOrder = checkOrderName(orderName);

while (true) {
  if (checkOrderName(orderName)) {
    const orderQuantity = parseInt(
      prompt("How many " + orderName + "s do you want?")
    );

    const orderTotal = totalCost(orderQuantity);
    const cookingTime = cookingTimeCalc(orderQuantity);
    alert(
      "Great, I'll get started on your " +
        orderName +
        "s right away, it will cost " +
        orderTotal +
        "kr. The pizzas will take " +
        cookingTime +
        " minutes."
    );
    break;
  } else {
    alert(
      "I'm sorry, we do not have that on the menu. Please input a new pizza."
    );
    orderName = prompt("Please, enter another pizza.").toLowerCase();
  }
}
