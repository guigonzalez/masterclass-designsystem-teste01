# 📋 Informações do Repositório Git

## ✅ Repositório Inicializado

O Git foi inicializado com sucesso neste projeto!

---

## 📊 Status Atual

**Branch**: `main`
**Commits**: 1
**Último commit**: `171268b`
**Status**: ✅ Working tree clean

---

## 📝 Commit Inicial

```
commit 171268b642fed44241a2ebc9d0a5827d6b8125c2
Author: guigonzalez <guiperezgo@gmail.com>
Date:   Mon Nov 17 21:52:48 2025 -0300

feat: implementação inicial do Design System

38 arquivos changed, 12,083 insertions(+)
```

---

## 🚀 Próximos Passos com Git

### 1. Conectar com GitHub (Opcional)

#### Criar repositório no GitHub:
1. Acesse https://github.com/new
2. Nome: `design-system` (ou outro de sua escolha)
3. **NÃO** inicialize com README, .gitignore ou licença
4. Clique em "Create repository"

#### Conectar o repositório local:
```bash
# Adicionar remote
git remote add origin https://github.com/SEU-USUARIO/design-system.git

# Verificar remote
git remote -v

# Push inicial
git push -u origin main
```

---

### 2. Criar Branch de Desenvolvimento

```bash
# Criar e mudar para branch develop
git checkout -b develop

# Push da branch develop
git push -u origin develop
```

---

### 3. Workflow Recomendado

#### Para Novos Componentes:
```bash
# Criar branch feature
git checkout -b feature/input-component

# Fazer alterações...
# Adicionar arquivos
git add .

# Commit
git commit -m "feat: add Input component with validation"

# Push
git push -u origin feature/input-component

# No GitHub: criar Pull Request
```

#### Para Correções:
```bash
# Criar branch fix
git checkout -b fix/button-loading-state

# Fazer correções...
git add .
git commit -m "fix: resolve loading state issue in Button"
git push -u origin fix/button-loading-state
```

---

## 📋 Padrões de Commit

Siga o padrão **Conventional Commits**:

### Tipos de Commit:

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Formatação (sem mudanças de código)
- `refactor:` - Refatoração de código
- `test:` - Adicionar/modificar testes
- `chore:` - Manutenção (deps, configs, etc)

### Exemplos:

```bash
# Nova funcionalidade
git commit -m "feat: add Input component with validation"

# Correção de bug
git commit -m "fix: resolve focus state in Button outline variant"

# Documentação
git commit -m "docs: update Button usage examples"

# Testes
git commit -m "test: add edge cases for Button loading state"

# Refatoração
git commit -m "refactor: extract color tokens to separate file"

# Manutenção
git commit -m "chore: update dependencies to latest versions"
```

---

## 🌿 Estrutura de Branches Recomendada

```
main              # Produção (estável)
  └─ develop      # Desenvolvimento (próxima release)
       ├─ feature/button-variants
       ├─ feature/input-component
       ├─ feature/card-component
       └─ fix/accessibility-issues
```

### Fluxo:
1. `feature/*` ou `fix/*` → `develop`
2. `develop` → `main` (quando pronto para release)

---

## 🔖 Tags e Releases

### Criar uma versão:

```bash
# Atualizar version no package.json para 0.1.0

# Criar tag
git tag -a v0.1.0 -m "Release v0.1.0: Initial Design System"

# Push da tag
git push origin v0.1.0
```

### Versioning Semântico:

`MAJOR.MINOR.PATCH` (ex: 1.2.3)

- **MAJOR**: Mudanças incompatíveis na API
- **MINOR**: Nova funcionalidade (compatível)
- **PATCH**: Correção de bugs (compatível)

Exemplos:
- `0.1.0` - Release inicial
- `0.2.0` - Adicionar componente Input
- `0.2.1` - Corrigir bug no Button
- `1.0.0` - Primeira versão estável

---

## 📦 Ignorados pelo Git

O arquivo `.gitignore` já está configurado para ignorar:

```gitignore
# Dependencies
node_modules/

# Build
dist/
dist-ssr/
storybook-static/

# Testing
coverage/

# Environment
.env
.env.local

# IDE
.vscode/
.idea/
.DS_Store

# Logs
*.log
npm-debug.log*
```

---

## 🔍 Comandos Úteis

### Verificar Status:
```bash
git status
git log --oneline --graph --all
```

### Desfazer Mudanças:
```bash
# Desfazer mudanças não staged
git restore <file>

# Desfazer git add
git restore --staged <file>

# Ver diferenças
git diff
```

### Branches:
```bash
# Listar branches
git branch -a

# Criar branch
git checkout -b feature/new-component

# Mudar de branch
git checkout main

# Deletar branch local
git branch -d feature/old-feature

# Deletar branch remota
git push origin --delete feature/old-feature
```

### Atualizar:
```bash
# Atualizar branch atual
git pull

# Atualizar e fazer rebase
git pull --rebase
```

---

## 🤝 Colaboração

### Clonar o Repositório:
```bash
git clone https://github.com/SEU-USUARIO/design-system.git
cd design-system
npm install
```

### Contribuir:
1. Fork o repositório
2. Clone seu fork
3. Crie uma branch: `git checkout -b feature/minha-feature`
4. Commit: `git commit -m "feat: add amazing feature"`
5. Push: `git push origin feature/minha-feature`
6. Abra um Pull Request

---

## 📊 Estatísticas do Repositório

```bash
# Linhas de código
git ls-files | xargs wc -l

# Commits por autor
git shortlog -sn

# Arquivos mais modificados
git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -10

# Tamanho do repositório
git count-objects -vH
```

---

## 🔐 Configuração do Git (Recomendado)

```bash
# Configurar nome e email (se ainda não fez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Configurar editor padrão
git config --global core.editor "code --wait"

# Colorir output
git config --global color.ui auto

# Aliases úteis
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
```

---

## 🚀 GitHub Actions (Futuro)

Criar arquivo `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

---

## 📝 Arquivo .gitattributes (Recomendado)

Criar `.gitattributes`:

```
# Auto detect text files and perform LF normalization
* text=auto

# Denote files that are binary
*.png binary
*.jpg binary
*.ico binary
*.svg binary
```

---

## ✅ Checklist Pré-Push

Antes de fazer push, verifique:

- [ ] Código compila sem erros: `npm run build`
- [ ] Testes passando: `npm run test`
- [ ] TypeScript sem erros: `npm run type-check`
- [ ] Lint sem erros: `npm run lint`
- [ ] Commit message segue padrão
- [ ] Branch correta

---

## 🆘 Problemas Comuns

### Conflitos de Merge:
```bash
# Atualizar main
git checkout main
git pull

# Voltar para sua branch
git checkout feature/minha-feature

# Rebase com main
git rebase main

# Resolver conflitos...
# Depois:
git add .
git rebase --continue
```

### Desfazer Último Commit:
```bash
# Mantendo as mudanças
git reset --soft HEAD~1

# Descartando as mudanças
git reset --hard HEAD~1
```

### Renomear Último Commit:
```bash
git commit --amend -m "nova mensagem"
```

---

**Status Atual**: ✅ Repositório pronto para uso

**Próximo passo recomendado**: Conectar com GitHub e fazer push inicial

```bash
git remote add origin https://github.com/SEU-USUARIO/design-system.git
git push -u origin main
```

---

**Última atualização**: 2025-11-17
