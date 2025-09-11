"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { LucideLoaderCircle } from "lucide-react";
import { cloneElement } from "react";
import { cn } from "@/libs/cn";

type SubmitButtonProps = {
  label?: string;
  icon?: React.ReactElement<{ className?: string }>;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

const SubmitButton = ({
  label,
  icon,
  variant,
  size,
  className,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      variant={variant}
      size={size}
      className={cn("cursor-pointer", className)}
    >
      {pending && <LucideLoaderCircle className="size-4 animate-spin" />}
      {label}
      {pending
        ? null
        : icon && (
            <span>
              {cloneElement(icon, {
                className: "size-4",
              })}
            </span>
          )}
    </Button>
  );
};

export { SubmitButton };
