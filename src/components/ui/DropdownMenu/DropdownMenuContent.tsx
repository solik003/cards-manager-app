import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";

import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const dropdownMenuContent = cva(
    "z-50 min-w-[12rem] rounded-md border bg-white p-1 shadow-md outline-none dark:border-gray-700 dark:bg-gray-800"
);

export const DropdownMenuContent = forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            className={cn(dropdownMenuContent(), className)}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
));

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
