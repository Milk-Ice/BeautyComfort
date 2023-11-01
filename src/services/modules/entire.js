import MYrequest from '..'
export function getEntireRoomList(offset = 0, size = 20) {
  return MYrequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}
