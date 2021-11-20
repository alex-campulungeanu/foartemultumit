import { axiosService } from "@services/axiosService";
import {serverApi} from '@src/config/constants'
import axios from 'axios'

export const getReviews = () => axiosService.get(`${serverApi}/api/reviews`).then(res => res.data)

export const reviewsFetcher = async (params) => {
  const [, { url }] = params.queryKey;
  return axiosService.post(`/api/reviews`, {url: url}).then(res => res.data)
}