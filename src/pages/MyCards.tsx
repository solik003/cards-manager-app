
import { Input } from "../components/ui/Input";
import { AddCardDialog } from "../components/CreateCardDialog";

import { useCards } from "../hooks/useCards";
import { DataTable } from "../components/DataTable";

export default function MyCardsPage() {
    const {
        filtered,
        filter,
        isLoading,
        handleFilter,
        handleDelete,
        handleCreate,
        handleSetDefault,
    } = useCards();



    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">My Cards</h1>

            <div className="flex items-center justify-between">
                <Input
                    placeholder="Filter by brand or last4"
                    value={filter}
                    onChange={(e) => handleFilter(e.target.value)}
                    className="max-w-sm"
                />
                <AddCardDialog onCreate={handleCreate} />
            </div>

            {isLoading ? (
                <p>Loading...</p>
            ) : filtered.length === 0 ? (
                <p>No cards found</p>
            ) : (
                <DataTable cards={filtered} onDelete={handleDelete} onSetDefault={handleSetDefault} />
            )}
        </div>
    );
}

