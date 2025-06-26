import {
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    flexRender,
} from "@tanstack/react-table"
import React from "react"
import { Card } from "../types/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/Table/Table"
import { getCardColumns } from "../columns/card-columns"

type Props = {
    cards: Card[]
    onDelete: (id: string) => void
}

export const DataTable = ({ cards, onDelete }: Props) => {
    const [sorting, setSorting] = React.useState<SortingState>([])

    const table = useReactTable({
        data: cards,
        columns: getCardColumns(onDelete),
        state: { sorting },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    })

    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <TableHead key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </TableHead>
                        ))}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows.length ? (
                    table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell className="text-center py-6">
                            No cards found.
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}
