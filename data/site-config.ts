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
    focusAreas: string;
    serviceMode: string;
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
    professionalTitle: "Psicanalista Integrativa",
    focusAreas: "Psicanálise · ANÁLISE JUNGUIANA · TerAPIA HOLÍSTICA",
    serviceMode: "Atendimentos on-line",
    introduction:
      "Ajudo pessoas em seu processo de autoconhecimento e individuação.",
    about:
      "Meu trabalho está fundamentado na Psicanálise Integrativa e na abordagem junguiana. Como escritora e acadêmica em Antropologia, reúno diferentes perspectivas para compreender cada pessoa em sua singularidade. Ofereço uma escuta ética, acolhedora e confidencial, auxiliando na elaboração de conflitos, no autoconhecimento e nos processos de transformação.",
    portraitSrc: "/queila-de-oliveira.jpg",
    portraitAlt: "Queila de Oliveira",
  },
  contact: {
    whatsappNumber: "5511988093689",
    email: "queila@deoliveirar.com",
  },
  services: [
    {
      id: "whatsapp",
      label: "Falar no WhatsApp",
      description: "Agende sua sessão",
      kind: "whatsapp",
      icon: "whatsapp",
      message: "Olá, encontrei seu perfil e gostaria de saber mais sobre os atendimentos.",
      featured: true,
    },
  ],
  otherLinks: [
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
      description: "queila@deoliveirar.com",
      kind: "email",
      icon: "email",
      href: "mailto:queila@deoliveirar.com",
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
      "Atendimentos remotos de psicanálise e tarô com Queila de Oliveira, voltados ao autoconhecimento e à reflexão.",
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
