import { BasicAcceptedElems } from 'cheerio'

import {axiosService} from '@services/axiosService'
import logger from '@services/pinoService'
import {fetchHtml} from '@utils/scrapping'
import {getIntegerAndRemainder} from '@utils/misc'
import {fakeReviewData} from '../../../../data'
import {EmagResponse} from '@interfaces/reviewsInterface'


export default async function handler (req, res) {

  // if (true) {
  //   return res.status(200).json({success: true, data: fakeReviewData}) 
  // }

  const reviewsTreshhold = 100
  const url = req.body.url
  logger.info(url)
  // const url = 'https://www.emag.ro/sistem-powerup-rog-custom-watercooling-argb-amd-ryzen-9-5900x-12core-3-7-4-8ghz-64-gb-ddr4-ssd-2tb-m-2-asus-rog-x570-f-rtx-3090-24gb-gddr6x-384bit-850w-p7-rog-r926/pd/DBK7RDMBM/'

  try {
    let reviewsList: Array<EmagResponse> = []
    const $ = await fetchHtml(url)
    const container: BasicAcceptedElems<any> | undefined= $('#navbar_sticky').html()
    const nrReviewsRaw = $(container).find('a[href=#reviews-section]').text()
    const regExp = /\(([^)]+)\)/;
    const nrReviews: number | null = parseInt(regExp.exec(nrReviewsRaw)![1]);
    // const nrReviews = 345;
    const nrReviewsArr  = getIntegerAndRemainder(nrReviews, reviewsTreshhold)
    const urlFeedback = url.slice(0, 20) + 'product-feedback/' + url.slice(20)
    /* 
      we should call the review endpoint with the max nrReviews
      the api only has a limit of 100 reviews, so we need multiple calls
      also an offset is set so the next calup is fetched from database(avoid retrieving the same items)
    */
    await Promise.all(nrReviewsArr.map(async (elem, idx, arr) => {
      const limit = elem
      const offset = idx == 0 ? 0 : arr[idx-1] * idx
      const urlDynamic = `${urlFeedback}reviews/list?source_id=7&page[offset]=${offset}&page[limit]=${limit}&sort[votes]=desc`
      const resp = await axiosService.get(urlDynamic)
      const reviews = resp.data.reviews.items
      const parsedReviews: Array<EmagResponse> = reviews.map(review =>  {
        return {
          content: review.content,
          user: {name: review.user.name},
          created: review.created,
          id: review.id
        } as EmagResponse
      })
      // console.log(parsedReviews)
      
      reviewsList = [...reviewsList, ...parsedReviews]
      //wait 1 second before another api call
      await new Promise(resolve => setTimeout(resolve, 1000));
    }))

    return res.status(200).json({success: true, data: reviewsList})
  } catch (error) {
    logger.error(error)
    return res.status(500).json({success: false, data: 'Some error occured !'})
  }

}