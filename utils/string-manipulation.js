
// value can be positive or negative 
export function addValueToString(numberString, value){

  // convert string to number
  let startingNumber = Number(numberString);
  // add the value 
  let finalNumber = startingNumber + value;
  // Convert it back to a string 
  let returnValueAsString = String(finalNumber)
  // return it 
  return returnValueAsString;
}

