import { Input, InputNumber, operatorsPermutations, solve, uniquePermutations } from './24Solver'

describe('operatorsPermutations', () => {
  const expectedOperatorsPermutations: string[][] = [
    ['+', '+', '+'],
    ['+', '+', '-'],
    ['+', '+', '*'],
    ['+', '+', '/'],
    ['+', '-', '+'],
    ['+', '-', '-'],
    ['+', '-', '*'],
    ['+', '-', '/'],
    ['+', '*', '+'],
    ['+', '*', '-'],
    ['+', '*', '*'],
    ['+', '*', '/'],
    ['+', '/', '+'],
    ['+', '/', '-'],
    ['+', '/', '*'],
    ['+', '/', '/'],
    ['-', '+', '+'],
    ['-', '+', '-'],
    ['-', '+', '*'],
    ['-', '+', '/'],
    ['-', '-', '+'],
    ['-', '-', '-'],
    ['-', '-', '*'],
    ['-', '-', '/'],
    ['-', '*', '+'],
    ['-', '*', '-'],
    ['-', '*', '*'],
    ['-', '*', '/'],
    ['-', '/', '+'],
    ['-', '/', '-'],
    ['-', '/', '*'],
    ['-', '/', '/'],
    ['*', '+', '+'],
    ['*', '+', '-'],
    ['*', '+', '*'],
    ['*', '+', '/'],
    ['*', '-', '+'],
    ['*', '-', '-'],
    ['*', '-', '*'],
    ['*', '-', '/'],
    ['*', '*', '+'],
    ['*', '*', '-'],
    ['*', '*', '*'],
    ['*', '*', '/'],
    ['*', '/', '+'],
    ['*', '/', '-'],
    ['*', '/', '*'],
    ['*', '/', '/'],
    ['/', '+', '+'],
    ['/', '+', '-'],
    ['/', '+', '*'],
    ['/', '+', '/'],
    ['/', '-', '+'],
    ['/', '-', '-'],
    ['/', '-', '*'],
    ['/', '-', '/'],
    ['/', '*', '+'],
    ['/', '*', '-'],
    ['/', '*', '*'],
    ['/', '*', '/'],
    ['/', '/', '+'],
    ['/', '/', '-'],
    ['/', '/', '*'],
    ['/', '/', '/'],
  ]

  it('works', () => {
    expect(operatorsPermutations.length).toBe(expectedOperatorsPermutations.length)
    operatorsPermutations.map(x => expect(expectedOperatorsPermutations).toContainEqual(x))
  })
})

describe('solve', () => {
  type TestCase = [Input, string[]]
  const testCases: TestCase[] = [
    [
      [1, 1, 2, 7],
      [
        '(1 + 2) * (1 + 7)',
        '(1 + 2) * (7 + 1)',
        '(1 + 7) * (1 + 2)',
        '(1 + 7) * (2 + 1)',
        '(2 + 1) * (1 + 7)',
        '(2 + 1) * (7 + 1)',
        '(7 + 1) * (1 + 2)',
        '(7 + 1) * (2 + 1)',
      ],
    ],
  ]
  testCases.map(testCase => {
    const [input, output] = testCase
    it(`matches the output for ${input}`, () => {
      const calculatedOutput = solve(input)

      expect(output.length).toBe(calculatedOutput.length)
      output.map(x => expect(calculatedOutput).toContainEqual(x))
    })
  })
})

describe('uniquePermutations', () => {
  type TestCase = [Input, Input[]]
  const testCases: TestCase[] = [
    [
      [1, 1, 2, 7],
      [
        [1, 1, 2, 7],
        [1, 1, 7, 2],
        [1, 2, 1, 7],
        [1, 2, 7, 1],
        [1, 7, 1, 2],
        [1, 7, 2, 1],
        [2, 1, 1, 7],
        [2, 1, 7, 1],
        [2, 7, 1, 1],
        [7, 1, 1, 2],
        [7, 1, 2, 1],
        [7, 2, 1, 1],
      ],
    ],
  ]

  testCases.map(testCase => {
    const [input, output] = testCase
    it(`matches the output for ${input}`, () => {
      const calculatedPermutations = uniquePermutations(input)
      expect(output.length).toBe(calculatedPermutations.length)
      output.map(x => expect(calculatedPermutations).toContainEqual(x))
    })
  })
})
