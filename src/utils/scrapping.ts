import cheerio from 'cheerio'
import axios from 'axios'

import {axiosService} from '@services/axiosService'

export const fetchHtml = async (url: string) => {
  const {data} = await axiosService(url, {
    method: 'GET',
  })
  // const options = {
  //   token: "key",
  //   url: url,
  // };
  // const {data} = await axios.post("https://api.scraperbox.com/scrape", options)
  // console.log(data)

  return cheerio.load(data)
}