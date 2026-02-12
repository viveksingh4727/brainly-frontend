type Variants = "primary" | "secondary";
type Sizes = 'sm' | 'md' | 'lg';


interface ButtonProps {
  variant: Variants;
  size: Sizes
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-purple-300 text-purple-600 hover:bg-purple-400",
};

const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-6 py-3 text-lg",
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} rounded-md font-medium flex items-center gap-2`}
    >
      {props.text}
    </button>
  );
};
