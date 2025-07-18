
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Card } from "../types/card";
import { Button } from "../components/ui/Button";
import { ActionsCell } from "../components/ActionCells";


export const getCardColumns = (
  onDelete: (id: string) => void,
  onSetDefault: (id: string) => void
): ColumnDef<Card>[] => [
    {
      accessorKey: "brand",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Brand <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => row.getValue("brand"),
    },
    {
      accessorKey: "last4",
      header: "Last 4",
      cell: ({ row }) => row.getValue("last4"),
    },
    {
      accessorKey: "isDefault",
      header: "Default",
      cell: ({ row }) => (row.getValue("isDefault") ? "Yes" : "No"),
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <ActionsCell
          rowId={row.original.id}
          isDefault={row.original.isDefault}
          onDelete={onDelete}
          onSetDefault={onSetDefault}
        />
      ),
    },
  ];
