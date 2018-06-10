// This implementation of the 24 solver is basically a port of
// https://rosettacode.org/wiki/24_game/Solve#Ruby

export type InputNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type Input = [InputNumber, InputNumber, InputNumber, InputNumber]
type Operator = '+' | '-' | '*' | '/'
type CalculationArray = [
  string,
  Operator,
  Operator,
  Operator,
  Operator,
  InputNumber,
  InputNumber,
  InputNumber
]

// From https://stackoverflow.com/a/43053803
const cartesionProduct = (a: any[], b: any[]) => {
  return [].concat(...a.map(d => b.map(e => [].concat(d, e))))
}

const expressions: string[] = [
  '((%i1% %op1% %i2%) %op2% %i3%) %op3% %i4%',
  '(%i1% %op1% (%i2% %op2% %i3%)) %op3% %i4%',
  '(%i1% %op1% %i2%) %op2% (%i3% %op3% %i4%)',
  '%i1% %op1% ((%i2% %op2% %i3%) %op3% %i4%)',
  '%i1% %op1% (%i2% %op2% (%i3% %op3% %i4%))',
]
const operators: string[] = ['+', '-', '*', '/']
export const operatorsPermutations: string[][] = cartesionProduct(
  cartesionProduct(operators, operators),
  operators,
)

const buildReplacements = (calculationArray: CalculationArray): Record<string, string | number> => {
  const [_, op1, op2, op3, i1, i2, i3, i4] = calculationArray
  return {
    '%op1%': op1,
    '%op2%': op2,
    '%op3%': op3,
    '%i1%': i1,
    '%i2%': i2,
    '%i3%': i3,
    '%i4%': i4,
  }
}

export function random(): Input {
  let randomInput: Input = [1, 1, 1, 1]
  while (solve(randomInput).length === 0) {
    randomInput = [...new Array(4)].map(x => Math.floor(Math.random() * 9) + 1)
  }
  return randomInput
}

export function solve(input: Input): string[] {
  const calculationArrays: CalculationArray[] = cartesionProduct(
    cartesionProduct(expressions, operatorsPermutations),
    uniquePermutations(input),
  )
  const solutions: Array<string | undefined> = calculationArrays.map(calculationArray => {
    const replacements = buildReplacements(calculationArray)
    const [expression, ...rest] = calculationArray
    const calculation: string = expression.replace(
      /%\w+%/g,
      (placeholder: string) => `${replacements[placeholder]}` || placeholder,
    )
    const result = eval(calculation)
    if (result === 24) {
      return calculation
    }
  })

  return solutions.filter(x => x) as string[]
}

export function uniquePermutations(input: Input): Input[] {
  const output: number[][] = [
    ...new Set(permutations(input).map(permutation => permutation.join(','))),
  ].map((inputString: string) =>
    inputString.split(',').map(stringNumber => parseInt(stringNumber, 10)),
  )
  // Ensure type
  return output.map(
    numbers => [numbers[0] || 1, numbers[1] || 1, numbers[2] || 1, numbers[3] || 1] as Input,
  )
}

// From https://stackoverflow.com/a/37580979
export function permutations(permutation: Input) {
  const length = permutation.length
  const result = [permutation.slice()]
  const c = new Array(length).fill(0)
  let i = 1
  let k
  let p: InputNumber

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i]
      p = permutation[i]
      permutation[i] = permutation[k]
      permutation[k] = p
      ++c[i]
      i = 1
      result.push(permutation.slice())
    } else {
      c[i] = 0
      ++i
    }
  }
  return result
}
