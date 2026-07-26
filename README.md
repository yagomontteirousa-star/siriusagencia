# Agência Sirius

Site one-page da Agência Sirius, construído com Next.js, TypeScript e App
Router. A experiência é dividida em quatro momentos: apresentação, portfólio,
Bruna/serviços e contato.

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
Os contatos são montados a partir das variáveis abaixo porque nenhum canal
oficial foi fornecido:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/seu-perfil
NEXT_PUBLIC_CONTACT_EMAIL=contato@seu-dominio.com.br
```

Sem `NEXT_PUBLIC_WHATSAPP_NUMBER`, o botão flutuante permanece visível em
estado pendente e não cria um link falso. Adicione somente dados confirmados.

O único trabalho disponível nos materiais originais é a identidade da própria
Sirius. A estrutura de `projects` está pronta para receber projetos reais de
clientes sem alterar os componentes.

### Fotos e vídeos nos stories

Os stories usam o array `projects` em `data/site.ts`. Fotos funcionam apenas
com `src` e `alt`. Para vídeo, coloque o arquivo em `public/portfolio/` e
adicione `kind: "video"`; `poster` é opcional:

```ts
{
  src: "/portfolio/bastidores.mp4",
  poster: "/portfolio/bastidores-capa.webp",
  alt: "Bastidores de uma produção da Sirius",
  kind: "video",
}
```

Cada objeto adicionado a `projects` entra automaticamente na sequência do
portfólio com seu próprio `handle`, `profileImage`, título e mídias. O
`@agenciasirius` atual é somente um texto visual provisório e deve ser trocado
pelo arroba oficial antes da inclusão dos trabalhos reais. A assinatura
principal usa a versão laranja derivada do arquivo de marca número 6.

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
