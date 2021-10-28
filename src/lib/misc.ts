export const getIntegerAndRemainder = (divider: number, treshhold: number): number[]=> {
  //function to return an array with numbers of time when threshold is in divider
  let arr:  number[] = []
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
  let result: RegExpExecArray | null;
  let indices = [];
  if (filter.length != 0) {
    while ( ( result = regexFilter.exec(normalizedData)) ) {
      // TODO: fix this
      // @ts-ignore:next-line
      indices.push(result.index)
    }
  }
  indices.forEach((ind, idx) => {
    const realInd = ind + (stringOpen + stringClosed).length*idx

    returnedData = returnedData.slice(0, realInd) + stringOpen + returnedData.slice(realInd, realInd + filterLength) + stringClosed + returnedData.slice(realInd + filterLength)
  })

  return returnedData
}

export const prepareUrl = (url: string): [boolean, string] => {
  // let url = 'https://www.emag.ro/boxa-portabila-sony-srs-xb12b-extra-bass-bluetooth-rezistenta-la-apa-ip67-negru-srsxb12b-ce7/pd/DMYV21BBM/'
  const wrongUrlMsg: string = 'Url is not in the right format !'
  try {
    const urlSplitted = url.split('/')
    const http = (urlSplitted[0] === 'https:') ? urlSplitted[0] : 'undefined'
    const domain = (urlSplitted[2] === 'www.emag.ro') ? urlSplitted[2] : 'undefined'
    const productName = urlSplitted[3]
    const pd = (urlSplitted[4] === 'pd') ? urlSplitted[4] : 'undefined'
    const productId = urlSplitted[5]
    const cookedUrl = `${http}//${domain}/${productName}/${pd}/${productId}/`
    if (cookedUrl.includes('undefined')) {
      return [false, wrongUrlMsg]
    }
    return [true, cookedUrl]
  } catch (error) {
    return [false, wrongUrlMsg]
  }  
}