import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "lg"
}

export function Button({
  className = "",
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-500 ease-out group relative overflow-hidden tracking-widest font-medium focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
  
  const sizeStyles = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }
  
  // 水墨按鈕風格 - 保留 CIS 金色系
  if (variant === "default") {
    return (
      <button className={`${baseStyles} text-[#F5F5F0] ${sizeStyles[size]} ${className}`} {...props}>
        {/* 背景墨黑 */}
        <span className="absolute inset-0 bg-[#1A1A1A] w-full h-full transition-transform duration-500 group-hover:scale-[1.02] filter-brush-stroke rounded-sm"></span>
        {/* Hover 變為 CIS 金 */}
        <span className="absolute inset-0 bg-[#C59D5F] w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    )
  }
  
  return (
    <button className={`${baseStyles} text-[#1A1A1A] border-b border-[#1A1A1A]/20 hover:border-[#1A1A1A] ${sizeStyles[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
