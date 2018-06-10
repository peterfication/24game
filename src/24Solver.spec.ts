import { InputNumber, solve } from './24Solver'

describe('solve', () => {
  type TestCaseInput = [InputNumber, InputNumber, InputNumber, InputNumber]
  type TestCase = [TestCaseInput, string[]]
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
      // Array spread for functions does not work in Typescript yet
      // https://github.com/Microsoft/TypeScript/issues/4130
      expect(solve(input[0], input[1], input[2], input[3])).toEqual(output)
    })
  })
})
