import request from '@/utils/request'
export const getJoke = () => {
  return request.get('/joke')
}
