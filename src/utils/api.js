import { axiosService } from "@services/axiosService";

export const getReviews = () => axiosService.get(`${serverApi}/api/reviews`).then(res => res.data)