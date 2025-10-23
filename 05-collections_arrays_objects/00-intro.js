let listOfTempsInF = [
  123, 32, 42, 94, 34, 0, -10, 30, 63, 84, 56, 94, 87, 43, 26, 75, 90, -43, -23, 153, 41, 74, 54, 24, 85, 80, 56, 35, 23, 45, 87, -90, 87, 56, 23, 56, 71, 37, 56, 34
];

function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

for (let i = 0; i < listOfTempsInF.length; i++) {
  let element = listOfTempsInF[i];
  element = fToC(element).toFixed(1);
  console.log(element + " °C");
}