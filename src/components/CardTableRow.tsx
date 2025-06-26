
import { Card } from "../types/card";
import { Button } from "./ui/Button";

type Props = {
    card: Card;
    onDelete: (id: string) => void;
};

export const CardTableRow = ({ card, onDelete }: Props) => (
    <tr className="border-t">
        <td className="p-2 capitalize">{card.brand}</td>
        <td className="p-2">•••• {card.last4}</td>
        <td className="p-2">{card.isDefault ? "on" : ""}</td>
        <td className="p-2">
            <Button
                variant="destructive"
                size="sm"
                onClick={() => onDelete(card.id)}
            >
                Delete
            </Button>
        </td>
    </tr>
);
