import React, { useState } from "react"
import { ChevronDown } from "lucide-react"

// Simplified utility function
const cn = (...classes) => classes.filter(Boolean).join(' ')

// Simple custom select component that works without external dependencies
function Select({ children, value, onValueChange, defaultValue, ...props }) {
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || "");
  
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (onValueChange) onValueChange(e.target.value);
  };
  
  return (
    <select 
      className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      value={value !== undefined ? value : selectedValue}
      onChange={handleChange}
      {...props}
    >
      {children}
    </select>
  );
}

// Simple components for API compatibility with the original
const SelectGroup = ({ children, ...props }) => <optgroup {...props}>{children}</optgroup>;
const SelectValue = ({ children }) => children;
const SelectTrigger = ({ className, children }) => (
  <div className={cn("relative", className)}>
    {children}
  </div>
);
const SelectContent = ({ children }) => <>{children}</>;
const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
const SelectLabel = ({ children }) => <span>{children}</span>;
const SelectSeparator = () => <hr />;

// Display names for React DevTools
Select.displayName = "Select";
SelectGroup.displayName = "SelectGroup";
SelectValue.displayName = "SelectValue";
SelectTrigger.displayName = "SelectTrigger";
SelectContent.displayName = "SelectContent";
SelectItem.displayName = "SelectItem";
SelectLabel.displayName = "SelectLabel";
SelectSeparator.displayName = "SelectSeparator";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator
}
