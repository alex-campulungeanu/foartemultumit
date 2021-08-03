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

export const stringWrapper = (data, filter, stringOpen='<span style="color: red">', stringClosed='</span>') => {
  let returnedData = data
  const filterLength = filter.length
  const normalizedData = data.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const regexFilter =  new RegExp(filter, 'gi');
  let result = ''
  let indices = [];
  if (filter.length != 0) {
    while ( ( result = regexFilter.exec(normalizedData)) ) {
      indices.push(result.index);
    }
  }
  indices.forEach((ind, idx) => {
    const realInd = ind + (stringOpen + stringClosed).length*idx

    returnedData = returnedData.slice(0, realInd) + stringOpen + returnedData.slice(realInd, realInd + filterLength) + stringClosed + returnedData.slice(realInd + filterLength)
  })

  return returnedData
}