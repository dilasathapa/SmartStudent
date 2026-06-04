export const calculateFinalScore = (
  evaluations: any[]
) => {

  if (!evaluations.length) {
    return null
  }

  const rubricTotals: Record<string, number> = {}

  let rubricCount = 0

  evaluations.forEach((evaluation) => {

    Object.entries(evaluation).forEach(([key, value]: any) => {

      if (
        value &&
        typeof value === 'object' &&
        'score' in value
      ) {

        if (!rubricTotals[key]) {
          rubricTotals[key] = 0
        }

        rubricTotals[key] += value.score
      }
    })
  })

  const averages: Record<string, number> = {}

  Object.keys(rubricTotals).forEach((key) => {

    averages[key] =
      rubricTotals[key] /
      evaluations.length

    rubricCount++
  })

  const overall =
    Object.values(averages).reduce(
      (a: any, b: any) => a + b,
      0
    ) / rubricCount

  return {
    averages,
    overall
  }
}