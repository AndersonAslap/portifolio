# Portfólio — Anderson Paiva

Site estático (HTML + Tailwind CSS v4 + JS puro), com troca de idioma PT / EN / ES.

## Rodar localmente

```bash
npm install          # só na primeira vez
npm run build        # gera assets/css/styles.css
npm run serve        # http://localhost:4173
```

Durante a edição, use `npm run dev` para recompilar o CSS automaticamente.

## Publicar no GitHub Pages

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`): a cada push na branch `main`, o CSS é compilado e o site é publicado.

1. Crie um repositório no GitHub.
   - `seu-usuario.github.io` → o site fica em `https://seu-usuario.github.io/`
   - qualquer outro nome (ex.: `portfolio`) → `https://seu-usuario.github.io/portfolio/`
2. Envie o projeto:
   ```bash
   git init
   git add .
   git commit -m "Portfólio inicial"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/NOME-DO-REPO.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Acompanhe em **Actions**; ao terminar, o link aparece no job `deploy`.

Depois de publicado, troque `[URL DO SITE — substituir]` nas tags `og:url` e `og:image` do `index.html` pela URL final (com `/` no fim), para a prévia do link aparecer bem no LinkedIn e no WhatsApp.

## Onde editar

- Textos em português: `index.html`
- Traduções EN / ES: `assets/js/main.js` (objeto `dict`)
- Cores, fontes e componentes: `src/input.css`
- Foto: `images/profile.jpeg`
