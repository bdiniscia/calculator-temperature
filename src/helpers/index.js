export const sanitize = (input) => {
    // Avoid the process of Falsies and spaces
    if ((!input && input !== '0') || input.includes(' ')) {
        return NaN;
    }
    // For people who use , instead of . for decimals
    const str = input.replace(',', '.');
    return Number(str);
}