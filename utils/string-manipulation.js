
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

export function subtractValueFromString(numberString, value){

  // convert string to number
  let startingNumber = Number(numberString);
  // subtract the value 
  finalNumber = startingNumber - value;
  // Convert it back to a string 
  let returnValueAsString = String(finalNumber)
  // return it 
  return returnValueAsString;
}