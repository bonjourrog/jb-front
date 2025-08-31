/**
 * Convierte un número a una cadena formateada como moneda en USD.
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