import { useState } from "react";

type Brand = "visa" | "mastercard" | "amex";

export function useAddCardForm(onCreate: (brand: Brand, last4: string) => void) {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [brand, setBrand] = useState<Brand>("visa");

    const resetForm = () => {
        setCardNumber("");
        setExpiry("");
        setCvc("");
        setBrand("visa");
    };

    const handleAddCard = () => {
        const last4 = cardNumber.trim().slice(-4);
        if (last4.length === 4) {
            onCreate(brand, last4);
            resetForm();
        }
    };

    return {
        cardNumber,
        setCardNumber,
        expiry,
        setExpiry,
        cvc,
        setCvc,
        brand,
        setBrand,
        handleAddCard,
    };
}
