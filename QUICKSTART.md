# 🚀 Quick Start Guide

Guia rápido para começar a usar o Design System.

## 1️⃣ Instalar Dependências

```bash
npm install
```

## 2️⃣ Iniciar Desenvolvimento

Escolha uma das opções:

### Opção A: App Demo
```bash
npm run dev
```
Abra http://localhost:5173

### Opção B: Storybook (Recomendado)
```bash
npm run storybook
```
Abra http://localhost:6006

## 3️⃣ Usar Componentes

```tsx
import { Button } from '@/components/ui/button'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button variant="outline">Outline</Button>
      <Button destructive>Delete</Button>
    </div>
  )
}
```

## 4️⃣ Rodar Testes

```bash
npm run test
```

## 📖 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia app de desenvolvimento |
| `npm run storybook` | Abre documentação interativa |
| `npm run test` | Roda testes |
| `npm run test:ui` | Testes com UI |
| `npm run build` | Build para produção |
| `npm run lint` | Verifica código |
| `npm run format` | Formata código |

## 🎨 Componentes Disponíveis

### Button

```tsx
// Variantes
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>

// Estados
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button destructive>Delete</Button>

// Com ícones
<Button>
  <Mail className="h-4 w-4" />
  Send Email
</Button>
```

## 🌓 Dark Mode

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark')
```

## 📚 Próximos Passos

1. Explore o Storybook para ver todos os componentes
2. Leia o README.md para documentação completa
3. Veja os testes em `src/components/ui/button.test.tsx` para exemplos

---

**Pronto para começar! 🎉**
