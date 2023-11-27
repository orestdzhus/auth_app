import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  [
    "transition-colors",
    "text-secondary-text",
    "text-md",
    "font-semibold",
    "font-mono",
    "rounded-2xl",
    "p-2",
  ],
  {
    variants: {
      size: {
        default: ["w-[290px]"],
        small: ["w-40"],
      },
      customBackground: {
        default: [
          "hover:bg-secondary-hover",
          "bg-secondary",
          "hover:text-white",
          "active:bg-violet-600",
        ],
        dark: [
          "bg-secondary2",
          "hover:bg-secondary2-hover",
          "active:bg-secondary2-active",
        ],
      },
    },
    defaultVariants: {
      size: "default",
      customBackground: "default",
    },
  },
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({
  className,
  size,
  customBackground,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ size, customBackground }), className)}
    />
  );
}
