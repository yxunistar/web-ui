/**
 * 數值加上逗點
 * @param n
 * @returns {string}
 */
export const withCommas = n => {
    return `${n}`.search(/\./) > 0 ? `${n}`.replace(/\B(?=(\d{3})+(\.\d*))/g, ",") : `${n}`.replace(/\B(?=(\d{3})+(\b))/g, ",");
};

/**
 * 數值無條件捨去至指定小數位數，不足位數補 0
 * @param n
 * @param digit
 * @returns {string}
 */
export const minimumFractionDigits = (n, { digit = 4 } = { digit: 4 }) => {
    const fractionDigits = new RegExp("([\\d,]+\\.\\d{" + digit + "})\\d*");
    if (!digit) return `${n}`.replace(/([\d,]+)(?=\.).*/g, "$1");
    return `${n}`.indexOf(".") < 0
        ? `${n}`.concat(".").concat(new Array(digit + 1).join("0"))
        : `${n}`.concat(new Array(digit + 1).join("0")).replace(fractionDigits, "$1");
};

export default class Number {
    /**
     * @param n
     * @param comma 預設加入逗點
     * @param digit 預設無條件捨去至4位數，不足位數補0
     * @param currency 預設非貨幣格式
     * @returns {string|*}
     */
    static format(
        n,
        { comma = true, digit = 4, currency = false } = {
            comma: true,
            digit: 4,
            currency: false,
        }
    ) {
        if (comma) n = withCommas(n);
        n = minimumFractionDigits(n, { digit });
        if (currency) n = `￥${n}`;
        return n;
    }

    static plus(n1, n2) {
        const digit = n => (`${n}`.split(".")[1] || "").length;
        const n1Digit = digit(n1);
        const n2Digit = digit(n2);
        const baseDigit = Math.pow(10, Math.max(n1Digit, n2Digit));
        return (+(n1 * baseDigit).toFixed(0) + +(n2 * baseDigit).toFixed(0)) / baseDigit;
    }
}

Number.f = Number.format;
