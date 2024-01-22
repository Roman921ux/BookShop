export const basketSelector = (state) => state.basket
//const totalPrice = items.map(item => item.price).reduce((acc, cur) => acc + cur, 0);
export const sumBasketSelector = (state) => state.basket.map(item => item.price).reduce((acc, cur) => acc + cur, 0)