import {
  Brain,
  EnvelopeSimple,
  InstagramLogo,
  Sun,
  TiktokLogo,
  UserCircle,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import {
  linkHref,
  siteConfig,
  type IconName,
  type SiteLink,
} from "../data/site-config";

const { profile } = siteConfig;

const icons = {
  brain: Brain,
  whatsapp: WhatsappLogo,
  instagram: InstagramLogo,
  youtube: YoutubeLogo,
  tiktok: TiktokLogo,
  email: EnvelopeSimple,
  profile: UserCircle,
} satisfies Record<Exclude<IconName, "tarot-cards">, typeof Brain>;

const brandIcons = new Set<IconName>([
  "whatsapp",
  "instagram",
  "youtube",
  "tiktok",
]);

function LinkIcon({ link }: { link: SiteLink }) {
  if (link.icon === "tarot-cards") {
    return (
      <span className="tarot-card-icon">
        <Sun size={17} weight="bold" />
      </span>
    );
  }

  const Icon = icons[link.icon];

  return (
    <Icon
      size={link.featured ? 27 : 23}
      weight={brandIcons.has(link.icon) ? "fill" : link.featured ? "duotone" : "regular"}
    />
  );
}

function LinkCard({ link }: { link: SiteLink }) {
  const external = link.kind === "external" || link.kind === "whatsapp";
  const label = external ? `${link.label} (abre em nova aba)` : link.label;
  const arrow = link.kind === "anchor" ? "↓" : external ? "↗" : "→";

  return (
    <a
      className={link.featured ? "link-card service-link" : "link-card supporting-link"}
      href={linkHref(link)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
    >
      <span className="link-symbol" aria-hidden="true">
        <LinkIcon link={link} />
      </span>
      <span className="link-copy">
        <strong>{link.label}</strong>
        <small>{link.description}</small>
      </span>
      <span className="link-arrow" aria-hidden="true">{arrow}</span>
    </a>
  );
}

export function App() {
  return (
    <main className="site-shell">
      <div className="celestial-mark celestial-mark-one" aria-hidden="true">✦</div>
      <div className="celestial-mark celestial-mark-two" aria-hidden="true">☾</div>

      <article className="profile-card" aria-labelledby="profile-name">
        <header className="profile-header">
          <div className="portrait-frame">
            <img
              className="portrait-photo"
              src={profile.portraitSrc}
              alt={profile.portraitAlt}
              width={400}
              height={400}
              fetchPriority="high"
            />
          </div>
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1 id="profile-name">{profile.name}</h1>
          <p className="professional-title">{profile.professionalTitle}</p>
          <p className="introduction">{profile.introduction}</p>
        </header>

        <section aria-labelledby="services-title">
          <div className="section-heading">
            <span aria-hidden="true" />
            <h2 id="services-title">Como posso te acompanhar?</h2>
            <span aria-hidden="true" />
          </div>
          <nav className="link-list primary-links" aria-label="Escolha seu atendimento">
            {siteConfig.services.map((link) => <LinkCard key={link.id} link={link} />)}
          </nav>
        </section>

        <nav className="link-list supporting-links" aria-label="Outros canais e informações">
          {siteConfig.otherLinks.map((link) => <LinkCard key={link.id} link={link} />)}
        </nav>

        <section className="about-panel" id="sobre" aria-labelledby="about-title">
          <p className="about-kicker">Um cuidado que respeita seu tempo</p>
          <h2 id="about-title">Sobre o atendimento</h2>
          <p>{profile.about}</p>
        </section>

        {siteConfig.location ? (
          <a
            className="location-card"
            href={siteConfig.location.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteConfig.location.label} (abre em nova aba)`}
          >
            <span aria-hidden="true">⌖</span>
            <span><strong>{siteConfig.location.label}</strong><small>{siteConfig.location.note}</small></span>
            <span aria-hidden="true">↗</span>
          </a>
        ) : null}

        <footer className="site-footer">
          <span className="footer-ornament" aria-hidden="true">— ✦ —</span>
          <p>Os atendimentos oferecidos não substituem acompanhamento médico, psicológico ou serviços de emergência.</p>
          <small>Em uma situação de urgência, procure o serviço de emergência da sua região.</small>
        </footer>
      </article>
    </main>
  );
}

export default App;
