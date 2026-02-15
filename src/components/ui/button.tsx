import type { ReactElement } from "react";

type Variants = "primary" | "secondary";
type Sizes = 'sm' | 'md' | 'lg';


interface ButtonProps {
  variant: Variants;
  size: Sizes
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "bg-purple-600 text-white font-extralight hover:bg-purple-700 shadow-md hover:shadow-lg transition-all duration-200",
  secondary:
    "bg-purple-100 text-purple-600 font-extralight hover:bg-purple-200 border border-purple-200 transition-all duration-200",
};

const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-base",
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`
        ${variantStyles[props.variant]} 
        ${sizeStyles[props.size]} 
        rounded-lg  
        flex items-center justify-center gap-2
        active:scale-95
      `}
    >
      {props.startIcon && (
        <span className="flex items-center">
          {props.startIcon}
        </span>
      )}
      {props.text}
      {props.endIcon && (
        <span className="flex items-center">
          {props.endIcon}
        </span>
      )}
    </button>
  );
};