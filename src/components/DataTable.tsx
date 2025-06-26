
import { Card } from "../types/card";
import { TableBody, TableCell, TableHead, TableHeader, TableRow, Table } from "./ui/Table/Table";

type Props = {
    cards: Card[];
    onDelete: (id: string) => void;
};

export const DataTable = ({ cards, onDelete }: Props) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Last 4</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {cards.map((card) => (
                <TableRow key={card.id}>
                    <TableCell>{card.brand}</TableCell>
                    <TableCell>{card.last4}</TableCell>
                    <TableCell>{card.isDefault ? "Yes" : "No"}</TableCell>
                    <TableCell>
                        <button
                            className="text-red-500 hover:underline"
                            onClick={() => onDelete(card.id)}
                        >
                            Delete
                        </button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
);

