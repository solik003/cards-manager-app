import {
    FormProvider as RHFFormProvider,
    type FieldValues,
    type UseFormReturn,
    Controller,
} from "react-hook-form";
import { cn } from "../../../lib/utils";


export function Form<TFieldValues extends FieldValues = FieldValues>({
    children,
    ...props
}: {
    children: React.ReactNode;
} & UseFormReturn<TFieldValues>) {
    return <RHFFormProvider {...props}>{children}</RHFFormProvider>;
}

export function FormField({
    name,
    control,
    render,
}: {
    name: string;
    control: any;
    render: any;
}) {
    return <Controller name={name} control={control} render={render} />;
}

export function FormItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("space-y-2", className)} {...props} />;
}

export function FormLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
    return <label className={cn("text-sm font-medium", className)} {...props} />;
}

export function FormControl({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return <div className={cn("w-full", className)} {...props} />;
}

export function FormDescription({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return <p className={cn("text-sm text-muted-foreground", className)} {...props} />;
}

export function FormMessage({ children }: { children?: React.ReactNode }) {
    if (!children) return null;
    return <p className="text-sm text-red-500">{children}</p>;
}
