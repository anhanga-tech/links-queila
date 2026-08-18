export type LinkKind = "whatsapp" | "external" | "email" | "anchor";
export type IconName =
  | "brain"
  | "tarot-cards"
  | "whatsapp"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "email"
  | "profile";

export interface SiteLink {
  id: string;
  label: string;
  description: string;
  kind: LinkKind;
  icon: IconName;
  href?: string;
  message?: string;
  featured?: boolean;
}

export interface SiteConfig {
  isProductionReady: boolean;
  profile: {
    name: string;
    professionalTitle: string;
    eyebrow: string;
    introduction: string;
    about: string;
    portraitSrc: string;
    portraitAlt: string;
  };
  contact: {
    whatsappNumber: string;
    email: string;
  };
  services: SiteLink[];
  otherLinks: SiteLink[];
  location?: { label: string; note: string; href: string };
  seo: { title: string; description: string; canonical: string };
}

// Mantenha false até revisar os dados profissionais e preencher o que ainda falta.
export const siteConfig: SiteConfig = {
  isProductionReady: false,
  profile: {
    name: "Queila de Oliveira",
    professionalTitle: "Psicanalista e taróloga",
    eyebrow: "Psicanálise · Tarô · Autoconhecimento",
    introduction:
      "Ajudo pessoas em seu processo de autoconhecimento por meio da psicanálise e do tarô.",
    about:
      "Sou taróloga e psicanalista. Meu trabalho é voltado ao autoconhecimento e à reflexão sobre os caminhos, escolhas e ciclos de cada pessoa.",
    portraitSrc: "/queila-de-oliveira.jpg",
    portraitAlt: "Queila de Oliveira",
  },
  contact: {
    whatsappNumber: "5511988093689",
    email: "queiladeoliveirar@gmail.com",
  },
  services: [
    {
      id: "psicanalise",
      label: "Agendar psicanálise",
      description: "Converse sobre o acompanhamento",
      kind: "whatsapp",
      icon: "brain",
      message: "Olá, gostaria de informações sobre o atendimento de psicanálise.",
      featured: true,
    },
    {
      id: "taro",
      label: "Consultar o tarô",
      description: "Orientação para escolhas e ciclos",
      kind: "whatsapp",
      icon: "tarot-cards",
      message: "Olá, gostaria de informações sobre uma consulta de tarô.",
      featured: true,
    },
  ],
  otherLinks: [
    {
      id: "whatsapp",
      label: "Falar no WhatsApp",
      description: "Tire dúvidas antes de escolher",
      kind: "whatsapp",
      icon: "whatsapp",
      message: "Olá, encontrei seu perfil e gostaria de saber mais sobre os atendimentos.",
    },
    {
      id: "instagram",
      label: "Instagram",
      description: "Conteúdos e reflexões",
      kind: "external",
      icon: "instagram",
      href: "https://www.instagram.com/queiladeoliveirar",
    },
    {
      id: "youtube",
      label: "YouTube",
      description: "Vídeos de Queila de Oliveira",
      kind: "external",
      icon: "youtube",
      href: "https://www.youtube.com/@queiladeoliveirar",
    },
    {
      id: "tiktok",
      label: "TikTok",
      description: "Acompanhe @queiladeoliveirar",
      kind: "external",
      icon: "tiktok",
      href: "https://www.tiktok.com/@queiladeoliveirar",
    },
    {
      id: "email",
      label: "E-mail",
      description: "queiladeoliveirar@gmail.com",
      kind: "email",
      icon: "email",
      href: "mailto:queiladeoliveirar@gmail.com",
    },
    {
      id: "sobre",
      label: "Sobre a profissional",
      description: "Conheça a abordagem de atendimento",
      kind: "anchor",
      icon: "profile",
      href: "#sobre",
    },
  ],
  seo: {
    title: "Queila de Oliveira | Psicanálise e Tarô",
    description:
      "Psicanálise, tarô e autoconhecimento com Queila de Oliveira. Entre em contato e conheça os atendimentos.",
    canonical: "https://deoliveirar.com",
  },
};

export function linkHref(link: SiteLink): string {
  if (link.kind === "whatsapp") {
    const message = encodeURIComponent(link.message ?? "");
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`;
  }
  return link.href ?? "#";
}
