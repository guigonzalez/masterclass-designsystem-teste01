import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './button'

describe('Button', () => {
  describe('Rendering', () => {
    it('renders with default variant', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('bg-primary')
    })

    it('renders all variants correctly', () => {
      const variants = ['default', 'secondary', 'outline', 'ghost', 'link'] as const

      variants.forEach(variant => {
        const { unmount } = render(<Button variant={variant}>Button</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
        unmount()
      })
    })

    it('renders all sizes correctly', () => {
      const { rerender } = render(<Button size="sm">Small</Button>)
      let button = screen.getByRole('button')
      expect(button).toHaveClass('h-9')

      rerender(<Button size="md">Medium</Button>)
      button = screen.getByRole('button')
      expect(button).toHaveClass('h-10')
    })

    it('renders children correctly', () => {
      render(<Button>Test Content</Button>)
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('renders with custom className', () => {
      render(<Button className="custom-class">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })
  })

  describe('Interactions', () => {
    it('calls onClick handler when clicked', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick}>Click me</Button>)
      const button = screen.getByRole('button')

      await user.click(button)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not call onClick when disabled', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick} disabled>Click me</Button>)
      const button = screen.getByRole('button')

      await user.click(button)
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('does not call onClick when loading', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick} loading>Click me</Button>)
      const button = screen.getByRole('button')

      await user.click(button)
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('supports keyboard navigation (Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick}>Button</Button>)
      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalled()
    })

    it('supports keyboard navigation (Space)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick}>Button</Button>)
      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard(' ')
      expect(handleClick).toHaveBeenCalled()
    })
  })

  describe('States', () => {
    it('shows loading spinner when loading', () => {
      const { container } = render(<Button loading>Loading</Button>)
      const spinner = container.querySelector('.animate-spin')
      expect(spinner).toBeInTheDocument()
    })

    it('is disabled when loading prop is true', () => {
      render(<Button loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('is disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('applies destructive styles', () => {
      render(<Button destructive>Delete</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-destructive')
    })

    it('combines destructive with outline variant', () => {
      render(<Button variant="outline" destructive>Delete</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border-destructive')
      expect(button).toHaveClass('text-destructive')
    })

    it('combines destructive with ghost variant', () => {
      render(<Button variant="ghost" destructive>Delete</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('text-destructive')
    })
  })

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(<Button>Button</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('is focusable', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      button.focus()
      expect(button).toHaveFocus()
    })

    it('is not focusable when disabled', () => {
      render(<Button disabled>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveClass('disabled:pointer-events-none')
    })

    it('has focus visible styles', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('focus-visible:outline-none')
      expect(button).toHaveClass('focus-visible:ring-2')
      expect(button).toHaveClass('focus-visible:ring-ring')
    })

    it('preserves aria attributes', () => {
      render(
        <Button aria-label="Custom label" aria-describedby="description">
          Button
        </Button>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label', 'Custom label')
      expect(button).toHaveAttribute('aria-describedby', 'description')
    })
  })

  describe('Variants Combinations', () => {
    it('renders default variant with small size', () => {
      render(<Button variant="default" size="sm">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-primary')
      expect(button).toHaveClass('h-9')
    })

    it('renders secondary variant with medium size', () => {
      render(<Button variant="secondary" size="md">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-secondary')
      expect(button).toHaveClass('h-10')
    })

    it('renders outline variant', () => {
      render(<Button variant="outline">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border')
      expect(button).toHaveClass('bg-background')
    })

    it('renders ghost variant', () => {
      render(<Button variant="ghost">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('hover:bg-accent')
    })

    it('renders link variant', () => {
      render(<Button variant="link">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('underline-offset-4')
    })
  })

  describe('Custom className', () => {
    it('merges custom className with variant classes', () => {
      render(<Button className="custom-class">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
      expect(button).toHaveClass('bg-primary')
    })

    it('allows overriding styles with custom className', () => {
      render(<Button className="bg-blue-500">Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-blue-500')
    })
  })

  describe('Loading State', () => {
    it('renders loading spinner', () => {
      const { container } = render(<Button loading>Loading</Button>)
      const spinner = container.querySelector('svg')
      expect(spinner).toBeInTheDocument()
      expect(spinner).toHaveClass('animate-spin')
    })

    it('renders children alongside spinner', () => {
      render(<Button loading>Loading...</Button>)
      expect(screen.getByText('Loading...')).toBeInTheDocument()
    })

    it('maintains variant styles when loading', () => {
      render(<Button variant="secondary" loading>Loading</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-secondary')
    })
  })

  describe('Button Type', () => {
    it('defaults to button type', () => {
      render(<Button>Button</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'button')
    })

    it('can be set to submit type', () => {
      render(<Button type="submit">Submit</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'submit')
    })

    it('can be set to reset type', () => {
      render(<Button type="reset">Reset</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('type', 'reset')
    })
  })

  describe('Ref forwarding', () => {
    it('forwards ref to button element', () => {
      const ref = vi.fn()
      render(<Button ref={ref}>Button</Button>)
      expect(ref).toHaveBeenCalled()
    })
  })
})
