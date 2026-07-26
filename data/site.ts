export type ProjectImage = {
  src: string;
  alt: string;
  kind?: "image" | "video";
  poster?: string;
  fit?: "cover" | "contain";
  client?: string;
  label?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  handle: string;
  profileImage: string;
  images: ProjectImage[];
};

export type Contact = {
  label: string;
  href: string;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const siteConfig = {
  name: "Agência Sirius",
  shortName: "Sirius",
  url: siteUrl,
  locale: "pt_BR",
  description:
    "Agência feminina de social media, direção criativa e produção de conteúdo.",
  contacts: [] as Contact[],
  navigation: [
    { label: "Trabalhos", href: "#trabalhos" },
    { label: "Sirius", href: "#sirius" },
    { label: "Contato", href: "#contato" },
  ],
};

export const projects: Project[] = [
  {
    slug: "identidade-sirius",
    title: "Identidade Sirius",
    category: "Sistema visual da marca",
    description:
      "Exploração cromática da identidade Sirius a partir dos materiais oficiais fornecidos pela marca.",
    handle: "@agenciasirius",
    profileImage: "/brand/logo-sirius-branca.png",
    images: [
      {
        src: "/portfolio/sirius-01.webp",
        alt: "Logo Sirius em azul-petróleo e laranja sobre fundo claro",
      },
      {
        src: "/portfolio/sirius-02.webp",
        alt: "Logo Sirius branco aplicado sobre fundo laranja",
      },
      {
        src: "/portfolio/sirius-03.webp",
        alt: "Logo Sirius laranja e azul-petróleo sobre fundo claro",
      },
      {
        src: "/portfolio/sirius-04.webp",
        alt: "Logo Sirius branco e laranja aplicado sobre fundo azul-petróleo",
      },
      {
        src: "/portfolio/sirius-05.webp",
        alt: "Logo Sirius laranja e branco aplicado sobre fundo azul-petróleo",
      },
      {
        src: "/portfolio/sirius-06.webp",
        alt: "Logo Sirius branco aplicado sobre fundo azul-petróleo",
      },
      {
        src: "/portfolio/sirius-07.webp",
        alt: "Logo Sirius branco e azul-petróleo aplicado sobre fundo laranja",
      },
    ],
  },
];

export const services = [
  "Social media",
  "Direção criativa",
  "Planejamento de conteúdo",
  "Design para redes sociais",
  "Produção de conteúdo",
  "Fotografia e vídeo",
];

export const method = [
  {
    step: "01",
    title: "Imersão",
    text: "A marca, o momento e o que precisa ser reconhecido.",
  },
  {
    step: "02",
    title: "Direção",
    text: "Uma linha visual e narrativa para orientar cada decisão.",
  },
  {
    step: "03",
    title: "Criação",
    text: "Conteúdo pensado como conjunto, não como peças soltas.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    text: "Consistência para a presença continuar viva e coerente.",
  },
];
