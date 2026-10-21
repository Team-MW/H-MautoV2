import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";

function TikTokLogo({ size = 28 }) {
  const note =
    "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={note} fill="#25F4EE" transform="translate(1.15 0.55)" />
      <path d={note} fill="#FE2C55" transform="translate(-1.05 -0.45)" />
      <path d={note} fill="#ffffff" />
    </svg>
  );
}

export default function DiscoverTikTok() {
  if (!siteConfig.sectionsVisibility.tiktok) {
    return null;
  }

  const { tiktokSection } = siteConfig;

  return (
    <section id="nous-decouvrir" className="tiktok-section" aria-labelledby="tiktok-heading">
      <div className="container">
        <div className="tiktok-header">
          <div className="tiktok-logo-badge">
            <span className="tiktok-logo-mark">
              <TikTokLogo size={22} />
            </span>
            <span>TikTok {tiktokSection.profileHandle}</span>
          </div>

          <span className="eyebrow">{tiktokSection.eyebrow}</span>
          <h2 id="tiktok-heading" className="heading-lg tiktok-title">
            {tiktokSection.title}
          </h2>
          <p className="tiktok-lead">{tiktokSection.description}</p>
        </div>

        <div className="tiktok-grid">
          {tiktokSection.videos.map((video) => (
            <article key={video.id} className="tiktok-phone">
              <div className="tiktok-phone-bezel">
                <div className="tiktok-phone-screen">
                  <iframe
                    src={`https://www.tiktok.com/player/v1/${video.id}?music_info=0&description=0&progress_bar=1&play_button=1&volume_control=1&fullscreen_button=1&timestamp=0&loop=0&autoplay=0&native_context_menu=0&closed_caption=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>

              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tiktok-video-link"
              >
                <TikTokLogo size={16} />
                <span>Voir sur TikTok</span>
                <ExternalLink size={13} strokeWidth={2.4} />
              </a>
            </article>
          ))}
        </div>

        <div className="tiktok-cta">
          <a
            href={tiktokSection.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn tiktok-follow-btn"
          >
            <TikTokLogo size={20} />
            <span>{tiktokSection.ctaLabel}</span>
            <ExternalLink size={15} strokeWidth={2.4} />
          </a>
        </div>
      </div>
    </section>
  );
}
