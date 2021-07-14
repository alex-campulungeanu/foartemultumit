export const getIntegerAndRemainder = (divider, treshhold) => {
  //function to return an array with numbers of time when threshold is in divider
  let arr = []
  const quotient = Math.floor(divider/treshhold)
  const remainder = divider % treshhold
  for(let i=0; i < quotient; i++) {
    arr.push(treshhold)
  }
  if (remainder > 0 ) {
    arr.push(remainder)
  }

  return arr
}