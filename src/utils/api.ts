import { axiosService } from "@services/axiosService";
import {serverApi} from '@src/config/constants'

export const getReviews = () => axiosService.get(`${serverApi}/api/reviews`).then(res => res.data)