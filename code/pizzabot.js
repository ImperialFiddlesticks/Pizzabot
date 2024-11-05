const pizza = document.getElementById("order");
const amount = document.getElementById("amount");
const btn = document.getElementById("btn");
const totalPrice = document.getElementById("totalPrice");
const totalTime = document.getElementById("totalTime");
const wrongPizza = document.getElementById("wrongInput");

const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

let orderQuantity;
let orderTotal;
let cookingTime;
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

btn.addEventListener("click", () => {
  event.preventDefault();

  const orderName = pizza.value.toLowerCase();

  if (checkOrderName(orderName)) {
    orderQuantity = parseInt(amount.value, 10);
    orderTotal = totalCost(orderQuantity);
    totalPrice.textContent = `Total: ${orderTotal} kr.`;
    cookingTime = cookingTimeCalc(orderQuantity);
    totalTime.textContent = `ETA: ${cookingTime} minutes`;
    wrongPizza.textContent = ``;
  } else {
    wrongPizza.textContent = `We do not have that pizza.`;
  }
});

// //Put your Javscript code here:

// alert(
//   "Hey! Happy to serve your pizza. On our menu we have " +
//     vegetarian +
//     ", " +
//     hawaiian +
//     " and " +
//     pepperoni +
//     "."
// );
// let orderName = prompt(
//   "Enter the name of the pizza you want to order today."
// ).toLowerCase();
// //const validOrder = checkOrderName(orderName);

// while (true) {
//   if (checkOrderName(orderName)) {
//     const orderQuantity = parseInt(
//       prompt("How many " + orderName + "s do you want?")
//     );

//     const orderTotal = totalCost(orderQuantity);
//     const cookingTime = cookingTimeCalc(orderQuantity);
//     alert(
//       "Great, I'll get started on your " +
//         orderName +
//         "s right away, it will cost " +
//         orderTotal +
//         "kr. The pizzas will take " +
//         cookingTime +
//         " minutes."
//     );
//     break;
//   } else {
//     alert(
//       "I'm sorry, we do not have that on the menu. Please input a new pizza."
//     );
//     orderName = prompt("Please, enter another pizza.").toLowerCase();
//   }
// }
