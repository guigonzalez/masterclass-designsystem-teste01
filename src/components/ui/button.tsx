import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base styles (sempre aplicados)
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 py-2",
      },
      destructive: {
        false: "",
        true: "",
      },
    },
    compoundVariants: [
      // Destructive + variant combinations
      {
        destructive: true,
        variant: "default",
        className: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      {
        destructive: true,
        variant: "outline",
        className: "border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground",
      },
      {
        destructive: true,
        variant: "ghost",
        className: "text-destructive hover:bg-destructive/10",
      },
      {
        destructive: true,
        variant: "link",
        className: "text-destructive hover:bg-destructive/10",
      },
      {
        destructive: true,
        variant: "secondary",
        className: "bg-destructive/10 text-destructive hover:bg-destructive/20",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "md",
      destructive: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Renderiza o componente como um child component (usando Radix Slot)
   */
  asChild?: boolean
  /**
   * Estado de carregamento - mostra um spinner e desabilita o botão
   */
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    destructive,
    asChild = false,
    loading = false,
    disabled,
    children,
    type = "button",
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, destructive, className }))}
        ref={ref}
        type={type}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
