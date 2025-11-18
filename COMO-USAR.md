# 🎯 Como Usar Este Design System

## 🚀 Início Rápido (3 comandos)

```bash
# 1. Instalar (já feito! ✅)
npm install

# 2. Abrir Storybook (Documentação Interativa)
npm run storybook

# 3. Ou rodar a aplicação demo
npm run dev
```

---

## 📚 Opções de Visualização

### Opção 1: Storybook (Recomendado)
**Melhor para**: Explorar componentes, ver todas as variantes, testar acessibilidade

```bash
npm run storybook
```

Abra: http://localhost:6006

**O que você vai ver:**
- 📖 Todas as variantes do Button
- 🎨 Exemplos interativos
- ♿ Validação de acessibilidade
- 🌓 Teste de dark mode
- 📝 Documentação automática
- 🧪 Props controls

### Opção 2: App Demo
**Melhor para**: Ver os componentes em uma aplicação real

```bash
npm run dev
```

Abra: http://localhost:5173

**O que você vai ver:**
- Uma página com showcase de todos os botões
- Toggle de dark mode
- Exemplos práticos de uso

---

## 🧪 Testes

### Rodar todos os testes
```bash
npm run test
```

### Modo interativo (recomendado)
```bash
npm run test:ui
```

### Com coverage
```bash
npm run test:coverage
```

**Status atual**: ✅ 35/35 testes passando

---

## 🎨 Usando o Componente Button

### 1. Importar

```tsx
import { Button } from '@/components/ui/button'
```

### 2. Uso Básico

```tsx
<Button>Click me</Button>
```

### 3. Variantes

```tsx
// Primary (padrão)
<Button variant="default">Save</Button>

// Secondary
<Button variant="secondary">Cancel</Button>

// Outline
<Button variant="outline">Edit</Button>

// Ghost (sem background)
<Button variant="ghost">Close</Button>

// Link (estilo de link)
<Button variant="link">Learn more</Button>
```

### 4. Tamanhos

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
```

### 5. Estados

```tsx
// Loading
<Button loading>Processing...</Button>

// Disabled
<Button disabled>Not available</Button>

// Destructive (para ações perigosas)
<Button destructive>Delete Account</Button>
<Button variant="outline" destructive>Remove</Button>
```

### 6. Com Ícones

```tsx
import { Mail, Trash, Plus } from 'lucide-react'

// Ícone + Texto
<Button>
  <Mail className="h-4 w-4" />
  Send Email
</Button>

// Só ícone
<Button size="sm" variant="ghost">
  <Trash className="h-4 w-4" />
</Button>

// Ícone à direita
<Button>
  Add Item
  <Plus className="h-4 w-4" />
</Button>
```

### 7. Exemplos Completos

#### Formulário
```tsx
function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    // ... enviar formulário
    setLoading(false)
  }

  return (
    <div className="flex gap-4">
      <Button variant="outline">Cancel</Button>
      <Button loading={loading} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  )
}
```

#### Ação Destrutiva
```tsx
function DeleteDialog() {
  return (
    <div className="flex gap-4">
      <Button variant="outline">Cancel</Button>
      <Button destructive>
        <Trash className="h-4 w-4" />
        Delete Forever
      </Button>
    </div>
  )
}
```

#### Menu de Ações
```tsx
function ActionMenu() {
  return (
    <div className="flex gap-2">
      <Button size="sm" variant="ghost">
        <Edit className="h-4 w-4" />
      </Button>
      <Button size="sm" variant="ghost">
        <Copy className="h-4 w-4" />
      </Button>
      <Button size="sm" variant="ghost">
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  )
}
```

---

## 🌓 Dark Mode

### Ativar Dark Mode

```tsx
// Adicionar classe 'dark' no HTML
document.documentElement.classList.add('dark')

// Remover
document.documentElement.classList.remove('dark')

// Toggle
document.documentElement.classList.toggle('dark')
```

### Exemplo com React

```tsx
function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <Button variant="outline" onClick={toggleTheme}>
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </Button>
  )
}
```

---

## 🎨 Personalizando Cores

### Editar Tema

Arquivo: `src/styles/globals.css`

```css
:root {
  /* Customizar cores em HSL */
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;

  /* ... outras cores */
}

.dark {
  /* Cores para dark mode */
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;

  /* ... outras cores */
}
```

**Por que HSL?**
- Fácil ajustar luminosidade e saturação
- Melhor para criar variações de cores
- Permite temas dinâmicos

---

## 📦 Estrutura do Código

### Onde encontrar cada coisa:

```
src/
├── components/ui/
│   └── button.tsx              ← Componente Button
│
├── lib/
│   └── utils.ts                ← Função cn() para classes
│
├── tokens/
│   ├── colors.ts               ← Design tokens de cores
│   ├── spacing.ts              ← Espaçamentos
│   ├── typography.ts           ← Tipografia
│   └── ...                     ← Outros tokens
│
└── styles/
    └── globals.css             ← CSS global + variáveis
```

---

## 🛠️ Comandos Disponíveis

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Inicia app de desenvolvimento |
| `npm run build` | Build para produção |
| `npm run preview` | Preview do build |
| `npm run storybook` | Abre Storybook |
| `npm run build-storybook` | Build do Storybook |
| `npm run test` | Roda testes |
| `npm run test:ui` | Testes com interface |
| `npm run test:coverage` | Coverage dos testes |
| `npm run lint` | Verifica erros no código |
| `npm run format` | Formata código |
| `npm run type-check` | Verifica TypeScript |

---

## 📝 Dicas e Boas Práticas

### 1. Use TypeScript para autocomplete

```tsx
// ✅ Bom - TypeScript vai sugerir as props
<Button
  variant="outline"  // autocomplete!
  size="sm"          // autocomplete!
  destructive={true} // autocomplete!
>
  Click me
</Button>
```

### 2. Combine classes com cn()

```tsx
import { cn } from '@/lib/utils'

<Button className={cn(
  "w-full",
  isActive && "ring-2 ring-offset-2"
)}>
  Button
</Button>
```

### 3. Use o asChild para composição

```tsx
// Renderizar Button como um Link do Next.js
<Button asChild>
  <Link href="/about">About</Link>
</Button>
```

### 4. Evite estados conflitantes

```tsx
// ❌ Ruim
<Button loading disabled>  // redundante

// ✅ Bom
<Button loading>  // loading já desabilita
```

---

## 🎯 Próximos Passos

### Explore o Storybook
```bash
npm run storybook
```

### Leia a documentação completa
- `README.md` - Overview completo
- `QUICKSTART.md` - Guia rápido
- `SUMMARY.md` - Resumo do projeto
- `docs/getting-started.mdx` - Tutorial detalhado

### Veja os testes
Arquivo: `src/components/ui/button.test.tsx`
- 35 testes cobrindo todos os casos de uso

### Adicione mais componentes
Use shadcn/ui CLI:
```bash
npx shadcn@latest add [component-name]
```

---

## ❓ Precisa de Ajuda?

1. ✅ Verifique o Storybook (documentação interativa)
2. ✅ Leia os testes para exemplos
3. ✅ Veja o `App.tsx` para uso real
4. ✅ Consulte a documentação do shadcn/ui

---

**Divirta-se construindo! 🚀**
