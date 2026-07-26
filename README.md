# Agência Sirius

Site one-page mobile-first da Agência Sirius, construído com Next.js,
TypeScript e App Router. A experiência prioriza a apresentação, o portfólio em
stories, a Bruna e seus serviços, e o contato.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Para validar a versão de produção:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Conteúdo e contatos

Textos, serviços, projetos e contatos ficam centralizados em `data/site.ts`.
Cada serviço é um objeto com `title` e `description`. O array `contacts` está
vazio porque nenhum canal oficial foi fornecido. Adicione somente links
confirmados.

As imagens atuais são referências visuais da Sirius e aparecem com a indicação
“Carregar projeto”. A estrutura de `projects` está pronta para receber
trabalhos reais sem alterar os componentes.

### Fotos e vídeos nos stories

Os stories usam o array `projects` em `data/site.ts` e são exibidos em duas
filas contínuas: uma para a esquerda e outra para a direita. Eles não abrem
modal nem redirecionam para outra galeria. Fotos funcionam apenas com `src` e
`alt`. Para vídeo, coloque o arquivo em `public/portfolio/` e adicione
`kind: "video"`; `poster` é opcional:

```ts
{
  src: "/portfolio/bastidores.mp4",
  poster: "/portfolio/bastidores-capa.webp",
  alt: "Bastidores de uma produção da Sirius",
  kind: "video",
}
```

Os vídeos iniciam automaticamente, sem som, em looping e no próprio card.
Cada objeto adicionado a `projects` entra automaticamente na sequência do
portfólio com seu próprio `handle`, `profileImage`, título e mídias. O
`@agenciasirius` atual é provisório e deve ser trocado pelo arroba oficial.

## Logo

A logo principal com fundo transparente está em
`public/brand/logo-sirius-principal.png` e é usada no cabeçalho, no rodapé e
nos dados estruturados do site.

## URL de produção

Copie `.env.example` para `.env.local` e informe o domínio real:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

Essa variável alimenta canonical, Open Graph, JSON-LD, sitemap e robots.

## Publicar na Vercel

1. Envie a pasta para um repositório Git.
2. Importe o repositório na Vercel.
3. Cadastre `NEXT_PUBLIC_SITE_URL` com o domínio final.
4. Use `npm run build` como comando de build.
5. Publique e confirme canonical, `/robots.txt` e `/sitemap.xml`.

## Auditoria visual

As capturas verificadas estão em `screenshots/`, incluindo 390, 768, 1366,
1440 e 1920 px, além de enquadramentos do portfólio e da fotografia da Bruna.
