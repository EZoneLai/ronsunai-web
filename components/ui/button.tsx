import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "lg"
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold/20 disabled:opacity-50 disabled:pointer-events-none rounded-2xl"
  
  const variantStyles = {
    default: "bg-ink text-paper hover:bg-ink/90",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-paper bg-transparent",
  }
  
  const sizeStyles = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    />
  )
}
