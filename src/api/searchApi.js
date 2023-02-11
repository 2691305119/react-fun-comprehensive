import request from '../request';

export const getProductsList = params => {
  return request({
    url:`/interview/keyword_search`,
    method:'POST',
    data:params
  })
}
