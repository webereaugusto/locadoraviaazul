# 🚀 Guia de Publicação - Via Azul

## ✅ Status do Projeto

- ✅ Build funcionando (47 módulos)
- ✅ `vercel.json` configurado
- ✅ Commit inicial feito
- ✅ Pronto para publicação

## 📋 Passo a Passo para Publicar

### 1. Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `locadoraviaazul`
3. Descrição: "Site da Via Azul Locadora de Veículos"
4. Deixe como **Público** ou **Privado** (sua escolha)
5. **NÃO** marque "Add a README file" (já temos)
6. Clique em **"Create repository"**

### 2. Conectar e Fazer Push

Execute no terminal (já está no diretório correto):

```bash
git remote add origin https://github.com/SEU_USUARIO/locadoraviaazul.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub!**

### 3. Publicar no Vercel

1. Acesse: https://vercel.com/new
2. Clique em **"Import Git Repository"**
3. Selecione o repositório `locadoraviaazul`
4. O Vercel detectará automaticamente:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **"Deploy"**

### 4. Configurações Automáticas

O Vercel já está configurado com:
- ✅ Redirects para SPA (Single Page Application)
- ✅ Build otimizado
- ✅ Deploy automático a cada push

## 🎯 Próximos Passos

Após o deploy:
1. O site estará disponível em: `https://locadoraviaazul.vercel.app`
2. Você pode adicionar um domínio customizado no Vercel
3. Cada push no GitHub fará deploy automático

## 🔧 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Ver status do Git
git status

# Adicionar alterações
git add .
git commit -m "Sua mensagem"
git push
```

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Push feito para o GitHub
- [ ] Projeto importado no Vercel
- [ ] Deploy realizado com sucesso
- [ ] Site funcionando sem tela branca

---

**Localização do projeto:** `F:\TEMP\locadoraviaazul`

