/**
 * Deep clone input value to clean output with the same type
 */
export function clone<T>(input: T): T {
  const clone: T = JSON.parse(JSON.stringify(input));
  return clone;
}
