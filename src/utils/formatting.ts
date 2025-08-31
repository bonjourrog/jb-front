/**
 * Converts a number into a string formatted as USD currency.
 *
 * @param value - The numeric value to convert to a currency format.
 * @returnsA A string with the formated value in UD dolar,
 *          without decimals. Example: 1234 => "$1,234".
 * 
 * @example
 * const result = numberToCurrency(1500);
 * console.log(result); // "$1,500"
 */
export const numberToCurrency = (value: number): string => {
    const ammountUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(value);
    return ammountUSD
}
/**
 * Formats a given Date object into a readable Spanish date string.
 * 
 * @param originalDate - The Date value to format.
 * @returns A string representing the formatted date in Spanish, 
 *          using a short month name. Example: "26 ago 2025".
 *
 * @example
 * const result = formatDateToSpanish(new Date('2025-08-26'));
 * console.log(result); // "26 ago 2025"
 */
export const formatDateToSpanish = (originalDate: Date): String => {
    const date = new Date(originalDate);
    return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}