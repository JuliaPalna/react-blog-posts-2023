export const getPageCount = (tottalCount, limit) => {
  return Math.ceil(tottalCount / limit)
}
