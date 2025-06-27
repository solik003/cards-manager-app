
export function getCardBrand(cardNumber: string): "visa" | "mastercard" | "amex" | "unknown" {
    const cleaned = cardNumber.replace(/\D/g, "");

    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cleaned)) return "visa";
    if (/^5[1-5][0-9]{14}$/.test(cleaned)) return "mastercard";
    if (/^3[47][0-9]{13}$/.test(cleaned)) return "amex";

    return "unknown";
}