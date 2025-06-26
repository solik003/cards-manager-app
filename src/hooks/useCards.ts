import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import mockCards from "../mock/mock-cards.json";
import { Card } from "../types/card";

export function useCards() {
    const [cards, setCards] = useState<Card[]>([]);
    const [filtered, setFiltered] = useState<Card[]>([]);
    const [filter, setFilter] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const typedCards: Card[] = mockCards.map((card) => ({
                ...card,
                brand: card.brand as Card["brand"],
            }));
            setCards(typedCards);
            setFiltered(typedCards);
            setIsLoading(false);
        }, 1000);
    }, []);

    const handleFilter = (value: string) => {
        setFilter(value);
        setFiltered(
            cards.filter(
                (card) =>
                    card.brand.includes(value.toLowerCase()) || card.last4.includes(value)
            )
        );
    };

    const handleDelete = (id: string) => {
        const updated = cards.filter((card) => card.id !== id);
        setCards(updated);
        setFiltered(
            updated.filter(
                (card) =>
                    card.brand.includes(filter.toLowerCase()) || card.last4.includes(filter)
            )
        );
    };

    const handleCreate = (brand: Card["brand"], last4: string) => {
        const newCard: Card = {
            id: uuidv4(),
            brand,
            last4,
            isDefault: false,
        };
        const updated = [...cards, newCard];
        setCards(updated);
        
        if (filter) {
            setFiltered(
                updated.filter(
                    (card) =>
                        card.brand.includes(filter.toLowerCase()) || card.last4.includes(filter)
                )
            );
        } else {
            setFiltered(updated);
        }
    };

    return {
        cards,
        filtered,
        filter,
        isLoading,
        handleFilter,
        handleDelete,
        handleCreate,
    };
}
