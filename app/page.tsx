import type { Metadata } from "next";
import { linkHref, siteConfig, type SiteLink } from "../data/site-config";

const { profile, seo } = siteConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: seo.canonical },
  robots: siteConfig.isProductionReady
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: seo.canonical,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary",
    title: seo.title,
    description: seo.description,
  },
};

function LinkCard({ link }: { link: SiteLink }) {
  const external = link.kind === "external" || link.kind === "whatsapp";
  const label = external ? `${link.label} (abre em nova aba)` : link.label;

  return (
    <a
      className={link.featured ? "link-card service-link" : "link-card supporting-link"}
      href={linkHref(link)}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
    >
      <span className="link-symbol" aria-hidden="true">{link.symbol}</span>
      <span className="link-copy">
        <strong>{link.label}</strong>
        <small>{link.description}</small>
      </span>
      <span className="link-arrow" aria-hidden="true">{external ? "↗" : "↓"}</span>
    </a>
  );
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.professionalTitle,
    url: seo.canonical,
    description: seo.description,
  };

  return (
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="celestial-mark celestial-mark-one" aria-hidden="true">✦</div>
      <div className="celestial-mark celestial-mark-two" aria-hidden="true">☾</div>

      <article className="profile-card" aria-labelledby="profile-name">
        <header className="profile-header">
          <div className="portrait-placeholder" role="img" aria-label={profile.portraitAlt}>
            <span aria-hidden="true">✦</span>
            <small>foto</small>
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

        <footer className="site-footer">
          <span className="footer-ornament" aria-hidden="true">— ✦ —</span>
          <p>Os atendimentos oferecidos não substituem acompanhamento médico, psicológico ou serviços de emergência.</p>
          <small>Em uma situação de urgência, procure o serviço de emergência da sua região.</small>
        </footer>
      </article>
    </main>
  );
}
