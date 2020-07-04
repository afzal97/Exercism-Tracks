// export function twoFer( data = "you" ) {
//         return "One for " + data +", one for me.";
//     }

// the export keyword needs to be used before the const declaration
// then I am using the arrow function to get something out of it

export const  twoFer = (data = "you") => `One for ${data}, one for me.`;
