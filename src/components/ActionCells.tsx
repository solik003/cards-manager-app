import React, { useState } from "react";
import { Button } from "./ui/Button";

type ActionsCellProps = {
    rowId: string;
    isDefault: boolean;
    onDelete: (id: string) => void;
    onSetDefault: (id: string) => void;
};

export const ActionsCell = ({ rowId, isDefault, onDelete, onSetDefault }: ActionsCellProps) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <Button 
                onClick={() => setShowMenu(prev => !prev)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
                ⋮
            </Button >

            {showMenu && (
                <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg z-10">
                    {!isDefault && (
                        <Button
                            onClick={() => {
                                onSetDefault(rowId);
                                setShowMenu(false);
                            }}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                            Set as default
                        </Button>
                    )}
                    <Button
                        onClick={() => {
                            onDelete(rowId);
                            setShowMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                        Delete
                    </Button>
                </div>
            )}
        </div>
    );
};
