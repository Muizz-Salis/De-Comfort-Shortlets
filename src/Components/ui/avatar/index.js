import React from "react";

// Simple utility to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Create the components using React.createElement instead of JSX
const Avatar = function Avatar({ className, ...props }) {
  return React.createElement("div", {
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  });
};

const AvatarImage = function AvatarImage({ className, ...props }) {
  return React.createElement("img", {
    className: cn("aspect-square h-full w-full", className),
    ...props
  });
};

const AvatarFallback = function AvatarFallback({ className, ...props }) {
  return React.createElement("div", {
    className: cn("flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-900", className),
    ...props
  });
};

export { Avatar, AvatarImage, AvatarFallback };
