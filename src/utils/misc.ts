const randomColors = [
  '#F44336', '#e91e63', '#9c27b0', '#673ab7',
  '#ff9800', '#ff5722', '#795548', '#607d8b',
  '#3f51b5', '#2196F3', '#00bcd4', '#009688',
  '#2196F3', '#32c787', '#00BCD4', '#ff5652',
  '#ffc107', '#ff85af', '#FF9800', '#39bbb0',
  '#4CAF50', '#ffeb3b', '#ffc107', '#A71D31',
  '#D5BF86', '#A71D31', '#3F0D12', '#988F2A',
  '#599FDF', '#322F20', '#6A5837', '#FE5F00',
  '#0A2047', '#959252', '#77869E', '#923F35',
];

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

export const stringWrapper = (data: string, filter, stringOpen='<span style="color: red">', stringClosed='</span>'): string => {
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

export const getAuthorInitials = (name: string): string => {
  const nameSplitted: string[] = name.split(' ')
  const initials = nameSplitted.map((item, idx) => {
    if (idx < 2) {
      return item.charAt(0)
    }
  })
  return initials.join(' ')
}

export function getRandomColor(inputString: string): string {
  inputString = inputString.substr(0, 10);

  var hash = 0;
  for (var i = 0; i < inputString.length; i++) {
      hash = 31 * hash + inputString.charCodeAt(i);
  }
  var index = Math.abs(hash % randomColors.length);
  return randomColors[index];
}

export function normalizeString(input: string): string {
  const res: string = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return res
}