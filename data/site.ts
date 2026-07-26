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
  kind: "whatsapp" | "instagram" | "email";
  label: string;
  href: string;
  external?: boolean;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim();
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

const contacts: Contact[] = [];

if (whatsappNumber) {
  contacts.push({
    kind: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Olá, Bruna! Conheci a Sirius pelo site e gostaria de conversar sobre um projeto.",
    )}`,
    external: true,
  });
}

if (instagramUrl) {
  contacts.push({
    kind: "instagram",
    label: "Instagram",
    href: instagramUrl,
    external: true,
  });
}

if (contactEmail) {
  contacts.push({
    kind: "email",
    label: contactEmail,
    href: `mailto:${contactEmail}`,
  });
}

export const siteConfig = {
  name: "Agência Sirius",
  shortName: "Sirius",
  url: siteUrl,
  locale: "pt_BR",
  description:
    "Agência feminina de social media, direção criativa e produção de conteúdo.",
  contacts,
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
    profileImage: "/brand/logo-sirius-laranja.png",
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
  {
    title: "Social media",
    text: "Gestão da presença digital com constância, intenção e uma rotina que mantém a marca viva.",
  },
  {
    title: "Direção criativa",
    text: "Uma linha visual e narrativa clara para orientar campanhas, conteúdos e cada escolha da marca.",
  },
  {
    title: "Planejamento",
    text: "Temas, formatos e calendário organizados para o conteúdo fazer sentido como um todo.",
  },
  {
    title: "Design para redes",
    text: "Peças que traduzem a identidade da marca e criam reconhecimento em cada publicação.",
  },
  {
    title: "Produção de conteúdo",
    text: "Da ideia à entrega, conteúdos pensados para comunicar com naturalidade e personalidade.",
  },
  {
    title: "Fotografia e vídeo",
    text: "Imagens reais da marca, dos produtos e dos bastidores com olhar criativo e direção.",
  },
];
