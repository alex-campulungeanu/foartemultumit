export interface UserReview {
  name: string  
}

export interface EmagResponse {
  id: number,
  user: UserReview,
  content: string,
  created: string
}