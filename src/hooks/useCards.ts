
import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import mockCards from "../mock/mock-cards.json";
import { Card } from "../types/card";

export function useCards() {
    const [cards, setCards] = useState<Card[]>([]);
    const [filter, setFilter] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const typedCards: Card[] = mockCards.map((card) => ({
            ...card,
            brand: card.brand as Card["brand"],
        }));
        setCards(typedCards);
        setIsLoading(false);
    }, []);

    const filtered = useMemo(() => {
        if (!filter) return cards;
        const lower = filter.toLowerCase();
        return cards.filter(
            (card) => card.brand.includes(lower) || card.last4.includes(lower)
        );
    }, [cards, filter]);

    const handleFilter = (value: string) => {
        setFilter(typeof value === "string" ? value : "");
    };

    const handleDelete = (id: string) => {
        setCards((prev) => prev.filter((card) => card.id !== id));
    };

    const handleCreate = (brand: Card["brand"], last4: string) => {
        const newCard: Card = {
            id: uuidv4(),
            brand,
            last4,
            isDefault: false,
        };
        setCards((prev) => [...prev, newCard]);
    };

    const handleSetDefault = (id: string) => {
        setCards((prev) =>
            prev.map((card) => ({
                ...card,
                isDefault: card.id === id,
            }))
        );
    };


    return {
        cards,
        filtered,
        filter,
        isLoading,
        handleFilter,
        handleDelete,
        handleCreate,
        handleSetDefault,
    };
}

