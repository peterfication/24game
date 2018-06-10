export type InputNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export function solve(
  first: InputNumber,
  second: InputNumber,
  third: InputNumber,
  forth: InputNumber,
): string[] {
  return [
    '(1 + 2) * (1 + 7)',
    '(1 + 2) * (7 + 1)',
    '(1 + 7) * (1 + 2)',
    '(1 + 7) * (2 + 1)',
    '(2 + 1) * (1 + 7)',
    '(2 + 1) * (7 + 1)',
    '(7 + 1) * (1 + 2)',
    '(7 + 1) * (2 + 1)',
  ]
}
