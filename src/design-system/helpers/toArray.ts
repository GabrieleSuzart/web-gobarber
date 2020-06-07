/**
 * Converts a value to array if not an array already
 * @param value The value to be converted
 */
export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
