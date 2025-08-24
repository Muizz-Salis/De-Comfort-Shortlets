import * as React from "react"

// Simple utility to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Badge variant styles
const getBadgeClasses = ({ variant = "default", className }) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variantClasses = {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-transparent bg-gray-200 text-gray-900 hover:bg-gray-300",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
    outline: "text-gray-900 border-gray-300",
  };
  
  return cn(
    baseClasses,
    variantClasses[variant],
    className
  );
};

function Badge({ className, variant, ...props }) {
  return (
    <div className={getBadgeClasses({ variant, className })} {...props} />
  )
}

export default Badge
