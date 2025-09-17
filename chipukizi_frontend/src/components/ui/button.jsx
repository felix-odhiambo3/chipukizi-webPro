import React from 'react';
import clsx from 'clsx';

export function Button({
  children,
  asChild = false,
  size = 'md',
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500';

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700',
  };

  const classes = clsx(
    base,
    sizes[size],
    variants[variant],
    className
  );

  if (asChild && React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      className: clsx(children.props.className, classes),
      ...props,
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;