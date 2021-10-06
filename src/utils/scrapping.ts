import cheerio from 'cheerio'

import {axiosService} from '@services/axiosService'

export const fetchHtml = async (url) => {
  const {data} = await axiosService(url, {
    method: 'GET',
  })
  return cheerio.load(data)
}