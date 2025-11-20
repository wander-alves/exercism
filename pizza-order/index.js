export function pizzaPrice(pizza, ...extras) {
  const pizzaFlavorsPrices = {
    "Margherita": 7,
    "Caprese": 9,
    "Formaggio": 10,
  };
  
  const chosenPizzaPrice = pizzaFlavorsPrices[pizza];
  
  const totalExtrasPrice = sumExtras(extras)

  return chosenPizzaPrice + totalExtrasPrice;
}

function sumExtras(extras, totalExtras=0){
  const extrasPrices = {
    "ExtraSauce": 1,
    "ExtraToppings": 2,
  }

  if(extras.length === 0){
    return totalExtras;
  }
  const [n, ...rest] = extras;
  const currentPrice = extrasPrices[n]
  return sumExtras(rest, totalExtras+currentPrice)
}

export function orderPrice(pizzaOrders) {
  if(pizzaOrders.length === 0){
    return 0;
  }

  let totalPrice = 0;
  for(let i = pizzaOrders.length - 1; i >= 0; i--){
    let currentOrder = pizzaOrders[i]
    totalPrice += pizzaPrice(currentOrder.pizza, ...currentOrder.extras)
  }

  return totalPrice;
}

export class PizzaOrder {
  pizza;
  extras;
  constructor(pizza, ...extras){
    this.pizza = pizza;
    this.extras = extras;
  }
}