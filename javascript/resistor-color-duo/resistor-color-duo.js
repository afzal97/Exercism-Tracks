
const resistorColor = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
export function value([colour1, colour2]) {
  let number1 = resistorColor.indexOf(colour1); 
  let number2 = resistorColor.indexOf(colour2);
  return parseInt(`${number1}${number2}`);
};
