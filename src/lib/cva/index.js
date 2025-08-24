// Simplified version of class-variance-authority
export function cva(base, config = {}) {
  return (props = {}) => {
    const { 
      variants = {},
      defaultVariants = {},
    } = config;
    
    const variantClassNames = Object.entries(variants).reduce((acc, [variant, values]) => {
      const valueKey = props[variant] ?? defaultVariants[variant];
      if (valueKey && values[valueKey]) {
        acc.push(values[valueKey]);
      }
      return acc;
    }, []);

    return [base, ...variantClassNames].filter(Boolean).join(' ');
  };
}
