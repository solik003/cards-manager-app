import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const dropdownMenuItem = cva(
    "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1 text-sm outline-none transition-colors focus:bg-gray-100 dark:focus:bg-gray-700"
);

export const DropdownMenuItem = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(dropdownMenuItem(), className)}
        {...props}
    />
));

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
