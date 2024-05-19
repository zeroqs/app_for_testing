export const showComplexity = (complexity: number) => {
  if (complexity === 0) {
    return 'Легкий'
  }
  if (complexity === 1) {
    return 'Средний'
  }
  if (complexity === 2) {
    return 'Сложный'
  }
}
