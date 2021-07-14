import {useQuery} from 'react-query'
import {axiosService} from '@services/axiosService'
import {serverApi} from '@src/config/constants'


export const useGetReviews = (url) => {
  return useQuery('reviews', () => axiosService.get(`${serverApi}/api/reviews`, {url: url}).then(res => res.data) )
}