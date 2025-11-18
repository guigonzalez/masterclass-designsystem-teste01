# Design System

Um Design System completo e profissional construído com **React**, **Tailwind CSS**, **shadcn/ui** e **Radix UI**.

## 🚀 Características

- ✅ **Componentes Acessíveis**: Baseados em Radix UI seguindo padrões WCAG 2.1
- ✅ **Design Tokens**: Sistema centralizado de cores, espaçamentos, tipografia
- ✅ **Dark Mode**: Suporte completo a temas claro/escuro
- ✅ **Type-Safe**: TypeScript com strict mode
- ✅ **Documentação Interativa**: Storybook 10 com addons de acessibilidade
- ✅ **Testes Automatizados**: Vitest + Testing Library
- ✅ **Variantes Type-Safe**: Class Variance Authority (CVA)

## 📦 Tecnologias

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Sistema de componentes
- **Radix UI** - Componentes primitivos acessíveis
- **Vite** - Build tool
- **Vitest** - Testing framework
- **Storybook 10** - Documentação interativa

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Storybook
npm run storybook

# Testes
npm run test

# Build
npm run build
```

## 📁 Estrutura do Projeto

```
design-system/
├── src/
│   ├── components/
│   │   └── ui/              # Componentes shadcn/ui
│   │       ├── button.tsx
│   │       ├── button.stories.tsx
│   │       └── button.test.tsx
│   ├── lib/                 # Utilitários
│   │   └── utils.ts
│   ├── tokens/              # Design tokens
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   ├── typography.ts
│   │   ├── radius.ts
│   │   └── shadows.ts
│   └── styles/              # Estilos globais
│       └── globals.css
├── tests/                   # Setup de testes
├── .storybook/              # Configuração Storybook
└── docs/                    # Documentação adicional
```

## 🎨 Componentes

### Button

Botão versátil com múltiplas variantes e estados.

**Variantes:**
- `default` - Botão primário
- `secondary` - Botão secundário
- `outline` - Botão com borda
- `ghost` - Botão transparente
- `link` - Estilo de link

**Tamanhos:**
- `sm` - Pequeno (36px)
- `md` - Médio (40px)

**Estados:**
- `loading` - Com spinner
- `disabled` - Desabilitado
- `destructive` - Para ações destrutivas

**Exemplo de Uso:**

```tsx
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

// Básico
<Button>Click me</Button>

// Com variante
<Button variant="outline">Outline</Button>

// Com ícone
<Button>
  <Mail className="h-4 w-4" />
  Send Email
</Button>

// Destrutivo
<Button destructive>Delete</Button>

// Loading
<Button loading>Processing...</Button>
```

## 🧪 Testes

```bash
# Rodar todos os testes
npm run test

# Com UI interativa
npm run test:ui

# Com coverage
npm run test:coverage
```

## 📚 Documentação

A documentação completa está disponível no Storybook:

```bash
npm run storybook
```

Acesse `http://localhost:6006` para visualizar:
- Todas as variantes dos componentes
- Exemplos interativos
- Testes de acessibilidade
- Props documentation
- Código fonte

## 🎯 Design Tokens

Os design tokens estão organizados em:

- **Colors**: Cores semânticas e paleta base
- **Spacing**: Espaçamentos baseados em 4px
- **Typography**: Fontes, tamanhos e pesos
- **Radius**: Border radius
- **Shadows**: Sombras e elevação

Exemplo:

```tsx
import { colors, spacing, typography } from '@/tokens'

// Usar tokens diretamente
const customStyle = {
  color: colors.semantic.primary.DEFAULT,
  padding: spacing[4],
  fontSize: typography.fontSize.base,
}
```

## 🔧 Configuração

### Tailwind CSS

O projeto usa CSS variables para suportar temas dinâmicos. Configure em `tailwind.config.ts`.

### shadcn/ui

Adicione novos componentes com:

```bash
npx shadcn@latest add [component-name]
```

A configuração está em `components.json`.

## 🎨 Temas

O sistema suporta temas claro e escuro através de CSS variables:

```tsx
// Alternar tema
document.documentElement.classList.toggle('dark')
```

As cores do tema estão definidas em `src/styles/globals.css`.

## 📝 Próximos Passos

- [ ] Adicionar mais componentes (Input, Card, Badge, Alert)
- [ ] Implementar componentes compostos (Form, Dialog, Dropdown)
- [ ] Criar patterns e layouts
- [ ] Integração com CI/CD
- [ ] Publicar no NPM

## 📄 Licença

MIT

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue ou PR.

---

**Desenvolvido com ❤️ usando as melhores práticas de 2025**
