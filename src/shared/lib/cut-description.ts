export const cutDescription = (description: string) => {
  if (description.length > 118) {
    return description.slice(0, 119) + '...'
  }
  return description
}
