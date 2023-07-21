/**
 * Formats a number as a price with currency symbol.
 *
 * @param {number|String} n - The number to be formatted as a price.
 * @param {string} [currency='€'] - The currency to be appended to the formatted price.
 * @returns {string} The formatted price with the currency symbol.
 */
export const formatPrice = (
  n: number | string,
  currency: string = '€'
): string => {
  if (typeof n === 'string') n = parseFloat(n)

  n = parseFloat(n.toFixed(2))

  if (Number.isInteger(n) === false) return removeTrailingZeros(n) + currency

  return n + currency
}

/**
 * Separates the integer and fractional parts of a number.
 *
 * @param {number} n - The number to be separated.
 * @returns {Array<string>} An array containing the integer and fractional parts of the number as strings.
 */
export const separateNumberParts = (n: number): Array<string> =>
  n.toString().split('.')

/**
 * Removes trailing zeros from a number's fractional part.
 *
 * @param {number} n - The number from which to remove trailing zeros.
 * @returns {string} The number without trailing zeros.
 */
export const removeTrailingZeros = (n: number): string => {
  let [integerPart, floatingPart] = separateNumberParts(n)

  if (floatingPart === undefined) return integerPart

  while (floatingPart.slice(-1) === '0')
    floatingPart = floatingPart.slice(0, -1)

  return floatingPart === ''
    ? integerPart
    : [integerPart, floatingPart].join('.')
}
