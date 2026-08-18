export type LinkKind = "whatsapp" | "external" | "anchor";

export interface SiteLink {
  id: string;
  label: string;
  description: string;
  kind: LinkKind;
  symbol: string;
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
    portraitAlt: string;
  };
  whatsappNumber: string;
  services: SiteLink[];
  otherLinks: SiteLink[];
  location: { label: string; note: string; href: string };
  seo: { title: string; description: string; canonical: string };
}

// PLACEHOLDERS: substitua estes dados e defina isProductionReady como true
// somente depois de revisar nome, foto, credenciais e todos os destinos.
export const siteConfig: SiteConfig = {
  isProductionReady: false,
  profile: {
    name: "Nome da profissional",
    professionalTitle: "Terapeuta e taróloga",
    eyebrow: "Cuidado · Presença · Autoconhecimento",
    introduction:
      "Um espaço seguro para acolher o que você sente, compreender seus ciclos e encontrar caminhos possíveis com mais clareza.",
    about:
      "Aqui você será recebida com escuta, respeito e presença. O atendimento terapêutico vem em primeiro lugar, e o tarô pode ser uma ferramenta complementar de reflexão sobre escolhas e ciclos.",
    portraitAlt: "Foto da profissional será adicionada em breve",
  },
  whatsappNumber: "5500000000000",
  services: [
    {
      id: "terapia",
      label: "Agendar terapia",
      description: "Escuta e cuidado para o seu momento",
      kind: "whatsapp",
      symbol: "◌",
      message: "Olá, gostaria de informações sobre terapia.",
      featured: true,
    },
    {
      id: "taro",
      label: "Consultar o tarô",
      description: "Orientação para escolhas e ciclos",
      kind: "whatsapp",
      symbol: "✦",
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
      symbol: "☾",
      message: "Olá, encontrei seu perfil e gostaria de saber mais sobre os atendimentos.",
    },
    {
      id: "instagram",
      label: "Instagram",
      description: "Conteúdos e reflexões",
      kind: "external",
      symbol: "◎",
      href: "https://instagram.com/SEU_PERFIL",
    },
    {
      id: "sobre",
      label: "Sobre a profissional",
      description: "Conheça a abordagem de atendimento",
      kind: "anchor",
      symbol: "✧",
      href: "#sobre",
    },
  ],
  location: {
    label: "Atendimento online e em [Cidade]",
    note: "Consulte disponibilidade e formato pelo WhatsApp.",
    href: "https://maps.google.com/?q=SUA+CIDADE",
  },
  seo: {
    title: "Terapia e Tarô | deoliveirar.com",
    description:
      "Acolhimento, escuta e autoconhecimento por meio da terapia e do tarô.",
    canonical: "https://deoliveirar.com",
  },
};

export function linkHref(link: SiteLink): string {
  if (link.kind === "whatsapp") {
    const message = encodeURIComponent(link.message ?? "");
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
  }
  return link.href ?? "#";
}
