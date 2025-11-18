# 🚀 Configuração do GitHub Pages

## ✅ Workflows Criados com Sucesso!

Os seguintes workflows do GitHub Actions foram criados e enviados para o repositório:

1. **`.github/workflows/ci.yml`** - CI/CD Pipeline
   - Testes automatizados
   - Type checking
   - Linting
   - Build

2. **`.github/workflows/deploy-storybook.yml`** - Deploy do Storybook
   - Build automático do Storybook
   - Deploy para GitHub Pages
   - Executa a cada push na branch main

---

## 📋 Passos para Ativar o GitHub Pages

### Passo 1: Acessar o Repositório no GitHub

Abra no navegador:
```
https://github.com/guigonzalez/masterclass-designsystem-teste01
```

### Passo 2: Ir para Settings

1. Clique na aba **"Settings"** (no menu superior do repositório)
2. No menu lateral esquerdo, procure a seção **"Code and automation"**
3. Clique em **"Pages"**

### Passo 3: Configurar GitHub Pages

Na página de GitHub Pages:

1. **Source (Origem)**:
   - Selecione: **"GitHub Actions"**
   - ⚠️ NÃO selecione "Deploy from a branch"

2. Clique em **"Save"** (se necessário)

### Passo 4: Aguardar o Deploy

1. Vá para a aba **"Actions"** do repositório
2. Você verá o workflow **"Deploy Storybook to GitHub Pages"** rodando
3. Aguarde a conclusão (leva ~2-3 minutos)
4. Quando aparecer um ✅ verde, o deploy foi concluído!

---

## 🔗 Acessar o Storybook

Após o deploy, seu Storybook estará disponível em:

```
https://guigonzalez.github.io/masterclass-designsystem-teste01/
```

---

## ✅ Verificar se Funcionou

### No GitHub:

1. Acesse: `https://github.com/guigonzalez/masterclass-designsystem-teste01/actions`
2. Veja se o workflow **"Deploy Storybook to GitHub Pages"** está com ✅ verde
3. Clique no workflow para ver os detalhes

### Acessando o Site:

1. Abra: `https://guigonzalez.github.io/masterclass-designsystem-teste01/`
2. Você deve ver o Storybook carregando
3. Navegue pelas stories do Button

---

## 🔄 Como Funciona Agora

### Automático:

Sempre que você fizer `git push` para a branch `main`:

1. ✅ O workflow de **CI** vai rodar:
   - Testes
   - Type check
   - Lint
   - Build

2. ✅ O workflow de **Deploy** vai rodar:
   - Build do Storybook
   - Deploy para GitHub Pages
   - Atualização automática do site

### Manual:

Você também pode disparar o deploy manualmente:

1. Vá para: `https://github.com/guigonzalez/masterclass-designsystem-teste01/actions`
2. Selecione **"Deploy Storybook to GitHub Pages"**
3. Clique em **"Run workflow"**
4. Selecione a branch `main`
5. Clique em **"Run workflow"** novamente

---

## 📊 Status dos Workflows

### CI (Integração Contínua)

**Quando executa:**
- Push para `main` ou `develop`
- Pull Requests para `main` ou `develop`

**O que faz:**
- ✅ Type check (`npm run type-check`)
- ✅ Lint (`npm run lint`)
- ✅ Tests (`npm run test`)
- ✅ Build (`npm run build`)

### Deploy Storybook

**Quando executa:**
- Push para `main`
- Manualmente via GitHub Actions

**O que faz:**
- ✅ Build Storybook (`npm run build-storybook`)
- ✅ Upload para GitHub Pages
- ✅ Deploy automático

---

## 🔧 Troubleshooting

### Problema: Workflow não aparece

**Solução:**
1. Verifique se fez push: `git push origin main`
2. Vá em Actions e veja se os workflows aparecem
3. Se não, aguarde alguns segundos e atualize a página

### Problema: Deploy falha

**Possíveis causas:**

1. **GitHub Pages não habilitado**
   - Vá em Settings → Pages
   - Selecione "GitHub Actions" como source

2. **Permissões**
   - Vá em Settings → Actions → General
   - Em "Workflow permissions"
   - Selecione "Read and write permissions"
   - Marque "Allow GitHub Actions to create and approve pull requests"
   - Clique em "Save"

3. **Build do Storybook falha**
   - Vá em Actions
   - Clique no workflow que falhou
   - Veja os logs para identificar o erro

### Problema: Site não carrega

**Soluções:**

1. Aguarde 2-3 minutos após o deploy
2. Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
3. Tente em modo anônimo
4. Verifique se a URL está correta:
   ```
   https://guigonzalez.github.io/masterclass-designsystem-teste01/
   ```

---

## 🎨 Personalizar

### Adicionar Badge ao README

Adicione no topo do `README.md`:

```markdown
# Design System

[![Deploy Storybook](https://github.com/guigonzalez/masterclass-designsystem-teste01/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/guigonzalez/masterclass-designsystem-teste01/actions/workflows/deploy-storybook.yml)
[![CI](https://github.com/guigonzalez/masterclass-designsystem-teste01/actions/workflows/ci.yml/badge.svg)](https://github.com/guigonzalez/masterclass-designsystem-teste01/actions/workflows/ci.yml)

🚀 **[Ver Storybook ao vivo](https://guigonzalez.github.io/masterclass-designsystem-teste01/)**
```

### Modificar Workflows

Os arquivos estão em:
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-storybook.yml`

Você pode editá-los para adicionar mais steps ou modificar o comportamento.

---

## 📚 Recursos

### GitHub Actions
- [Documentação oficial](https://docs.github.com/en/actions)
- [Workflow syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

### GitHub Pages
- [Documentação oficial](https://docs.github.com/en/pages)
- [Configuração](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

---

## ✅ Checklist Final

Antes de considerar configurado:

- [ ] Push feito para o GitHub
- [ ] GitHub Pages habilitado (Settings → Pages → Source: GitHub Actions)
- [ ] Workflow "Deploy Storybook" executou com sucesso
- [ ] Site acessível em: https://guigonzalez.github.io/masterclass-designsystem-teste01/
- [ ] Stories do Button aparecem no Storybook online
- [ ] Dark mode funciona no Storybook publicado

---

## 🎉 Próximos Passos

Após configurar:

1. ✅ Compartilhe o link do Storybook com sua equipe
2. ✅ Adicione badges ao README
3. ✅ Configure notificações de deploy
4. ✅ Adicione mais componentes e veja o deploy automático

---

## 📞 Links Importantes

- **Repositório**: https://github.com/guigonzalez/masterclass-designsystem-teste01
- **Actions**: https://github.com/guigonzalez/masterclass-designsystem-teste01/actions
- **Settings**: https://github.com/guigonzalez/masterclass-designsystem-teste01/settings
- **Storybook (após deploy)**: https://guigonzalez.github.io/masterclass-designsystem-teste01/

---

**Status**: ⏳ Aguardando configuração manual no GitHub

**Última atualização**: 2025-11-17
