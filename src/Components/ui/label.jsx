import React from "react"

// Simplified utility function
const cn = (...classes) => classes.filter(Boolean).join(' ')

const Label = React.forwardRef(({ className, htmlFor, children, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("text-sm font-medium leading-none", className)}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </label>
))
Label.displayName = "Label"

export { Label }
