# ✅ Checklist de Validação do Design System

Este arquivo contém instruções para validar que tudo está funcionando corretamente.

---

## 🧪 1. Validar Instalação

### Verificar dependências
```bash
npm install
```

**Resultado esperado:**
- ✅ Todas as dependências instaladas sem erros
- ✅ ~507 pacotes instalados

---

## 🔍 2. Validar TypeScript

```bash
npm run type-check
```

**Resultado esperado:**
- ✅ Nenhum erro de TypeScript
- ✅ Saída limpa (sem mensagens de erro)

---

## 🧪 3. Validar Testes

### Rodar todos os testes
```bash
npm run test -- --run
```

**Resultado esperado:**
```
✓ src/components/ui/button.test.tsx (35 tests)
Test Files  1 passed (1)
Tests  35 passed (35)
```

### Verificar coverage
```bash
npm run test:coverage
```

**Resultado esperado:**
- ✅ Coverage report gerado
- ✅ HTML report em `coverage/index.html`

---

## 📚 4. Validar Storybook

```bash
npm run storybook
```

**Resultado esperado:**
- ✅ Storybook inicia sem erros
- ✅ Acessível em http://localhost:6006
- ✅ Todas as stories carregam

### Verificar no Storybook:

#### Navigation
- [ ] Sidebar com "UI/Button"
- [ ] Docs geradas automaticamente

#### Stories visíveis:
- [ ] Default
- [ ] Secondary
- [ ] Outline
- [ ] Ghost
- [ ] Link
- [ ] Destructive
- [ ] Small / Medium
- [ ] Loading
- [ ] Disabled
- [ ] With Icons
- [ ] All Variants (showcase)

#### Funcionalidades:
- [ ] Controls funcionando (alterar props)
- [ ] Dark mode toggle funcionando
- [ ] Addon A11y mostrando sem erros
- [ ] Docs tab funcionando

---

## 🎨 5. Validar App Demo

```bash
npm run dev
```

**Resultado esperado:**
- ✅ App inicia em http://localhost:5173
- ✅ Página carrega sem erros

### Verificar na página:

#### Visual:
- [ ] Título "Design System"
- [ ] Botão de toggle Light/Dark
- [ ] Todas as seções de botões visíveis:
  - Variantes Padrão
  - Variantes Destrutivas
  - Tamanhos
  - Estados
  - Com Ícones

#### Interatividade:
- [ ] Botões respondem ao hover
- [ ] Botões respondem ao click
- [ ] Toggle dark mode funciona
- [ ] Spinners aparecem nos botões loading
- [ ] Botões disabled não respondem

---

## 🌓 6. Validar Dark Mode

### No App Demo:
1. Clique no botão "Dark" no canto superior direito
2. Verificar:
   - [ ] Background muda para escuro
   - [ ] Texto muda para claro
   - [ ] Botões ajustam cores
   - [ ] Contraste adequado

### No Storybook:
1. Clique no ícone de sol/lua na toolbar
2. Verificar:
   - [ ] Tema muda
   - [ ] Todos os componentes ajustam
   - [ ] Addon A11y não mostra erros de contraste

---

## 🎯 7. Validar Build

```bash
npm run build
```

**Resultado esperado:**
```
✓ built in XXXms
dist/index.html                   X.XX kB
dist/assets/index-XXXXX.css      XX.XX kB
dist/assets/index-XXXXX.js      XXX.XX kB
```

### Preview do build
```bash
npm run preview
```

**Resultado esperado:**
- ✅ App funciona igual ao dev mode
- ✅ Sem erros no console

---

## 📝 8. Validar Código

### ESLint
```bash
npm run lint
```

**Resultado esperado:**
- ✅ Nenhum erro (pode ter warnings)

### Prettier
```bash
npm run format
```

**Resultado esperado:**
- ✅ Arquivos formatados
- ✅ Mensagem de sucesso

---

## ♿ 9. Validar Acessibilidade

### No Storybook (Addon A11y):

1. Abrir qualquer story do Button
2. Ir na tab "Accessibility"
3. Verificar:
   - [ ] "Passes" em verde
   - [ ] Nenhuma violação crítica
   - [ ] Color contrast OK

### Manualmente:

#### Navegação por teclado:
- [ ] Tab navega entre botões
- [ ] Enter ativa o botão
- [ ] Space ativa o botão
- [ ] Focus visible (anel azul)

#### Screen reader (opcional):
- [ ] Botões anunciam corretamente
- [ ] Estados disabled anunciados
- [ ] Loading state anunciado

---

## 📦 10. Validar Estrutura de Arquivos

```bash
ls -la
```

### Verificar que existem:
- [ ] `.storybook/` (configuração)
- [ ] `.vscode/` (settings)
- [ ] `docs/` (documentação MDX)
- [ ] `src/` (código fonte)
  - [ ] `src/components/ui/` (componentes)
  - [ ] `src/lib/` (utilitários)
  - [ ] `src/tokens/` (design tokens)
  - [ ] `src/styles/` (CSS global)
- [ ] `tests/` (setup de testes)
- [ ] `node_modules/` (dependências)
- [ ] Arquivos de config (package.json, tsconfig.json, etc)
- [ ] Documentação (README.md, QUICKSTART.md, etc)

---

## 🔬 11. Testes Manuais do Button

### Variantes:
- [ ] Default - fundo escuro
- [ ] Secondary - fundo cinza claro
- [ ] Outline - borda preta
- [ ] Ghost - sem fundo
- [ ] Link - estilo de link

### Tamanhos:
- [ ] Small - altura 36px
- [ ] Medium - altura 40px

### Estados:
- [ ] Normal - clicável
- [ ] Hover - muda cor
- [ ] Focus - anel azul
- [ ] Disabled - opacidade 50%, não clicável
- [ ] Loading - spinner girando, não clicável

### Destructive:
- [ ] Default destructive - fundo vermelho
- [ ] Outline destructive - borda vermelha
- [ ] Ghost destructive - texto vermelho

### Com ícones:
- [ ] Ícone à esquerda
- [ ] Ícone à direita
- [ ] Só ícone

---

## 📊 12. Métricas de Sucesso

### Code Quality:
- ✅ 0 erros TypeScript
- ✅ 0 erros ESLint críticos
- ✅ 100% formatado com Prettier

### Testes:
- ✅ 35/35 testes passando (100%)
- ✅ Coverage > 80%

### Documentação:
- ✅ 20+ stories no Storybook
- ✅ Autodocs funcionando
- ✅ Exemplos de código

### Acessibilidade:
- ✅ 0 violações WCAG 2.1 Nível AA
- ✅ Navegação por teclado OK
- ✅ Color contrast OK

### Performance:
- ✅ Build < 5s
- ✅ Bundle size razoável
- ✅ HMR instantâneo no dev

---

## ✅ Checklist Final

Antes de considerar o projeto completo, verifique:

### Setup:
- [ ] npm install funcionou
- [ ] TypeScript sem erros
- [ ] ESLint configurado

### Desenvolvimento:
- [ ] npm run dev funciona
- [ ] npm run storybook funciona
- [ ] HMR funcionando (mudanças refletem instantaneamente)

### Testes:
- [ ] Todos os 35 testes passando
- [ ] npm run test:ui funciona
- [ ] Coverage gerado

### Build:
- [ ] npm run build funciona
- [ ] npm run preview funciona
- [ ] Sem erros no console

### Documentação:
- [ ] README.md completo
- [ ] QUICKSTART.md claro
- [ ] Storybook com todas as stories
- [ ] Exemplos de código funcionando

### Componentes:
- [ ] Button implementado completamente
- [ ] Todas as variantes funcionando
- [ ] Dark mode funcionando
- [ ] Acessibilidade OK

### Design Tokens:
- [ ] Colors definidos
- [ ] Spacing definido
- [ ] Typography definida
- [ ] CSS Variables funcionando

---

## 🎉 Validação Completa

Se todos os itens acima estão ✅, seu Design System está:

- ✅ **Funcionando** - Tudo operacional
- ✅ **Testado** - 100% dos testes passando
- ✅ **Documentado** - Storybook + MDX completo
- ✅ **Acessível** - WCAG 2.1 conforme
- ✅ **Type-Safe** - TypeScript strict
- ✅ **Profissional** - Pronto para produção

---

**Status: 🟢 PRONTO PARA USO**

Data da validação: ___________

Validado por: ___________

---

## 🆘 Troubleshooting

### Problema: npm install falha
**Solução:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: TypeScript errors
**Solução:**
```bash
npm run type-check
# Verificar erros e corrigir
```

### Problema: Testes falhando
**Solução:**
```bash
npm run test:ui
# Usar interface para debugar
```

### Problema: Storybook não inicia
**Solução:**
```bash
rm -rf node_modules/.cache
npm run storybook
```

### Problema: Build falha
**Solução:**
```bash
npm run type-check  # Verificar erros TS
npm run lint        # Verificar erros ESLint
npm run build       # Tentar novamente
```

---

**Última atualização**: 2025-11-17
