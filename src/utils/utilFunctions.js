export const formatPrice = (price) => {
  let str = price.toString().split("");
  return "₹" + str.slice(0, 3).join("") + "." + str.slice(3).join("");
};
