import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const VisuallyHidden = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0",
        className
      )}
      {...props}
    />
  );
});

VisuallyHidden.displayName = "VisuallyHidden"; 