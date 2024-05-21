export const cutDescription = (description: string) => {
  if (description.length > 115) {
    return description.slice(0, 115) + '...'
  }
  return description
}
