
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Dialog } from "./ui/Dialog";
import { DialogContent, DialogTrigger } from "./ui/Dialog/Dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button/Button";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/Form/Form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { getCardBrand } from "./utils/card";
import { ControllerRenderProps } from "react-hook-form";

const cardFormSchema = z.object({
    cardNumber: z
        .string()
        .min(4, "Card number is required")
        .refine((val) => getCardBrand(val) !== "unknown", {
            message: "Unsupported card brand",
        }),
    expiry: z.string().min(1, "Expiration date is required"),
    cvc: z.string().min(1, "CVC is required"),
});
type CardFormInputs = z.infer<typeof cardFormSchema>;

type AddCardDialogProps = {
    onCreate: (brand: "visa" | "mastercard" | "amex", last4: string) => void;
};

export function AddCardDialog({ onCreate }: AddCardDialogProps) {
    const [showCvc, setShowCvc] = useState(false);
    const [open, setOpen] = useState(false);

    const form = useForm<CardFormInputs>({
        resolver: zodResolver(cardFormSchema),
        defaultValues: {
            cardNumber: "",
            expiry: "",
            cvc: ""
        },
    });

    const onSubmit = (data: CardFormInputs) => {
        const last4 = data.cardNumber.trim().slice(-4);
        const brand = getCardBrand(data.cardNumber);

        if (last4.length === 4 && brand !== "unknown") {
            onCreate(brand, last4);
            form.reset();
            setOpen(false);
        }
    };


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)}>Create New</Button>
            </DialogTrigger>
            <DialogContent className="p-6 rounded-lg w-[80%]">
                <DialogTitle className="text-lg font-semibold mb-4">Add New Card</DialogTitle>

                <Form {...form}>
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="cardNumber"
                            render={({ field }: { field: ControllerRenderProps<CardFormInputs, "cardNumber"> }) => (
                                <FormItem>
                                    <FormLabel>Card Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="4242 4242 4242 4242" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="expiry"
                            render={({ field }: { field: ControllerRenderProps<CardFormInputs, "expiry"> })=> (
                                <FormItem>
                                    <FormLabel>Expiration Date</FormLabel>
                                    <FormControl>
                                        <Input placeholder="MM / YY" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="cvc"
                            render={({ field }: { field: ControllerRenderProps<CardFormInputs, "cvc"> }) => (
                                <FormItem>
                                    <FormLabel>CVC</FormLabel>
                                    <FormControl className="relative">
                                        <Input placeholder="•••" type={showCvc ? "text" : "password"} {...field} />
                                        <button
                                            type="button"
                                            onClick={() => setShowCvc((prev) => !prev)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900"
                                            tabIndex={-1}
                                            aria-label={showCvc ? "Hide CVC" : "Show CVC"}
                                        >
                                            {showCvc ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end gap-2 pt-4">
                            <DialogClose asChild>
                                <Button variant="outline" type="button">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button type="button" onClick={form.handleSubmit(onSubmit)}>
                                Add Card
                            </Button>
                        </div>
                    </div>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
