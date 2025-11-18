import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Mail, Plus } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Botão versátil com múltiplas variantes, tamanhos e estados.

Baseado em **Radix UI** para acessibilidade e estilizado com **Tailwind CSS**.

## Características

- ✅ Suporte a múltiplas variantes (default, secondary, outline, ghost, link)
- ✅ Tamanhos responsivos (sm, md)
- ✅ Estado destrutivo para ações perigosas
- ✅ Estado de loading com spinner
- ✅ Totalmente acessível (WCAG 2.1)
- ✅ Suporte a dark mode
- ✅ Compatível com Radix Slot (asChild)

## Uso Básico

\`\`\`tsx
import { Button } from '@/components/ui/button'

export default function Example() {
  return <Button>Click me</Button>
}
\`\`\`

## Com Ícones

\`\`\`tsx
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export default function Example() {
  return (
    <Button>
      <Mail className="h-4 w-4" />
      Send Email
    </Button>
  )
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'link'],
      description: 'Estilo visual do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Tamanho do botão',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    destructive: {
      control: 'boolean',
      description: 'Indica ação destrutiva (ex: deletar, remover)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento - mostra spinner e desabilita',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: 'boolean',
      description: 'Renderiza como Radix Slot (composição)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// ============================================
// STORIES BÁSICAS - VARIANTES
// ============================================

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'md',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
}

// ============================================
// VARIANTES DESTRUTIVAS
// ============================================

export const Destructive: Story = {
  args: {
    children: 'Delete',
    destructive: true,
  },
}

export const DestructiveSecondary: Story = {
  args: {
    children: 'Delete',
    variant: 'secondary',
    destructive: true,
  },
}

export const DestructiveOutline: Story = {
  args: {
    children: 'Delete',
    variant: 'outline',
    destructive: true,
  },
}

export const DestructiveGhost: Story = {
  args: {
    children: 'Delete',
    variant: 'ghost',
    destructive: true,
  },
}

export const DestructiveLink: Story = {
  args: {
    children: 'Delete',
    variant: 'link',
    destructive: true,
  },
}

// ============================================
// TAMANHOS
// ============================================

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
  },
}

// ============================================
// ESTADOS
// ============================================

export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
}

export const LoadingSecondary: Story = {
  args: {
    children: 'Processing...',
    variant: 'secondary',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const DisabledDestructive: Story = {
  args: {
    children: 'Delete',
    destructive: true,
    disabled: true,
  },
}

// ============================================
// COM ÍCONES
// ============================================

export const WithIconLeft: Story = {
  args: {
    children: (
      <>
        <Mail className="h-4 w-4" />
        Send Email
      </>
    ),
  },
}

export const WithIconRight: Story = {
  args: {
    children: (
      <>
        Continue
        <Plus className="h-4 w-4" />
      </>
    ),
  },
}

export const WithIconOnly: Story = {
  args: {
    size: 'sm',
    children: <Mail className="h-4 w-4" />,
  },
}

// ============================================
// SHOWCASE - MATRIZ COMPLETA
// ============================================

export const AllVariants: Story = {
  name: '📊 Showcase - Todas as Variantes',
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Variantes Padrão (Normal)</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 text-destructive">Variantes Destrutivas</h3>
        <div className="flex flex-wrap gap-4">
          <Button destructive>Default</Button>
          <Button variant="secondary" destructive>Secondary</Button>
          <Button variant="outline" destructive>Outline</Button>
          <Button variant="ghost" destructive>Ghost</Button>
          <Button variant="link" destructive>Link</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Tamanhos</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Estados</h3>
        <div className="flex flex-wrap gap-4">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button destructive loading>Loading Destructive</Button>
          <Button destructive disabled>Disabled Destructive</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Com Ícones</h3>
        <div className="flex flex-wrap gap-4">
          <Button>
            <Mail className="h-4 w-4" />
            With Icon
          </Button>
          <Button variant="secondary">
            <Plus className="h-4 w-4" />
            Add Item
          </Button>
          <Button variant="outline" size="sm">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  ),
}

// ============================================
// EXEMPLOS DE USO REAL
// ============================================

export const FormActions: Story = {
  name: '📝 Exemplo - Ações de Formulário',
  render: () => (
    <div className="flex gap-4">
      <Button variant="outline">Cancel</Button>
      <Button>Save Changes</Button>
    </div>
  ),
}

export const DestructiveAction: Story = {
  name: '⚠️ Exemplo - Ação Destrutiva',
  render: () => (
    <div className="flex gap-4">
      <Button variant="outline">Cancel</Button>
      <Button destructive>Delete Account</Button>
    </div>
  ),
}

export const LoadingState: Story = {
  name: '⏳ Exemplo - Estado de Loading',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button>Submit</Button>
      </div>
      <div className="flex gap-4">
        <Button loading>Submitting...</Button>
      </div>
    </div>
  ),
}

// ============================================
// TESTES DE ACESSIBILIDADE
// ============================================

export const AccessibilityTest: Story = {
  name: '♿ Teste de Acessibilidade',
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <p className="text-sm text-muted-foreground mb-2">
        Use o addon A11y do Storybook para verificar conformidade WCAG
      </p>
      <div className="flex gap-4">
        <Button>Normal Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button loading>Loading Button</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline">Outline with good contrast</Button>
        <Button variant="ghost">Ghost with hover state</Button>
      </div>
    </div>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'button-name',
            enabled: true,
          },
        ],
      },
    },
  },
}
